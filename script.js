


Hcount = 0;

function Home1Increment(){

    Hcount += 1;

    document.getElementById("home-score-num").textContent = Hcount;

}

function Home2Increment(){
    Hcount += 2;

    document.getElementById("home-score-num").textContent = Hcount;
}


function Home3Increment(){
    Hcount += 3;

    document.getElementById("home-score-num").textContent = Hcount;
}


//................................Guest........................................
Gcount = 0;

function Guest1Increment(){
    Gcount +=1;
    document.getElementById("Guest-score-num").textContent = Gcount;
}

function Guest2Increment(){
    Gcount +=2;
    document.getElementById("Guest-score-num").textContent = Gcount;
}

function Guest3Increment(){
    Gcount +=3;
    document.getElementById("Guest-score-num").textContent = Gcount;
}
