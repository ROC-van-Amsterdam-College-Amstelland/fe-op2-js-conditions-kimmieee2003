function zoekUit() {
    var aantal = document.getElementById("aantal").value;
    var duur =  document.getElementById("duur").value;
    var streaming = document.getElementById("streaming").value;

    var abonnement ="eenvoudig";
//als je met meer dan 2 personen kijkt en meer dan 3 uur per dag, dan is het beste abonnement familie
//pseudocode: als (aantal==3 en duur>3 dan abonnement ="familie")

if(aantal==3) {
    document.getElementsByTagName ="familie"
}

if(duur>3) {
    document.getElementsByTagName ="familie"
}


//als je met 2 of meer personen kijkt of al een abonnement hebt, dan is het beste abonnement uitgebreid
//pseudocode: 

if(aantal>=2) {
    document.getElementsByTagName = "uitgebreid"
}

//als je met 2 personen kijkt of meer dan 4 uur per dag dan is het abonnement standaard
//pseudocode: 

if(aantal ==2) { 
    document.getElementsByTagName = "standaard"
}

if(duur>4) {
    document.getElementsByTagName = "standaard"
}


// als je met 1 persoon kijkt en 6 of meer uur per dag dan is het abonnement uitgebreid
//pseudocode: 

if(aantal==1) {
    document.getElementsByTagName = "uitgebreid"
}

if(duur>6) {
    document.getElementsByTagName = "uitgebreid"
}


//toon het type abonnement op het scherm

function zoekUit(){
    
}