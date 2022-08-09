// const solve100Prisoners = context => {
  
// };

// const _ = require('lodash');
 
// const numPlays = 100000;
 
// const setupSecrets = () => {
// 	// setup the drawers with random cards
// 	let secrets = [];
 
// 	for (let i = 0; i < 100; i++) {
// 		secrets.push(i);
// 	}
 
// 	return _.shuffle(secrets);
// }
 
// // const playOptimal = () => {
 
// // 	let secrets = setupSecrets();
 
 
// // 	// Iterate once per prisoner
// // 	loop1:
// // 	for (let p = 0; p < 100; p++) {
 
// // 		// whether the prisoner succeedss
// // 		let success = false;
 
// // 		// the drawer number the prisoner chose
// // 		let choice = p;
 
 
// // 		// The prisoner can choose up to 50 cards
// // 		loop2:
// // 		for (let i = 0; i < 50; i++) {
 
// // 			// if the card in the drawer that the prisoner chose is his card
// // 			if (secrets[choice] === p){
// // 				success = true;
// // 				break loop2;
// // 			}
 
// // 			// the next drawer the prisoner chooses will be the number of the card he has.
// // 			choice = secrets[choice];
 
// // 		}	// each prisoner gets 50 chances
 
 
// // 		if (!success) return false;
 
// // 	} // iterate for each prisoner 
 
// // 	return true;
// // }
 
// const playRandom = () => {
 
// 	let secrets = setupSecrets();
 
// 	// iterate for each prisoner 
// 	for (let p = 0; p < 100; p++) {
 
// 		let choices = setupSecrets();
 
// 		let success = false;
 
// 		for (let i = 0; i < 50; i++) {
 
// 			if (choices[i] === p) {
// 				success = true;
// 				break;
// 			}
// 		}
 
// 		if (!success) return false;
// 	}
 
// 	return true;
// }
 
// // const execOptimal = () => {
 
// // 	let success = 0;
 
// // 	for (let i = 0; i < numPlays; i++) {
 
// // 		if (playOptimal()) success++;
 
// // 	}
 
// // 	return 100.0 * success / 100000;
// // }
 
// const execRandom = () => {
 
// 	let success = 0;
 
// 	for (let i = 0; i < numPlays; i++) {
 
// 		if (playRandom()) success++;
 
// 	}
 
// 	return 100.0 * success / 100000;
// }

// console.log(execRandom());

// const solve100Prisoners = context => {
// 	// based on the explanation from the video
// 	while (!context.isProcessComplete()) {
// 	  const prisoner = context.getCurrentPrisoner();
// 	  let slip = prisoner
// 	  // prisoner tries at 50 drawers
// 	  for (let i = 0; i < 50; i++) {
// 		const drawer = context.openDrawer(slip);
// 		if (!drawer) {
// 		  return;
// 		}
// 		if (drawer.success) {
// 		  // prisoner found the needed drawer no need to search further
// 		  break;
// 		}
// 		slip = drawer.slipLabel
// 	  } 
	
// 	}
// 	};
	
	const solve100Prisoners = context => {
	  const { getCurrentPrisoner, openDrawer, isProcessComplete } = context
	  
	  while (!isProcessComplete()) {
		let label = getCurrentPrisoner()
		
		for (let i = 0; i < 50; i++) {
		  const result = openDrawer(label)
		
		  if (!result) {
			break;
		  }
		
		  const { success, slipLabel } = result
		
		  if (success) {
			break;
		  } else {
			label = slipLabel
		  }
		}
	  }
	};