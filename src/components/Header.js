import view from "../view/Header.html";
import { Marker, BogotaMap } from "./Icons";
import getData from "../utils/getData";
import getIcon from "../utils/getIcon";

const Header = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("header__main");
  divElement.innerHTML = view;

  const data = await getData("Bogota");
  //   Location
  divElement.querySelector(".header__location").innerHTML = `
    ${Marker()}
    <h3>${data.name}</h3>
  `;
  // State
  divElement.querySelector(".header__state").innerHTML = `
    ${BogotaMap("#313388")}
  `;
  // Weather
  divElement.querySelector(".header__weather").innerHTML = `
    ${getIcon(data.weather[0], "#fff")}
    <h4>${data.weather[0].main}</h4>
  `;
  // Temp
  divElement.querySelector(".header__temp").innerHTML = `
    <h4>${Math.round(data.main.temp)}</h4>
  `;

  return divElement;
};

export default Header;
