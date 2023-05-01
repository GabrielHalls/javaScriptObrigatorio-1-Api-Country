const bnt = document.querySelector("#btn")

bnt.addEventListener("click",(e)=>{
    e.preventDefault()
    selectedCountry()
})

 function selectedCountry(){
    const campo= document.querySelector("#country").value
    const URL = `https://restcountries.com/v3.1/name/${campo}`

    fetch(URL) /* CONEXÃO*/
    .then((res)=>{
        return res.json()

    })
    .then((data)=>{
        console.log(data[0]);
        let capital = data[0].capital[0]
        let bandeira = data[0].flags.svg
        let population = data[0].population
        let continents = data[0].continents
        let currencies = data[0].currencies [Object.keys(data[0].currencies)].name  /* Estudar Object.keys - Priemeira vez usando */


        document.querySelector("#capital").innerHTML =`<b>Capital:</b> <i>${capital}</i>`
        document.querySelector("#flagCountry").setAttribute("src", `${bandeira}`)
        document.querySelector("#population").innerHTML = `<b>Population:</b> <i>${population}</i>`
        document.querySelector("#continent").innerHTML = `<b>Continent:</b> <i>${continents}</i>`
        document.querySelector("#currency").innerHTML = `<b>Currency:</b> <i>${currencies}</i>`
    })
 }


