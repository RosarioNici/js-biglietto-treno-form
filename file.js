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

// Nome sul biglietto
const namePassTiket = document.getElementById("name").value
messageHTMLNameTiket.innerHTML = namePassTiket

// Calcolo prezzo bilgietto


function myFunction() {
    const namePassTiket = document.getElementById("name").value
    messageHTMLNameTiket.innerHTML = namePassTiket

    const distanceKm = document.getElementById('distance').value;
    const distance = distanceKm;
    console.log(distance)

    var priceTiket = 0.21 * (Number(distance))
    console.log(priceTiket)
    // Qual'è l'età del passeggero?
    const inputAgeHTMLElement = document.getElementById('inputAge')
    const valueAgePass = inputAgeHTMLElement.value;
    let discount
    switch (valueAgePass) {

        case "minorenne": {
            discount = (priceTiket / 100) * 20;
            priceTiket = priceTiket - discount
            break
        }
        case "over-65": {
            discount = (priceTiket / 100) * 40;
            priceTiket = priceTiket - discount
            break
        }
    }

}




