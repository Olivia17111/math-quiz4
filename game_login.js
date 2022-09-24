function addUser() {
    window.location = "index2.html"
player1 = document.getElementById("player1_name_input").value;
player2 = document.getElementById("player2_name_input").value;
localStorage.setItem("Player1", player1);
localStorage.setItem("Player2", player2);

}
