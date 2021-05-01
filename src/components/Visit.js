import view from "../view/Visit.html";
import { Marker } from "./Icons";

const Visit = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("card-visit__container");
  divElement.innerHTML = view;

  Array.from(divElement.querySelectorAll(".card-visit__icon")).map((item) => {
    item.innerHTML = `${Marker()}`;
  });

  return divElement;
};

export default Visit;
