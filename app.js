const Form = document.querySelector("#filmekleform");
const FormFilmAdi = document.querySelector("#formfilmadi");
const FormFilmYonetmen = document.querySelector("#formfilmyonetmen");
const FormFilmAfis = document.querySelector("#formfilmafis");
const FilmTablo = document.querySelector("#filmtablo");
let YeniSatir;

Form.addEventListener("submit", FormaEkleFonksiyonu);
FilmTablo.addEventListener("click", SatirSilFonksiyonu);

function FormaEkleFonksiyonu(a){
    YeniSatirEklemeFonksiyonu(a);
    FilmAfisEklemeFonksiyonu(a);
    FilmAdiEklemeFonksiyonu(a);
    FilmYonetmeniEklemeFonksiyonu(a);
    FilmiSilButonFonksiyonu(a);
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
}
function FilmYonetmeniEklemeFonksiyonu(e){
    let YeniFilmYonetmeni = document.createElement("td");
    YeniFilmYonetmeni.textContent = FormFilmYonetmen.value.trim();
    YeniFilmYonetmeni.id = "sütün2";
    YeniSatir.appendChild(YeniFilmYonetmeni);
}
function FilmAfisEklemeFonksiyonu(e){
    let YeniFilmAfis = document.createElement("td");
    YeniFilmAfis.textContent = FormFilmAfis.value.trim();
    YeniFilmAfis.id = "sütün3";
    YeniSatir.appendChild(YeniFilmAfis);
}
function FilmiSilButonFonksiyonu(e){
    YeniSilButonu = document.createElement("td");
    YeniSilButonu.innerHTML = "<a href='#'>Sil</a>";
    YeniSatir.appendChild(YeniSilButonu);
}
function SatirSilFonksiyonu(e){
    if (e.target.textContent === "Sil"){
        if (e.target.parentElement.parentElement.id === "filmtablo") {
        }else {
            e.target.parentElement.parentElement.remove();
        }
        e.preventDefault();
    }
}



