function waitAndRun(ms, func){
	return setTimeout(func, ms);
}

function Run(){
	console.log("Run");
}

waitAndRun(2000, Run);