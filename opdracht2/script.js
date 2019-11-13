/* Opdracht 2 */

/* A) Schrijf code waarmee je ingevulde waarde uit het invulveld 'ophaalt'
 *    maak gebruik van document.getElementById().value; 
 */

/* jouw code hieronder-->> */
var ingevuld_getal = document.getElementById("leeftijd").value ;

/* B) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd groter is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'purple'
 */

/* jouw code hieronder-->> */



var leeftijd_die_mag_stemmen = 18;
document.getElementById("main").style.backgroundColor = "purple";

/* C) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd kleiner is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'green'
 */
function check(){
    if( ingevuld_getal >= leeftijd_die_mag_stemmen  ){
       document.getElementByTagName("main").style.backgroundColor = "green"
    }

}