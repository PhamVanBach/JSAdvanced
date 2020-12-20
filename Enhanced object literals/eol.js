const name = "BP";
const sayHi = {
    name,
    say(){
        console.log(`${this.name} hi everyone`);
    }
}

sayHi.say();