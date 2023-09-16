import {
  dashboard,
  languages,
  trains,
  profile,
  logout
 
} from "../assets";

export const navlinks = [
  {
    name: "Home",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "LanguageSelect",
    imgUrl: languages,
    link: "/languageSelect",
  },
  {
    name: "Trains",
    imgUrl: trains,
    link: "/searchtrains",
  },

  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
    disabled: true,
  },
  {
    name: "Logout",
    imgUrl: logout,
    link: "/logout",
    disabled: true,
  },
];
