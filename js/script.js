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
        console.log(data[0].altSpellings[1]);
        console.log(data[0]);
        
    
        let indexCommon = data[0].altSpellings.length -1 
        let capital = data[0].capital[0]
        let bandeira = data[0].flags.svg
        let population = data[0].population
        let continents = data[0].continents
        let currencies = data[0].currencies [Object.keys(data[0].currencies)].name    /* Estudar Object.keys - Priemeira vez usando */
        let common = data[0].altSpellings[indexCommon]
        let flag = data[0].name.common
/*         let languages = data[0].languages[Object.keys(data[0].languages)].name
 */        




        document.querySelector("#capital").innerHTML =`<b>Capital:</b> <i>${capital}</i>` 
        document.querySelector("#flagCountry").setAttribute("src", `${bandeira}`)
        document.querySelector("#population").innerHTML = `<b>Population:</b> <i>${population}</i>`
        document.querySelector("#continent").innerHTML = `<b>Continent:</b> <i>${continents}</i>`
        document.querySelector("#currency").innerHTML = `<b>Currency:</b> <i>${currencies}</i>`
        document.querySelector("#common").innerHTML = `<b>Common:</b> <i>${common}</i>`
        document.querySelector("#flag").innerHTML = ` ${flag}`
/*         document.querySelector("#laguages").innerHTML = `<b>Laguages:</b> <i>${languages}</i>`
 */
    })
 }


