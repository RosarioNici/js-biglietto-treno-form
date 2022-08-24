// Variabili per forum in html
const messageHTMLName = document.querySelector(".message-js-one");
const messageHTMLKm = document.querySelector(".message-js-two");
const messageHTMLAge = document.querySelector(".message-js-three")
const messageHTMLNameTiket = document.querySelector(".nome-pass")
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



function myFunction() {
    const priceKm = 0.21
    let distanceKM = document.getElementById("distance").value;
    console.log(distanceKM)
    let priceTiket = 0.21 * (Number(distanceKM));
    // calcolo sconto
    var agePassegerMin = document.getElementById("minorenne").value;
    console.log(agePassegerMin)
    let discount = (priceTiket / 100) * 20;
    let priceTiketDiscount = priceTiket - discount;
    priceTiket = priceTiketDiscount.toFixed(2);
    var agePassegerOve = document.getElementById("over-65").value;
    console.log(agePassegerOve)


    if (agePassegerMin === agePassegerMin) {


    } else if (agePassegerCalc = document.getElementById("over-65").value) {
        let OverDiscount = (priceTiket / 100) * 40;
        let priceTiketDiscountOv = priceTiket - OverDiscount;
        priceTiket = priceTiketDiscountOv.toFixed(2);

    }
    // compilazione biglietto
    var nameTiket = document.getElementById("name")
    const nomePasseggero = nameTiket
    messageHTMLNameTiket.innerHTML = nomePasseggero
    console.log(priceTiket)
}
function myFunctionAnnul() {

}




