const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 1 }
};

let obj2 = {
    ...obj1,
    z: 800
};
obj2.d.e = 12;

console.log({obj1, obj2});

