/**
 * Task 1.
 */

let a = 1;
let b = 2;
const c = 8;

function makeSomeCoolStaff() {
    var c=5;

    console.log (a); //1. a = 7;
    console.log (b); //2. b = undefined;
    console.log (c); //3. c = 5;

    if (true) {
        a = 3;
        var b = 4;

        console.log (a); //4. a = 3;
        console.log (b); //5. b = 4;
        console.log (c); //6. c = 5;
    }

    console.log (a); //7. a = 3;
    console.log (b); //8. b = 4;
    console.log (c); //9. c = 5;
}

a = 7;

makeSomeCoolStaff ();

console.log (a); //10. a = 3;
console.log (b); //11. b = 2;
console.log (c); //12. c = 8;


