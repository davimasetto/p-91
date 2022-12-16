function addUser() {
   play1Name = document.getElementById("player1_name_input").value;
   play2Name = document.getElementById("player2_name_input").value;
   
   localStorage.setItem("player1_name", player1_name);
   localStorage.setItem("player2_name", player2_name);

   window.location = "game_page.html";
}