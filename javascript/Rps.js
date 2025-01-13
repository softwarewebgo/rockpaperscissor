
(function(){
    const Rock = document.getElementById("rock");
    const Paper = document.getElementById("Paper");
    const scissors = document.getElementById("scissors");
    let randomNumber;
    let computer;
    let choose;

    // pick = prompt(`Do you want to play rock, paper, scissors? "Yes" or "No"`);

    // if(pick === "Yes"){
    //     game = true;
    // }
    // else{
    //     game = false;
    // }
            randomNumber  = Math.floor(Math.random() * 3);

            if(randomNumber === 0){
                computer = "Rock";
            }
            else if(randomNumber === 1 ){
                computer = "Paper";
            }
            else if(randomNumber === 2 ){
                computer = "scissors";
            }

            Rock.addEventListener("click", function(){
                choose = "Rock";

                console.log(`Player: ${choose}`);
                console.log(`Computer :${computer}`);

                if(computer === "Rock"){
                    console.log("Tie break");
                }
                else if(computer === "Paper")
                {
                    console.log("Computer wins");
                }
                else if(computer === "scissors")
                    {
                        console.log("You wins");
                    }
            })

            Paper.addEventListener("click", function(){
            choose = "Paper";

            console.log(`Player: ${choose}`);
            console.log(`Computer :${computer}`);

            if(computer === "Rock"){
                console.log("You wins");
            }
            else if(computer === "Paper")
            {
                console.log("Tie break");
            }
            else if(computer === "scissors")
                {
                    console.log("Computer wins");
                }
            })
            scissors.addEventListener("click", function(){
                choose = "scissors";

                console.log(`Player: ${choose}`);
                console.log(`Computer :${computer}`);

                if(computer === "Rock"){
                    console.log("Computer wins");
                }
                else if(computer === "Paper")
                {
                    console.log("You wins");
                }
                else if(computer === "scissors")
                    {
                        console.log("Tie break");
                    }
            })


}())


// console.log(computer);