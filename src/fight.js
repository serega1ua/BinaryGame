// create async function fight
async function fight (fighter, improvedFighter, ...points) {
				 
		  console.log(
`=========
Поединок:
${fighter.name} с здоровьем ${fighter.health}  
против 
${improvedFighter.name} с здоровьем ${improvedFighter.health}.
Итак, хроника боя такова:  
==========`);
		 
		 
		 
		 for (let i = 0; i < points.length; i++) {
							 if (fighter.health < 0) {
							 /* зачем ставим setTimeout: "You should wait until promise is resolved and print to console the result of the fight". */
										   setTimeout(function(){
											 console.log(`${fighter.name} проиграл! Он был смелым парнем.`); 
										   },1000)
											return fighter.knockout;
																}
			fighter.hit(improvedFighter, points[i]);
		 
			
							 if (improvedFighter.health < 0) {
								   setTimeout(function(){
											console.log(`${improvedFighter.name} проиграл! Но сражался достойно!`);
										   },1000)
								 return improvedFighter.knockout;
							  
							}
			improvedFighter.doubleHit(fighter, points[i]);    
												}
		  
		  return `========
			  не хватило патронов для поединка, сделай в fight аргументов побольше!
			  =========`;
			  /* и это тоже промис будет возвращен, он автоматически оберенётся в промис */
		  		};
 export {
    fight
};