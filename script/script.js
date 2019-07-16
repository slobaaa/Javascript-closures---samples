/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

//taj prototype fakticki znaci da ce person naslediti jos te funkcionalnosti
Person.prototype.calculatedAge = 
function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person("John", 1990, "teacher");
var jane = new Person("jane", 1969, "teacher");
var mark = new Person("Mark", 1948, "retired");

john.calculatedAge();
jane.calculatedAge();
mark.calculatedAge();

console.log(john.lastName);

console.log(john.hasOwnProperty('job')); //rezuktat je true - proverava da li john ima prototype job
console.log(john.hasOwnProperty('lastName')); //rezuktat je false - jer je to nasledan property
console.log(john instanceof Person); //true - da li je deo persona



//Mogu objekte da kreiram i ovako
var personProto = {
    calculatedAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

//prvi nacin kreirananj
var john1 = Object.create(personProto);
john1.name = "John1";
john1.yearOfBirth = 1990;
john1.job = "teacher";
console.log(john1);

//drugi nacin kreiranja
var jane1 = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1969 },
    job: { value: "designer" }
});
console.log(jane1);


//Primitive i objekti kako se menjaju vrednosti
//primitive
var a = 23;
var b = a;
a = 46;
console.log(a); //izlaz je 46
console.log(b); //izlaz je 23 jer primitive ne menjaju vrednosti automatski

//objekti
var obj1 = {
    name: "John",
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //izlaz je 30
console.log(obj2.age); // izlaz je 30 - jer objekti tako da kazem automatski menjaju vrednost

//functions
var age = 27;
var obj = {
    name: "Sloba",
    city: "Novi Sad - naselje"
};

function change(a, b) {
    a = 30;
    b.city= "San Francisco";
}

change(age,obj);
console.log(age); //izlaz 27 - to je bag u javascript
console.log(obj.city); //izlaz san francisco - to je bag u javascript

*/
/*
//passing function as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = []; //tako se kreira empty array
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculatedAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18; //vraca true ili false
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculatedAge); //izlaz je [26, 51, 79, 11, 18]
var fullAges = arrayCalc(ages, isFullAge); ///izlaz je [true, true, true, false, true]
var rates = arrayCalc(ages, maxHeartRate); //izlaz je [189, 173, 154, -1, 195]

console.log(ages);
console.log(fullAges);
console.log(rates);
*/
/*
//functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John'); //izlaz je What subject do you teach, John?
designerQuestion('Jane'); //izlaz je Jane, can you please?

interviewQuestion('teacher')('Mark'); //What subject do you teach, Mark?
*/

//IIFE - Immediately Invoked Function Expressions
//ovo je los nacin
/*
function game() {
    var score = Math.random() *10; //ovo znaci between 0 and 9
    console.log(score >= 5);
}
game();
*/

//ovo je better way
/*
(function () {
    var score = Math.random() *10;
    console.log(score >= 5);
})();
//console.log(score); //score is not defined

(function (goodLuck) {
    var score = Math.random() *10;
    console.log(score >= 5 - goodLuck);
})(5);
*/
/*
//CLOSURES
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

var retirementUS = retirement(66); //znaci sa ovim ce uraditi samo liniju 185 i 186
retirementUS(1990); //40 years left until retirement. sa ovim ce uraditi liniju 187,188,189 ali vrednost ima od ranije

retirement(66)(1990); //40 years left until retirement. znaci sa 66 ce uraditi prvu funkciju a sa 1990 ce uraditi drugu
*/
//primer dva, kopirao sam od ranije funkciju i hocu od nje da napravim closures!!! - nije dobro
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do');
        }
    }
}
*/
//ovaj je dobar primer toga od gore - upotrebom closuresa
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do');
        }
    };
}
interviewQuestion('designer')('John');
*/

//bind, call, apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. have a nice' + timeOfDay + '.');
        }
    }
};

//ovde nema presentation metoda i sa call mogu da pozovem od johna
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
};


john.presentation('formal', 'morning'); //Good morning, Ladies and gentlemen! I'm John, I'm a teacher and I'm 26 years old.
john.presentation.call(emily, 'friendly', 'afternoon'); //Good afternoon, Ladies and gentlemen! I'm Emily, I'm a designer and I'm 35 years old.
//sa tim iznad sam fakticki pozvao metodu presentation  od johna ali sa podacima od emily
//apply je isto sto i call samo sto parametre stavaljam kao array
john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind - kod njega ne moram sve parameter odjednom da dam, nego one koje se ne menjaju i samo menjam kasnije koji hocu
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = []; 
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculatedAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit; //vraca true ili false
}
var ages = arrayCalc(years, calculatedAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages); //isti rezultati kao ranije [26, 51, 79, 11, 18]
console.log(fullJapan); //isti rezultati kao ranije [true, true, true, false, false]
