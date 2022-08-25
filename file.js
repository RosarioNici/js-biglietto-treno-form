// Variabili per forum in html
const messageHTMLName = document.querySelector(".message-js-one");
const messageHTMLKm = document.querySelector(".message-js-two");
const messageHTMLAge = document.querySelector(".message-js-three")
const messageHTMLNameTiket = document.querySelector(".nome-pass")
const selectHTMLValueAge = document.getElementById("inputAge")

// Nome passeggero
const namePass = ("Nome Cognome");
messageHTMLName.innerHTML = namePass;

// Distanza da percorrere
const distance = ("Distanza da percorrere (in KM)");
messageHTMLKm.innerHTML = distance;



// Età dei passeggeri
const agePasseger = ("Età")
messageHTMLAge.innerHTML = agePasseger;

// Calcolo prezzo bilgietto
const selectInputAge = selectHTMLValueAge.value

function myFunction() {
    let distanceKM = document.getElementById("distance").value;
    let priceTiket = 0.21 * (Number(distanceKM));

    // calcolo sconto

    if ((selectInputAge == "minorenne")) {
        let discount = (priceTiket / 100) * 20;
        let priceTiketDiscount = priceTiket - discount
        priceTiket = priceTiketDiscount.toFixed(2)
    }
    if ((selectInputAge == "over-65")) {
        let OverDiscount = (priceTiket / 100) * 40;
        let priceTiketDiscountOv = priceTiket - OverDiscount
        priceTiket = priceTiketDiscountOv.toFixed(2)
    }
    console.log(priceTiket)

    // compilazione biglietto
    var nameTiket = document.getElementById("name").value
    const nomePasseggero = nameTiket
    messageHTMLNameTiket.innerHTML = nomePasseggero






}
function myFunctionAnnul() {

}




