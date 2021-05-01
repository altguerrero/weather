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

  header.appendChild(await Header());
  section1.appendChild(await CardsDay());
  section2.appendChild(await Visit());
  avatar.appendChild(await Avatar());
  section3.appendChild(await CardsLocation());

  const cardLocation = null || document.querySelector(".card-location__main");
  cardLocation.appendChild(await NewLocation());
};

export default Layout;
