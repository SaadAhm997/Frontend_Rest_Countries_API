// Check script is connected
console.log("Hi");

// Get Country by name

const run_rest_Countries = document.querySelector("#run_rest_Countries")

const handle_run_rest_Countries = () => {

    const button = document.createElement("button");
    button.innertext = "Get country by name";
    button.addEventListener("click", () => getCountryByName())
}

const getCountryByName = async (event) => {
    console.log("country by name button pressed!");
    event.preventDefault();
    console.log(event.target[0].value);

    const search =  event.target[0].value;   
    const response = await fetch (`https://restcountries.com/v3.1/name/${search}`);
    const jsonData = await response.json();
    console.log(jsonData);
    const name = document.getElementById("Country_Name");
    name.innerText = jsonData[0].name.common;
    // console.log(jsonData[0].name.common)
    // name.src = jsonData.message();
    console.log("check to this stage");


}

run_rest_Countries.addEventListener("submit", getCountryByName); 