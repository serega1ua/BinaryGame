// Create class ImprovedFighter
import {
    Fighter
} from "./fighter.js";

class ImprovedFighter extends Fighter {
	  constructor(name, health, power) {
      super(name, health, power);}
      doubleHit(enemy, point) {super.hit(enemy, point * 2); }
	 }

	export {
    ImprovedFighter
};