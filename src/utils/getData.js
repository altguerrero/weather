const API = process.env.API;
const KEY = process.env.KEY;

const getData = (city, type = "weather") => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let url;
    if (type == "forecast") {
      url = `${API}${type}?q=${city}&units=metric&appid=${KEY}`;
    } else {
      url = `${API}${type}?q=${city}&units=metric&appid=${KEY}`;
    }
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status == 200 && xhr.readyState == 4) {
        resolve(xhr.response);
      } else {
        console.log("error");
      }
    };
    xhr.onerror = () => {
      reject("Error");
    };
    xhr.send();
  });

  return promise;
};

export default getData;
