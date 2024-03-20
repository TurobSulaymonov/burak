

console.log("Hello World");
 // O task
/* Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va 
array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45 */
function calculateSumOfNumbers(sonlar: any[]): number {
  const natija = sonlar.reduce((ele: number, current: any) => {
     if (typeof current === 'number' && !isNaN(current)) {
          return ele + current;
      } else {
          return ele;
      }
  }, 0);
return natija;

}


console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));


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
  