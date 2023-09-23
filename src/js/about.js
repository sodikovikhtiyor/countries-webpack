import "../css/main.css";
import "./mode";

import request from "./request";
import { createCountryInfo } from "./upadateUI";

const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
const country = urlParams.get("country");
// console.log(country);

const countryAPI = `https://restcountries.com/v3.1/${country}`;
request(countryAPI)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((err) => {
    alert(err.message);
  });

