console.log("Hello World");

// H task
/* 
Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh" */
 

function hey({ harf }: { harf: string; }): any {
    if (harf === "") 
    return "";
    else 
    return hey({ harf: harf.substr(1) }) + harf.charAt(0);
  }
  let harf = "hello";
  const natija = hey({ harf });
  console.log(natija); 



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
  