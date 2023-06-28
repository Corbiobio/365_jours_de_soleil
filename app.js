let card_container = document.getElementById("card_container")

let data_meteo = [{
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    alt: "chance de tempette",
    temp_max: "14",
    temp_min: "6"
}, {
    title_day: "mar",
    title_date: "21",
    icon: "smoke.png",
    alt: "enfumer",
    temp_max: "8",
    temp_min: "1"
}, {
    title_day: "mer",
    title_date: "22",
    icon: "blizzard.png",
    alt: "blizzar",
    temp_max: "6",
    temp_min: "-6"
}, {
    title_day: "jeu",
    title_date: "23",
    icon: "snow.png",
    alt: "neige",
    temp_max: "4",
    temp_min: "-2"
}, {
    title_day: "ven",
    title_date: "24",
    icon: "sunny.png",
    alt: "soleil",
    temp_max: "14",
    temp_min: "10"
}, {
    title_day: "sam",
    title_date: "25",
    icon: "thunder-storm.png",
    alt: "tempette",
    temp_max: "16",
    temp_min: "12"
}, {
    title_day: "dim",
    title_date: "26",
    icon: "fog.png",
    alt: "brouillard",
    temp_max: "8",
    temp_min: "8"
}, {
    title_day: "lun",
    title_date: "27",
    icon: "wind.png",
    alt: "vent",
    temp_max: "4",
    temp_min: "3"
},];
console.log(card_container);

for (let i = 0; i < data_meteo.length; i++) {
    console.log(data_meteo[i]);
    card_container.innerHTML += `
<article>
<p>${data_meteo[i].title_day}</p>
<p>${data_meteo[i].title_date}</p>
<img src="/img/${data_meteo[i].icon}" alt="${data_meteo.alt}">
<div>
  <span>${data_meteo[i].temp_max}</span>
  <hr>
  <span>${data_meteo[i].temp_min}</span >
</div >
</article > `
}