// Compiled Language: Java, Golang, C, c++, C#, rust   => Compiling & Running
/* java da yozilgan kod birinchi kompyuter shaklida otkaziladi. 
masalan javada 11 qatorgaca kodimiz bolsa compiling bu kodimizni  kompyuter oqishi uchun ogirib beradi   
Hulosa qilib aytganda compiling languagelar kompuyer oqishi kompyuter tiliga ozgartiriladi  
*/

//Interpreted Language: NodeJS, Python, PHP, Ruby     => Running

/* interpreted languagelarda compled jarayoni bolmaydi
yani bular automatic tarzda kompyuter tiliga ozgartirib beradi  */

/* masalan 
compiled languaglarda 
biron satrlarda hatolik bolsa  bu jarayonda bizning kodimizni oqimaydi va error berib turadi */
/* interpreted larda
compiliedlarda farqi agar bizada 6qatorda hatolik bolsa 
kodimizni 6 satrigaca kelmaguncha kodimizdagi hatolikni topish imkonsiz boladi*/

// node JSning eng ogriqli bolgan muamlarini type script hal qilib beradii
/* typescript node js ga type tushunchasini olib kirgan
type script complied languagelarda bolgan static typle dinamik tarzda nodeJSga olib kirib bergan 
type scipt ozida 100% java scriptni qamrab olgan
typeTs = javaScript + type TS ozida bolgan element va companentlar*/
// dynaik typelar

// 2xil type bor primitive type & object type
/* yozish usuli 
let box: string ; 
box = "hello";
let bx: number = 100; */

//number

const counter: number = 200;

//number string

let stage: string | number = "hell";
stage = 200
// boolen 
let pending: boolean;
pending = true;

//  interfyslar object singari instancega ega bolmaydi ular faqat type uchun hizmat qilaydigon soya.


// objectlar 

/* let person: Person = {
    name: "Teo",
    age: 29,
    nation: "Australian"
} */

// type scriptda object  korinishiga ega bolgan interfeys
/* interface Person {
    name: string,
    age: number,
    nation: string
}
let person: Person = {
    name: "Teo",
    age: 29,
    nation: "Australian"
} */

// arrays
// ham string ham number yozishni hohlasak:
/* let skills:(number | string) [];
skills= ["Problem Solved", "SoftwareDesign", 200]; */

// classes
class Person {
    age: number;
    firstName: string;
    lastName: string;

  constructor(
    age: number,
    firstName: string,
    lastName: string,
  )  {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
const person1 = new Person (30, "Teo",  "Sulaymonov");

// design pattern 

// dasturiy taminotni qurishda uchraydigon oddiy 
// muammolarni hal qilishda ishlatiladigon yechimlar
/* design Patterns => Creational Structural Behavioral */

//Cretional: obyektlarni yaratishga aloqador patternlar

// structural: Klass va obyektlardan tashkillashtirilgan tuzilmalarga aloqador patternlar

// Behavioral: Obyektlarning orasidagi o'zaro muloqotlarning umumiy uslublariga aloqador bo'lgan patternlar




