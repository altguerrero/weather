import {
  Clouds,
  Thunderstorm,
  Drizzle,
  RainSun,
  Rain,
  ClearSun,
  ClearMoon,
  CloudsSun,
  CloudsMoon,
  Cloud,
  CloudDark,
} from "../components/Icons";

const getIcon = (item, color) => {
  let icon;
  const id = item.id;
  const night = item.icon.includes("n");

  console.log();
  if (id >= 801 && id <= 804) {
    icon = Clouds(color);
  } else if (id >= 200 && id <= 232) {
    icon = Thunderstorm(color);
  } else if (id >= 300 && id <= 321) {
    icon = Drizzle(color);
  } else if (id >= 500 && id <= 504) {
    icon = RainSun(color);
  } else if (id == 511) {
    icon = "Buscar icon";
  } else if (id >= 520 && id <= 531) {
    icon = Rain(color);
  } else if (id >= 600 && id <= 622) {
    icon = "Buscar icon Snow";
  } else if (id >= 701 && id <= 781) {
    icon = "Buscar icon Tornado";
  } else if (id == 800) {
    if (night) {
      icon = ClearMoon();
    } else {
      icon = ClearSun();
    }
  } else if (id == 801) {
    if (night) {
      icon = CloudsMoon(color);
    } else {
      icon = CloudsSun(color);
    }
  } else if (id == 802) {
    icon = Cloud(color);
  } else if (id >= 803 && id <= 804) {
    icon = CloudDark(color);
  } else {
    icon = "?";
  }

  return icon;
};

export default getIcon;
