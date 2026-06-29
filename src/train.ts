//TASK-Y
function findIntersection(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));

//TASK-X
/*function countOccurrences(obj: any, key: string): number {
    return Object.keys(obj).reduce((sum, k) => {
        const val = obj[k];
        return sum + (k === key ? 1 : 0) + (val && typeof val === "object" ? countOccurrences(val, key) : 0);
    }, 0);
}

const data = {
    model: "Bugatti",
    steer: {
        model: "HANKOOK",
        size: 30,
    },
};

console.log(countOccurrences(data, "model"));
*/

//TASK-W

/*function chunkArray(arr: number[], size: number): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
*/
//TASK-V
/*function countChars(str: string) {
    let result: any = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (result[char] === undefined) {
            result[char] = 1;
        } else {
            result[char] = result[char] + 1;
        }
    }

    return result;
}

console.log(countChars("hello"));
*/

//TASK-U
/*function sumOdds(num: number): number {
    let count = 0;

    for (let i = 1; i < num; i += 2) {
        count++;
    }

    return count;
}

console.log(sumOdds(9));
console.log(sumOdds(11));
*/
//TASK-T
/*function tartibla(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(tartibla([0, 3, 4, 31], [4, 6, 30]));
*/
//TASK-S
/*function topib_ber(nums: number[]): number {
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    return -1;
}
console.log(topib_ber([0, 2, 3]));
*/
/**VALIDATION:
 1.Frontend validation
 2. Backend validation
 3. Database validation
 4. (Pipe validation)
 */

//TASK-R
/*function hisobla(str: string): number {
    const [a, b] = str.split("+");

    return Number(a) + Number(b);
}

console.log(hisobla("2+6"));
*/

/**COOKIE'S CHARACTER:
 1. Request join
 2. Self-destroy
 */

//TASK-Q
/*function hasProperty(obj: object, key: string): boolean {
    return key in obj;
}

console.log(hasProperty({ name: "BMW", model: "M5" }, "model"));
console.log(hasProperty({ name: "BMW", model: "M5" }, "year"));
*/
/**
 Traditional Frontend Development =>BSSR [Backend Server-Side Rendering] (Adminka)=> EJS framework
 Modern Frontend Development =>SPA[Single Page Application] (Users app) => REACT
 */



//TASK-P
/*function objectToArray(obj: any) {
    let result = [];

    for (let key in obj) {
        result.push([key, obj[key]]);
    }

    return result;
}

console.log(objectToArray({ a: 10, b: 20 }));

*/
//TASK-O
/*function calculateSumOfNumbers(arr: any[]): number {
    return arr.reduce((sum, item) => {
        if (typeof item === "number") {
            return sum + item;
        }
        return sum;
    }, 0);
}

console.log(
    calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])
); // 45
*/


/* Project Standards:
-Logging standards
-Naming standards:
    function,method,variables => CAMEL goHome
    class => PASCAL                    MemberService
    folder => KEBAB
    CSS=> SNAKE                        button_style
- Error handling
*/
/**TYPES OF API:
 Traditional API
 Rest API
 GraphQL API
 ...

 METHODS OF API:
 post
 get
 */

//TASK-N
/*function palindromCheck(word: string): boolean {
    return word === word.split("").reverse().join("");
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
*/

//TASK-M
/*function getSquareNumbers(arr: number[]) {
    return arr.map((num) => {
        return {
            number: num,
            square: num * num,
        };
    });
}

console.log(getSquareNumbers([1, 2, 3]));
*/

//TASK-L
/*
function reverseSentence(str: string): string {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseSentence("we like coding"));
*/