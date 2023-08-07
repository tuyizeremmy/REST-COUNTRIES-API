

async function getCountry(){
    const url=await fetch("https://restcountries.com/v3.1/all");
    const res=await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element) 
    });  
}




const countriesElem=document.querySelector(".countries");

getCountry()
function showCountry(data){
const country=document.createElement("div")
country.classList.add("country")  
country.innerHTML=`<div class="country-img">
    <img src="${data.flags.png}">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name.common}</h5>
    <p><strong>Population : </strong>${data.population}</p>
    <p class="regionName"><strong>Region : </strong>${data.continents}</p>
    <p><strong>Capital : </strong>${data.capital}</p>

</div>`
countriesElem.appendChild(country)
country.addEventListener("click",()=>{
    showCountryDetail(data)
})
}




const dropdown=document.querySelector(".dropdown")
const dropElem=document.querySelector(".drop")
dropdown.addEventListener("click",()=>{
dropElem.classList.toggle("showDropDown")
console.log("hi")
})



const region=document.querySelectorAll(".region")
const regionName=document.getElementsByClassName("regionName")
region.forEach(element =>{
    element.addEventListener("click", ()=>{
        console.log(element);
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText)||element.innerText=="All"){
                elem.parentElement.parentElement.style.display="grid"

            }else{
                elem.parentElement.parentElement.style.display="none"
            }
        });
    })
});




const search=document.querySelector(".search")
const countryName=document.getElementsByClassName("countryName")
search.addEventListener("input",()=>{
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
            elem.parentElement.parentElement.style.display="grid"

        }else{
            elem.parentElement.parentElement.style.display="none"
        }
    });
})



const toggle=document.querySelector(".toggle")
const moon=document.querySelector(".moon")
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")

})




const countryModal=document.querySelector(".countryModal")
function showCountryDetail(data){
    countryModal.classList.toggle("show")
    countryModal.innerHTML=` <button class="back">Back</button>
    <div class="modal">
        <div class="leftModal">
            <img src="${data.flags.png}">
        </div>
        <div class="rightModal">
            <h1>${data.name.common}</h1>
            <div class="grid">
            <div class="modalInfo">
                <div class="innerLeft inner">
                    <p><strong>Native Name :</strong></p>
                    <p><strong>Population :</strong>${data.population}</p>
                    <p><strong>Region :</strong>${data.region}</p>
                    <p><strong>Sub Region :</strong>${data.subregion}</p>
                    <p><strong>Capital :</strong>${data.capital}</p>
                </div>
                <div class="innerRight inner">
                    <p><strong>Top Level Domain :</strong>${data.tld}</p>
                    <p><strong>Currencies :</strong>${Object.keys(data.currencies)}:${data.currencies[Object.keys(data.currencies)].name}</p>
                    <p><strong>Languages :</strong>${Object.values(data.languages).toString().split(",").join(",")}</p>
                </div>
            </div>
                <div class="BorderCountry">
                <p><strong>Border countries :</strong></p>
                <button class="border">${data.borders[0]}</button>
                <button class="border">${data.borders[1]}</button>
                <button class="border">${data.borders[2]}</button>
                </div>
            </div>
        </div>
    </div>`

    const BorderCountry=countryModal.querySelector(".BorderCountry")
    BorderCountry.addEventListener("click",()=>{
        showCountryDetail(data)
    })

const back=countryModal.querySelector(".back")
back.addEventListener("click",()=>{
    countryModal.classList.toggle("show")
})

}