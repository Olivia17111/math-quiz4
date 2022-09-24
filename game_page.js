

answer_turn = "player2";
question_turn = "player1";
player1_score = 0;
player2_score =0;
player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

function display(){
    document.getElementById("player_answer").innerHTML = "Answer turn -" + player1;
    document.getElementById("player_question").innerHTML = "question turn -" + player2;
    document.getElementById("player1_name").innerHTML = player1 + ":";
    document.getElementById("player2_name").innerHTML = player2 + ":";
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
}



function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)*parseInt(number2);
    console.log(actual_answer);
    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question + input_box + check_btn ;
    document.getElementById("output").innerHTML = row;
}

function check()
{
    if(input_check_box.value == actual_answer)
    {
     document.getElementById("output").innerHTML = "U got it correct !!";
     
}
      if(answer_turn == "player2")
      {
        player2_score = player2_score + 1; 
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player1;
 answer_turn = "player1";
 document.getElementById("player1_score").innerHTML = player1_score;
 document.getElementById("player2_score").innerHTML = player2_score;

    }else{
        player1_score = player1_score + 1; 
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player2;
        answer_turn = "player2";
        document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
    }

    if(question_turn == "player1")
      {
        
        document.getElementById("player_question").innerHTML = "question turn -" + player2;
 question_turn = "player2";
    }else{
         
        document.getElementById("player_question").innerHTML = "question turn -" + player1;
        question_turn = "player1";
    }
    }


