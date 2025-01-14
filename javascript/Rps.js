
(function(){
    const Rock = document.getElementById("rock");
    const Paper = document.getElementById("Paper");
    const scissors = document.getElementById("scissors");
    let randomNumber;
    let computer;
    let choose;
    let computerCount = 0;
    let playerCount = 0;
    let computerScore = document.getElementById("computerScore");
    let playerScore = document.getElementById("playerScore");

      
            function computerChoice (){
                
            if(randomNumber === 0){
                computer = "Rock";
            }
            else if(randomNumber === 1 ){
                computer = "Paper";
            }
            else if(randomNumber === 2 ){
                computer = "scissors";
            }
        }
            Rock.addEventListener("click", function(){
                choose = "Rock";
                randomNumber  = Math.floor(Math.random() * 3);

                computerChoice();
                console.log(`Player: ${choose}`);
                console.log(`Computer :${computer}`);

                if(computer === "Rock"){
                    // console.log(`Computer : ${computerCount}`);
                    computerScore.innerText = `Computer : ${computerCount}`
                    playerScore.innerText = `You: ${playerCount}`;
                    // console.log(`You: ${playerCount}`)
                }
                else if(computer === "Paper")
                {
                    // console.log(`Computer : ${++computerCount}`);
                    // console.log(`You: ${playerCount}`)
                    
                    computerScore.innerText = `Computer : ${++computerCount}`
                    playerScore.innerText = `You: ${playerCount}`;
                }
                else if(computer === "scissors")
                {
                    // console.log(`Computer : ${computerCount}`);
                    // console.log(`You: ${++playerCount}`)

                    computerScore.innerText = `Computer : ${computerCount}`
                    playerScore.innerText = `You: ${++playerCount}`;
                }
            });

            Paper.addEventListener("click", function(){
            choose = "Paper";
            randomNumber  = Math.floor(Math.random() * 3);
            
            computerChoice();
            console.log(`Player: ${choose}`);
            console.log(`Computer :${computer}`);
                
            if(computer === "Rock"){
                // console.log(`Computer : ${computerCount}`);
                // console.log(`You: ${++playerCount}`)

                computerScore.innerText = `Computer : ${computerCount}`
                playerScore.innerText = `You: ${++playerCount}`;
            }
            else if(computer === "Paper")
            {
                // console.log(`Computer : ${computerCount}`);
                // console.log(`You: ${playerCount}`)

                    computerScore.innerText = `Computer : ${computerCount}`
                    playerScore.innerText = `You: ${playerCount}`;
            }
            else if(computer === "scissors")
                {
                    // console.log(`Computer : ${++computerCount}`);
                    // console.log(`You: ${playerCount}`)

                    computerScore.innerText = `Computer : ${++computerCount}`
                    playerScore.innerText = `You: ${playerCount}`;
                }
            })
            scissors.addEventListener("click", function(){
                choose = "scissors";
                randomNumber  = Math.floor(Math.random() * 3);

                computerChoice();
                console.log(`Player: ${choose}`);
                console.log(`Computer :${computer}`);

                if(computer === "Rock"){
                    // console.log(`Computer : ${++computerCount}`);
                    // console.log(`You: ${playerCount}`)

                    computerScore.innerText = `Computer : ${++computerCount}`
                    playerScore.innerText = `You: ${playerCount}`;
                }
                else if(computer === "Paper")
                {
                    // console.log(`Computer : ${computerCount}`);
                    // console.log(`You: ${++playerCount}`)

                    computerScore.innerText = `Computer : ${computerCount}`
                    playerScore.innerText = `You: ${++playerCount}`;
                }
                else if(computer === "scissors")
                    {
                        // console.log(`Computer : ${computerCount}`);
                        // console.log(`You: ${playerCount}`)

                        computerScore.innerText = `Computer : ${computerCount}`
                        playerScore.innerText = `You: ${playerCount}`;
                    }
            })


}())


// console.log(computer);