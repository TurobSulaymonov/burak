console.log("Hello World");
/* 
ZA-TASK:

Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]
*/

interface Person {
  age: number;
}

function sortByAge(arr: Person[]): Person[] {
  return arr.sort((a, b) => a.age - b.age);
}

const people: Person[] = [{ age: 23 }, { age: 21 }, { age: 13 }];
const result = sortByAge(people);
console.log(result); 

// Z task
/* Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
MASALAN: sumEvens([1,2,3]) return 2 */



/* function sumEvens(numbers: number[]): number {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {  
          sum += numbers[i]; 
      }
  }
  return sum; 
}


const result = sumEvens([1, 2, 3]);
console.log(result); */



// y Task
/* 
 Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
 MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
*/
/* function findIntersection(arr1: number[], arr2: number[]): number[] {
  const intersection: number[] = [];


  for (let i = 0; i < arr1.length; i++) {
   
      for (let j = 0; j < arr2.length; j++) {

          if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
              intersection.push(arr1[i]);
          }
      }
  }

  return intersection;
}


const array1 = [1, 2, 3];
const array2 = [3, 2, 0];
const result = findIntersection(array1, array2);
console.log(result); 
 */

//  X TAsk
/* 


Shunday function yozing, uni object va string parapetrlari bolsin. 
Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object
   bolsa ham sanasin)
 MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
*/
/* function countOccurrences(obj: any, key: string): number {
  let count = 0;

  if (typeof obj === 'object' && obj !== null) {
      for (const k in obj) {
          if (k === key) {
              count += 1;
          }
          count += countOccurrences(obj[k], key);
      }
  }

  return count;
}

const testObj = {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}};
const keyToSearch = 'model';
console.log(countOccurrences(testObj, keyToSearch));  */


// W Task
/* 
Shunday function yozing, uni array va number parametrlari bolsin.
 Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]
*/
/* function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  let index = 0;

  while (index < array.length) {
      result.push(array.slice(index, size + index));
      index += size;
  }

  return result;
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
 */

// V task
/* Shunday function yozing, uni string parametri bolsin va
 stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1} */

/* function countChars(s: string): { [key: string]: number } {
  const result: { [key: string]: number } = {}; 
  for (const char of s) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1; 
    }
  }
  return result;
}

console.log(countChars("kohna boqiy Buhoro")); */

// U task
/* 
Shunday function yozing, uni number parametri bolsin va
 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5; */

/* function sumOdds(number: number): number {
  let count = 0; 
  for (let i = 1; i < number; i++) { 
    if (i % 2 !== 0) { 
      count++; 
    }
  }
  return count;
}


console.log(sumOdds(9));  
console.log(sumOdds(11));  */


// T task
/* Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va 
ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31] */

/* function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let mergedArray: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

  
  mergedArray = mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));

  return mergedArray;
}

const arr1: number[] = [0, 3, 4, 31];
const arr2: number[] = [4, 6, 30];
console.log(mergeSortedArrays(arr1, arr2));  */


// p task
/* 
Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va
 osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 . typescriptda yechib ber */


/* function missingNumber(numbers: number[]): number {
  const n = numbers.length;
  let totalSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += numbers[i];
  }
  return totalSum - sum;
}


console.log(missingNumber([3, 0, 1])); */


// R  Task 
/* 
Shunday function yozing, u string parametrga ega bolsin. 
String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini 
number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;


*/



 
 

/* function calculate(expression: string): number {
  
  const tokens = expression.split(/[+\-/]/); 
  
  const operators = expression.split('').filter(char => '+-/'.includes(char));

  let result = parseInt(tokens[0]);
  for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const operand = parseInt(tokens[i + 1]);
      if (operator === '+') {
          result += operand;
      } else if (operator === '-') {
          result -= operand;
      } else if (operator === '*') {
          result *= operand;
      } else if (operator === '/') {
          result /= operand;
      }
  }

  return result;
}


console.log(calculate("1+3")); */







// Q Task
/* 
    Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object,
     ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true;
 hasProperty({name: "BMW", model: "M3"}, "year") return false

*/
/* function hasProperty(obj: any, prop: string): boolean {
  for (let key in obj) {
      if (key === prop) {
          return true;
      }
  }
  return false;
}


console.log(hasProperty({name: "BMW", model: "M3"}, "model")); 
console.log(hasProperty({name: "BMW", model: "M3"}, "year")); 
 */
 // P Task
 /* 
    Shunday function yozing, u object qabul qilsin va 
    arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */

/* function objectToArray(obj: Record<string, number>): [string, number][] {
  let resultArray: [string, number][] = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      resultArray.push([key, obj[key]]);
    }
  }

  return resultArray;
}

const result = objectToArray({ a: 10, b: 20 });
console.log(result);
 */








// O task
/* Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va 
array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45 */
/* function calculateSumOfNumbers(sonlar: any[]): number {
  const natija = sonlar.reduce((ele: number, current: any) => {
     if (typeof current === 'number' && !isNaN(current)) {
          return ele + current;
      } else {
          return ele;
      }
  },0);
return natija;

}


console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); */


 // N task
 /* 
  Shunday function yozing, u string qabul qilsin va 
  string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
 */
/* function palindrom (string:string) {
 const result = string.split("").reverse().join('');
 return result === string;


}
console.log(palindrom("kiyik"));
console.log(palindrom("mother")); */

// M task
/* 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va
 array ichidagi har bir raqam uchun raqamni ozi va 
hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, 
hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/
/* interface SquareObject {
  number: number;
  square: number;
}

function raqamTopish(numbers: number[]): SquareObject[] {
  const natija: SquareObject[] = [];
  
  for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const squareObj: SquareObject = {
          number: num,
          square: num * num
      };
      natija.push(squareObj);
  }
  
  return natija;
}


console.log(raqamTopish([1, 2, 3])); */

// L task
/* 
Shunday function yozing, u string qabul qilsin va 
string ichidagi hamma sozlarni chappasiga yozib va 
sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/

/* function sozniTeskariOqish(harf: string): string {
  const words: string[] = harf.split(' ');
  const harflar: string[] = [];

  for (const word of words) {
      const reversedWord = word.split('').reverse().join('');
      harflar.push(reversedWord);
  }

  return harflar.join(' ');
}


console.log(sozniTeskariOqish("I come from Uzbekistan!"));
 */



// k task
/* 
Shunday function yozing, u string qabul qilsin va 
string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/

 /* function unliTopish(str: string): number {

  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
          count++; 
      }
  }

  return count; 
}
console.log(unliTopish("O'zbekiston"));  */

/* 
Shunday function yozing, u string qabul qilsin va 
string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

/*  function sozTopish(inputString: string): string {
 const words: string[] = inputString.split(" ");
   let longestWord: string = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


const exampleString: string = "I come from Uzbekistan";
const result: string = sozTopish(exampleString);
console.log(result);  */



// I task
/* 
Shunday function tuzing, unga string argument pass bolsin.
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
*/
/* function harfTopish(harf: string): string {
  let natija: string = "";

  for (let i: number = 0; i < harf.length; i++) {
    if (/\d/.test(harf[i])) {
      natija += harf[i].toString();
    }
  }

  return natija;
}


let resultString: string = harfTopish("m14i1t");
console.log(resultString);
 */









// H task

/* 
shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
 faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/
/* function getPositive(arr: number[]): string {
    let natija: string = "";
  
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        natija += arr[i].toString();
      }
    }
  
    return natija;
  }
  
  
  let array: number[] = [1, -4, 2];
  let resultString: string = getPositive(array);
  console.log(resultString);  */
  





  /* Projects Standarts: 
  - Logging standarts
  - naming standards
       function, method, variable 
  
  
  */

// H task
/* 
Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh" */
 
/* 
function harfniTeskari({ harf }: { harf: string; }): any {
    if (harf === "") 
    return "";
    else 
    return harfniTeskari({ harf: harf.substr(1) }) + harf.charAt(0);
  }
  let harf = "hello";
  const natija = harfniTeskari({ harf });
  console.log(natija);  */



/* 
Shunday function tuzingki unga integerlardan iborat array pass bolsin va
 function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini. */


/* function kattaSonnitopish(arr: number[]) {
    if (arr.length === 0) {
        return -1; 
    }
  
    let maxIndex = 0;
    let maxValue = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
  
    return maxIndex;
  }
  
  
  const result = kattaSonnitopish([5, 29, 12, 22, 8]);
  console.log(result); */
  