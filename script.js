// Check script is connected

console.log("Script is Connected!");

// Get Country by name function

const run_rest_Countries = document.querySelector("#run_rest_Countries");

const getCountryByName = async (event) => {
    console.log("Country by name button pressed!");
    event.preventDefault();
    console.log('Country entered: ' + event.target[0].value);

    const search =  event.target[0].value;   
    const response = await fetch (`https://restcountries.com/v3.1/name/${search}`);
    const jsonData = await response.json();
    console.log(jsonData);
    const name = document.getElementById("Country_Name");
    name.innerText = jsonData[0].name.common

// Modifying to add Population

    const population = document.getElementById("Country_Population");
    population.innerText = jsonData[0].population;
    console.log("getCountryByName has run");
}

// Get All Countries Function

    const getAllCountries = async (event) => {
    console.log("getAllCountries is being run on page refresh");
    //event.preventDefault();

    const all_countries_jsonData = await fetch ("https://restcountries.com/v3.1/name/all");
    const jsonData = await all_countries_jsonData.json();
    console.log(jsonData);

    const all_countries_populations = document.getElementById("All_Countries_And_Populations");
    all_countries_populations.innerText = jsonData[0].name.common;
    }



    // Currently getting error below with line 39 above
    // -> Uncaught (in promise) TypeError: Cannot set properties of null (setting 'innerText')
    //at getAllCountries (script.js:39:41)

// Run Functions

run_rest_Countries.addEventListener("submit", getCountryByName);
getAllCountries();
