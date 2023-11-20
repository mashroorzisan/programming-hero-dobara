const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
};
const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country=>getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// const getCountryHTML = (country) =>{
//     // destructuring
//     //option-1
//     const {name, flags} = country;
//     return`
//         <div class ="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}"></img>
//         </div>
//     `
// }
const getCountryHTML = ({name, flags}) =>{
    // destructuring
    //option-2
    return`
        <div class ="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}"></img>
        </div>
    `
}


loadCountries();