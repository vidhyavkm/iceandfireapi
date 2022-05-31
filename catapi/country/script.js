console.log("Start flag task");

const countryName = document.createElement("h2");
countryName.innerText = "India";
// document.body.append(countryName);

const countryPopulation = document.createElement("p");
countryPopulation.innerText = "Population:1,394,975,829";
// document.body.append(countryPopulation);

const countryRegion = document.createElement("p");
countryRegion.innerText = "Region: Asia";
// document.body.append(countryRegion);

const countryCapital = document.createElement("p");
countryCapital.innerText = "Capital: New delhi";
// document.body.append(countryCapital);

document.body.append(countryName,countryPopulation,countryRegion,countryCapital);
