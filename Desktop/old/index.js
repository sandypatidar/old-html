let animanl = {
    eat: true,
    drink: true,
    walk() {
        document.write("animal is walk");
    }
};

let rabbit = {
    jump: true,
    cut: true,
    __proto__: animanl
};

rabbit.walk();
