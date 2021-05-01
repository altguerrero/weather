import getData from "../utils/getData";
import getIcon from "../utils/getIcon";
import getDay from "../utils/getDay";
import getDirectionWind from "../utils/getDirectionWind";

const CardsLocation = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("card-location__main");
  const locations = [
    {
      contry: "Francia",
      city: "Lyon",
      data: await getData("lyon"),
    },
    {
      contry: "Francia",
      city: "Paris",
      data: await getData("Paris"),
    },
  ];

  locations.map((item) => {
    divElement.innerHTML += `
        <div class="card-location__container">
        <div class="card-location__item">
            <div class="card-location__icon">
                ${getIcon(item.data.weather[0])}
            </div>
            <div class="card-location__content">
                <div class="card-location__temp">
                    <h4>${Math.round(item.data.main.temp)}</h4>
                </div>
                <div class="card-location__address">
                    <span>${item.city}</span>
                    <span>${item.contry}</span>
                </div>
            </div>
        </div>
        <div class="card-location__item">
            <div class="card-location__info">
                <span>Humidity ${Math.round(item.data.main.humidity)}%</span>
                <span>${getDirectionWind(item.data.wind)}</span>
                <span>${(item.data.wind.speed * 3.6).toFixed(2)}km/h</span>
                <span></span>
            </div>
        </div>
        </div>
    `;
  });

  console.log(locations);

  return divElement;
};

export default CardsLocation;
