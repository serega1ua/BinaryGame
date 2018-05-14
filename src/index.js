import "babel-polyfill";

// create two instances
	/* name, health, power */
var fighter = new Fighter("Хрюшик 1", 1340, 2);
console.dir(fighter);
 
var fighter1 = new Fighter("Хрюшик 1-1",  1100, 30);
 
									/* name, health, power */
var improvedFighter = new ImprovedFighter("Валюшик 2", 1901, 3);
console.dir(improvedFighter);
var improvedFighter1 = new ImprovedFighter("Валюшик 2-1", 5, 200);

// call fight function

fight(fighter, improvedFighter,  20, 8, 2, 20, 1, 77,  20, 4, 77,  20, 5, 77,  5, 420, 77,  20, 20, 77,  20, 20, 77,  20, 20, 77,  20, 20, 77,  20, 20, 77).
then(x => console.log(`
==========
выполнен промис из async function fight: ${x} и он обработан через fight().then` ));