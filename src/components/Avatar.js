import view from "../view/Avatar.html";
import { Start } from "../components/Icons";

const Avatar = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("avatar__container");
  divElement.innerHTML = view;

  divElement.querySelector(".avatar__icon").innerHTML = `${Start()}`;

  return divElement;
};

export default Avatar;
