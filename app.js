const Form = document.querySelector("#filmekleform");
const FormFilmAdi = document.querySelector("#formfilmadi");
const FormFilmYonetmen = document.querySelector("#formfilmyonetmen");
const FormFilmAfis = document.querySelector("#formfilmafis");
const FilmTablo = document.querySelector("#filmtablo");
let YeniSatir;

Form.addEventListener("submit", FormaEkleFonksiyonu);

function deneme(e){
    console.log("test");
    
    e.preventDefault();
}
function FormaEkleFonksiyonu(a){
    console.log("submit oldu");
    YeniSatirEklemeFonksiyonu(a);
    FilmAfisEklemeFonksiyonu(a);
    FilmAdiEklemeFonksiyonu(a);
    FilmYonetmeniEklemeFonksiyonu(a);
    a.preventDefault();
}
function YeniSatirEklemeFonksiyonu(e){
    YeniSatir = document.createElement("tr");
    FilmTablo.appendChild(YeniSatir);
    e.preventDefault();
}
function FilmAdiEklemeFonksiyonu(e){
    let YeniFilmAdi = document.createElement("td");
    YeniFilmAdi.textContent = FormFilmAdi.value.trim();
    YeniFilmAdi.id = "sütün1";
    YeniSatir.appendChild(YeniFilmAdi);
    console.log(YeniFilmAdi);
    e.preventDefault();
}
function FilmYonetmeniEklemeFonksiyonu(e){
    let YeniFilmYonetmeni = document.createElement("td");
    YeniFilmYonetmeni.textContent = FormFilmYonetmen.value.trim();
    YeniFilmYonetmeni.id = "sütün2";
    YeniSatir.appendChild(YeniFilmYonetmeni);
    console.log(YeniFilmYonetmeni);
    e.preventDefault();
}
function FilmAfisEklemeFonksiyonu(e){
    let YeniFilmAfis = document.createElement("td");
    YeniFilmAfis.textContent = FormFilmAfis.value.trim();
    YeniFilmAfis.id = "sütün3";
    YeniSatir.appendChild(YeniFilmAfis);
    console.log(YeniFilmAfis);
    e.preventDefault();
}





