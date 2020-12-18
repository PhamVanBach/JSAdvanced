var button = document.getElementById("btn_sayhi");

var persons = {
    name: 'Bach Pham',
    sayHi: function(){
        alert('Hi my name is ' + this.name);
    }
}

var huyen = {
    name: 'Thuy Huyen'
}


// button.addEventListener('click',
// persons.sayHi.bind(persons));

button.addEventListener('click',
persons.sayHi.bind(huyen));