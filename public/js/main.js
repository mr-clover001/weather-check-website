// console.log("hello you r conact");
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
// temp_status.innerHTML = "< i class='fa fa-sun'  style='color:#eccc68;' ></i>";
// const dataHide =
const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=49009cefbecd88ee570420e0bd026bc8`;
      const response = await fetch(url).then((response) => response.json());
      const arrData = [response];

      // console.log(arrData);
      // console.log(arrData[0].weather[0].main);
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
      temp.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;

      // condition to check cloudy or sunny
      if (tempMood == "clear") {
        temp_status.innerHTML = `<i class="fa fa-sun" style="color:#eccc68;" aria-hidden="true"></i>`;
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML = `<i class="fa fa-cloud" style="color:#f1f2f6; aria-hidden="true"></i>`;
      } else if (tempMood == "rain") {
        temp_status.innerHTML = `< i class="fa fa-rain" style="color:#a4b0be;" aria-hidden="true"></i>`;
      } else {
        temp_status.innerHTML = `<i class="fa fa-sun" style="color:#eccc68;" aria-hidden="true"></i>`;
      }

      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "plz enter the city name properly";
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
