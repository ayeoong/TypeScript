function square(num) {
    return num * num;
}
// function greet(person: string){     //파라미터 이름: 타입
//     // person * person;
//     return 'Hi there, ${person}!';
// }
var doSomething = function (person, age, isFunny) { };
square(3);
greet("Tonya Harding");
//const doSomething에서 정의한 대로
// string, number, Boolean 순서를 지켜서 정의
doSomething("ChickenFace", 76, true);
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    // person * person;
    return 'Hi there, ${stranger}!';
}
greet();
greet("Tony Stark");
