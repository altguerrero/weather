const getDirectionWind = (wind) => {
  const deg = wind.deg;

  let direction;
  if (deg == 0 || deg == 1 || deg == 360) {
    direction = "North";
  } else if (deg >= 2 && deg <= 89) {
    direction = "Northeast";
  } else if (deg == 90) {
    direction = "East";
  } else if (deg >= 91 && deg <= 179) {
    direction = "Southeast";
  } else if (deg == 180) {
    direction = "South";
  } else if (deg >= 181 && deg <= 269) {
    direction = "Southwest";
  } else if (deg == 270) {
    direction = "West";
  } else {
    direction = "Northwest";
  }

  return direction;
};

export default getDirectionWind;
