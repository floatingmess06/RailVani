from textblob import TextBlob
from googletrans import Translator
import spacy
import re
nlp = spacy.load("en_core_web_sm")

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
API_KEY = "8e31216993mshc28306142e70ca0p185a0cjsnea0bfaa02bbf"

def words_to_number(word_string):
    
    word_to_number = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
        'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13,
        'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
        'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
        'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
        'eighty': 80, 'ninety': 90
    }

    words = word_string.split()
    total = 0
    current_number = 0

    for word in words:
        if word in word_to_number:
            current_number += word_to_number[word]
        elif word == 'hundred':
            current_number *= 100
        elif word == 'and':
            pass 
        else:
            total += current_number
            current_number = 0

    total += current_number
    return total




def extract_info(sentence):
    doc = nlp(sentence)
    starting_point = []
    destination = []
    journey_date = None
    duration = 0.0

    month_map = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12",
    }

    encountered_on = False  
    encountered_to = False
    encountered_from = False
    encountered_in = False
    another = False

    for token in doc:

        if token.text == '.' or token.text == ',':
            encountered_from = False
            encountered_to = False
            continue
        elif token.text == "minutes":
            duration = duration / 60

        if token.text == "another" or token.text == "next" or token.text == "the next" or token.text == "the another":
            another = True
            continue
        if token.text == "in":
            encountered_to = False
            encountered_in = True

        elif encountered_in:
            if token.text[0] >= '0' and token.text[0] <= '9':
               duration = int(token.text)
            else:
               duration = words_to_number(token.text)
            encountered_in = False
        elif "to" == token.text:
            encountered_to = True
            encountered_from = False

            
        elif "from" == token.text:
           
            encountered_from = True
        elif "on" == token.text and journey_date == None:
            encountered_to = False
            encountered_on = True
            temp1 = [t.text for t in token.subtree if t.dep_ not in (
                'punct', 'prep')]
            date_tokens = temp1

            if len(date_tokens) >= 2:
                day = date_tokens[1]

                if day[0] >= '0' and day[0] <= '9':
                   month = month_map.get(date_tokens[0])
                else:
                    day = date_tokens[0]
                    month = month_map.get(date_tokens[1])

                text = day
                inte = re.findall(r'\d+', text)

                if day and month:
                    journey_date = f"{inte[0]}-{month}-2023"

        elif encountered_from:
            starting_point.append(token.text)
        elif encountered_to:
            destination.append(token.text)
        elif journey_date != None:
            encountered_on = False

    return " ".join(starting_point), " ".join(destination), journey_date, duration





@app.route('/search_station', methods=['GET'])
def search_station():
    
    source_city = request.args.get("query")
    lang=request.args.get("toLang")
    print(source_city)
    print(lang)
    
    if not source_city:
        return jsonify({"error": "Please provide a query parameter 'query' with the source city."}), 400

    headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    }
    
    translator = Translator()

   
    translated_source_city = translator.translate(
        source_city, dest="en").text

    print(translated_source_city)



    params = {"query": translated_source_city}
    url = "https://irctc1.p.rapidapi.com/api/v1/searchStation"

    try:
        response = requests.get(url, headers=headers, params=params)
        
        response.raise_for_status()
        station_data = response.json()
        data=station_data.get('data')
        print(data)
        for item in data:
            print(".")
            item['name']=translator.translate(item['name'],dest=lang).text
        
        print(data)

     
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

irctc_api_url = "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations"


headers = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
}










@app.route('/get_pnr_status', methods=['GET'])
def get_pnr_status():
    # Get the PNR number from the request parameters
    pnr_number = request.args.get('pnrNumber')
    lang=request.args.get('toLang')
    # Check if the PNR number is provided
    if not pnr_number:
        return jsonify({'error': 'PNR number is required'}), 400

    # Define the headers for the API request
    headers = {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }

    # Make the API request
    url = 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus'
    params = {'pnrNumber': pnr_number}

    try:
        response = requests.get(url, headers=headers, params=params)
        response_data = response.json()
        return jsonify(response_data), response.status_code

    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Error connecting to the API'}), 500



@app.route('/get_train_schedule', methods=['GET'])
def get_train_schedule():
    # Get the train number from the request parameters
    train_no = request.args.get('trainNo')
    
    # Check if the train number is provided
    if not train_no:
        return jsonify({'error': 'Train number is required'}), 400

    # Define the headers for the API request
    headers = {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }

    # Make the API request
    url = 'https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule'
    params = {'trainNo': train_no}

    try:
        response = requests.get(url, headers=headers, params=params)
        response_data = response.json()
        return jsonify(response_data), response.status_code

    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Error connecting to the API'}), 500

@app.route('queryDetails', methods=['GET'])
def get_all_Details():
    details=request.args.get('query')
    lang=request.args.get('toLang')
    

    
 




























@app.route("/voiceData",methods=["GET"])
def get_voice_data():
    print("dev")
    vData=request.args.get("vData")
    lang=request.args.get("toLang")
    print(lang)
    print(vData)
    translator=Translator()
    transVdata=translator.translate(vData,dest="en").text
    print(transVdata)

    starting_point, destination, journey_date, duration = extract_info(
        transVdata)
    s_point=starting_point.split(' ')
    des_point=destination.split(' ')
    print("Starting Point:", s_point[0])
    print("Destination:", des_point[0])
    print("Journey Date:", journey_date)
    print("Duration Time: ", duration)
    
    dictionary={
        "start":translator.translate(s_point[0],src="en",dest=lang).text,
        "dest": translator.translate(des_point[0],src="en", dest=lang).text,
        "date":journey_date
    }

    print(dictionary)

    return jsonify(dictionary)


@app.route('/getLiveTrainStatus', methods=['GET'])
def get_live_station():
    st = request.args.get("train_num")
    lang=request.args.get("lang")
    print(st)
    try:
        url = 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus'
        headers = {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
        params = {
            'trainNo':st ,
            
        }

        response = requests.get(url, params=params, headers=headers)
        print(response.status_code)
        if response.status_code == 200:
            data = response.json()
           
            newdata = data.get("data")
            print(newdata)
            translator=Translator()
            if(newdata['new_alert_msg']!=""):
               
               
                newdata['new_alert_msg']=translator.translate(newdata['new_alert_msg'],dest=lang).text
                print("abc")
            for item in newdata['current_location_info']:
                if(item['hint']!=""):
                 item['hint']=translator.translate(item['hint'],dest=lang).text
                if(item['readable_message']!=""):
                 item['readable_message']=translator.translate(item['readable_message'],dest=lang).text
                print("asme")
           
            print(newdata)
            return jsonify(newdata)
        else:
            return jsonify({"error": "Failed to fetch data from the API"})

    except Exception as e:
        return jsonify({"error": str(e)})



@app.route("/trains", methods=["GET"])
def get_trains():
    
    source_station = request.args.get("sourceStation")
    destination_station = request.args.get("destinationStation")
    journey_date = request.args.get("journeyDate")
    lang=request.args.get("lang")
    
    print(source_station)


    params = {
        "fromStationCode": source_station,
        "toStationCode": destination_station,
        "dateOfJourney": journey_date,
    }

    try:
        response = requests.get(irctc_api_url, headers=headers, params=params)

        if response.status_code == 200:
            data = response.json()
            newdata=data.get('data')
            
            translator = Translator()
            for item in newdata:
                print("ak")
                item['train_name']=translator.translate(item['train_name'],dest=lang).text
                
                item['from_station_name']=translator.translate(item['from_station_name'],dest=lang).text
                item['to_station_name'] = translator.translate(item['to_station_name'], dest=lang).text
            print() 
            print(newdata)
            return jsonify(newdata)
        else:
            return jsonify({"error": "Failed to fetch data from IRCTC API"}), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)