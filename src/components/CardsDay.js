import getData from "../utils/getData";
import getIcon from "../utils/getIcon";
import getDay from "../utils/getDay";

const CardsDay = async () => {
  const divElement = document.createElement("div");
  divElement.classList.add("card-day__main");
  const data = await getData("Bogota", "forecast");
  const days = 3;
  let increment = days;
  let n = 1;

  for (let i = 0; i < days; i++) {
    divElement.innerHTML += `
    <div class="card-day__item">
      <div class="card-day__icon">${getIcon(
        data.list[increment].weather[0]
      )}</div>
      <div class="card-day__content">
        <h4>${await getDay(data.list[increment].dt_txt)}</h4>
        <span>${data.list[increment].weather[0].main}</span>
      </div>
      <div class="card-day__temp">
        <p>${Math.round(
          data.list[i].main.temp_max
        )}° <span>/</span> ${Math.round(
      data.list[increment].main.temp_min
    )}°</p>
      </div>
    </div>
    `;
    n += 2;
    increment = days * n + days;
  }

  return divElement;
};

export default CardsDay;
