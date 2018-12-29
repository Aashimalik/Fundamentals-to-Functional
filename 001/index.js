//Assignments with Dots
var person = {};
person.name = 'Mrs. White';

var person = {
  "name": "Mrs. White"
}

person.name //??

//Access with Dots
var who = person.name;
who // ?

person.name = 'Mr White'
who //? will remain same

who.story  //? will return undefined

            /*  Array*/
//example 1
 var person = [];
 person.name = 'Mrs. White';
  who = person.name;
  who //?  return Mrs White

typeof person // ? it return object

person[0] = " i was not in the billiard room"
//return [" i was not in the billiard room", name: "Mrs. White"]

//example 2
var person = [];
var plea = "whatShe";
person.name = 'Mr. White';
person[plea] = 'I would Never!';
 person //return [name: "Mr. White", whatShe: "I would Never!"]
person.plea //?

   /* Non Valid Character*/

var box = {};
box['material'] = 'cardboard';
box[0] = 'meow';
box['^&*'] = 'testing 123';

var test = box['^&*'];
box // {0: "meow", material: "cardboard", ^&*: "testing 123"}


