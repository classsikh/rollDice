
document.getElementById('button').onclick = function()
{
    var randomNumber1;
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
    var randomNumber2;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText="Player 1 Wins";
    }
    else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerText="Match Draw";
    }
    else{
        document.querySelector("h1").innerText="Player 2 Wins";
    }
}
