// FOR LOOP :

let motor=[{"type":"car","name":"hyundai"},{"type":"bike","name":"royalenfield"}];
for (let i=0; i<motor.length; i++){
    console.log(motor[i]);
};

// FOR IN :

let courses = {"name":"java","domain":"software"};
for (let i in courses){
    console.log(i,courses[i]);
};

// FOR OF :

let fruits = [{"name":"mango","color":"yellow"},{"name":"appple","color":"red"}];
for (let f of fruits){
    console.log(f);
};

// FOR EACH :

let animals = [{"name":"lion"},{"name":"tiger"}];
animals.forEach(a=> console.log(a));