function sum(){
	let result = 0;
  for(let i = 0; i < arguments.length; i++){
  		result += arguments[i];
  }
	console.log(result);	
}

sum(1,2,3,4,5,6,7,8);

function sum1(){
	const arr = Array.from(arguments);
  let hehe = arr.reduce((sum, num) => {
  	return sum + num
  }, 0);
  
  console.log(hehe);
}
sum1(1,2,3,4,5,6,7,8,9,10);