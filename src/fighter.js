// Create class Fighter
 class Fighter {
	constructor(name, health, power) {
    this.name = name; 
	this.health = health; 
	this.power = power;
	  }
 

   setDamage(damage) {
			 //устанавливаем фильтр условия для первого ввода на случай, если передан нецелый или нецифровой аргумент
			/*  if (Math.floor(Number(damage)) !== damage)  {
			 console.log ("передано не числовое значение damage,  пытаемся его преобразовать");
			 damage = Math.floor(Math.abs(parseFloat(Number(damage))));	  }   
			 if (typeof damage != "number" || isNaN(damage)) {console.log ("введите цифровое значение  damage");return}  */
			 
		     var tempor = this.health;  
			 this.health = this.health - damage;
	 	 
	 //сообщение в консоль расширенного содержания
     console.log(
	`========
    ${this.name} 	
	нанесен ущерб ${damage},
	до удара здоровье health  = ${tempor} 
	новое здоровье health  = ${this.health} 
========`);
  }  
    
	hit(enemy, point) {
		let damage_ = point * this.power;  
		console.log(`${this.name} ударил ${enemy.name} на damage ${damage_}`);
		enemy.setDamage(damage_);
		}
   }
 

//добавляю промис в конструктор "старым"  синтаксисом JS 
	Fighter.prototype.knockout  = new Promise(function (resolve, reject) {
	  setTimeout(function()  {
		console.log("time is over"); resolve("выполнен Promise из Fighter.prototype.knockout");
	  }, 500);

	});