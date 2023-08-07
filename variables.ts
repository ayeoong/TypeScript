let movieTitle: string = "Amadeus";

movieTitle = "Arrival";
movieTitle = 9; //문자열이라 숫자 안 됨
movieTitle.toapperCase() //toupperCase 오타

let numCatLives: number=9;
numCatLives += 1;
// numCatLives = "zero"

let gameOver: boolean = false;

gameOver = true;
// gameOver = "true"; //boolean이라 string 안 됨

// Type Inference : Type을 알아서 추천해 주기 때문에
// 웬만하면 타입 애너테이션 하지 않아도 됨
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";

// the any type

let thing: any = "hello"
thing = 1
thing = false
thing()
thing.toupperCase()

const movies = ["Arrival", "The Thing", "Aliens",
 "Amadeus"]

 let foundMovie: string;

 for(let movie of movies){
    if(movie === "Amadeus"){
        foundMovie = "Amadeus";
    }
 }
 foundMovie()
 foundMovie = 5;