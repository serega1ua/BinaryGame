// Create class ImprovedFighter

class ImprovedFighter extends Fighter {
	  constructor(name, health, power) {
      super(name, health, power);}
      doubleHit(enemy, point) {super.hit(enemy, point * 2); }
	 }
