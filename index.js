document.querySelector("button").addEventListener("click",()=>{
    let randomNumber1=Math.trunc(Math.random()*5+1);
    let randomNumber2=Math.trunc(Math.random()*5+1);
    document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png")
    document.querySelector(".img2").src="./images/dice"+randomNumber2+".png"

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player 1 Wins! 🚩"
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent="Player 2 Wins! 🚩"
    }else{
        document.querySelector("h1").textContent="Draw!"}
    });