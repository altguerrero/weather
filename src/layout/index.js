import CardsLocation from "../components/CardsLocation";
import CardsDay from "../components/CardsDay";
import Avatar from "../components/Avatar";
import NewLocation from "../components/NewLocation";
import Visit from "../components/Visit";
import Header from "../components/Header";

const Layout = async () => {
  const header = null || document.getElementById("header");
  const section1 = null || document.getElementById("section1");
  const section2 = null || document.getElementById("section2");
  const avatar = null || document.getElementById("avatarContainer");
  const section3 = null || document.getElementById("section3");

  const headerData = await Header();
  const cardsDayData = await CardsDay();
  const visitData = await Visit();
  const avatarData = await Avatar();
  const cardLocationData = await CardsLocation();
  const newLocationData = await NewLocation();

  document.querySelector(".loading").style.display = "none";

  header.appendChild(headerData);
  section1.appendChild(cardsDayData);
  section2.appendChild(visitData);
  avatar.appendChild(avatarData);
  // section3.appendChild(cardLocationData);

  // const cardLocation = null || document.querySelector(".card-location__main");
  // cardLocation.appendChild(newLocationData);
};

export default Layout;
