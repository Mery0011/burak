//TASK-O
function calculateSumOfNumbers(arr: any[]): number {
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