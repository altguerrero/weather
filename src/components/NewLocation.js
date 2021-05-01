import view from "../view/NewLocation.html";
import { CityMap } from "../components/Icons";

const NewLocation = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("new-location__container");
  divElement.innerHTML = `
    ${view}
    ${CityMap()}
  `;

  return divElement;
};

export default NewLocation;
