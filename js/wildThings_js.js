
function openSearch() {
  var x = document.getElementById('searchBar');
  if (x.style.width === '0px') {
    x.style.width = "85%";
    x.style.borderBottom = "1px solid #fff";
  } else {
    x.style.width = "0px";				
    x.style.borderBottom = "1px solid rgba(255, 255, 255, 0.0)";
  }
}

function openNav() {
  document.getElementById("mNav").style.height = "50px";
}

function closeNav() {
  document.getElementById("mNav").style.height = "0px";
}

function openLang() {
  document.getElementById("lNav").style.height = "50px";
}

function closeLang() {
  document.getElementById("lNav").style.height = "0%";
}

function openResults() {
  document.getElementById("searchBar_results").style.height = "400px";
}

function closeResults() {
  document.getElementById("searchBar_results").style.height = "0px";
}

function open_aNav() {
  document.getElementById("aNav").style.height = "50px";
  document.getElementById("mNav").style.height = "50px";  
}

function close_aNav() {
  document.getElementById("aNav").style.height = "0px";
}

function open_exNav() {
  document.getElementById("exNav").style.height = "110px";
  document.getElementById("mNav").style.height = "50px";  
}

function close_exNav() {
  document.getElementById("exNav").style.height = "0px";
}




function open_i2_games() {
  var games = document.getElementById("homePg_i2_games");
  var quizes = document.getElementById("homePg_i2_quizes");
  var challenges = document.getElementById("homePg_i2_challenges");
  games.style.display = "block";  
  quizes.style.display = "none";     
  challenges.style.display = "none";
  document.getElementById("game_h").style.color = "#92FE9D";
  document.getElementById("quiz_h").style.color = "#fff";  
  document.getElementById("challenge_h").style.color = "#fff";  
}

function open_i2_quizes() {
  var games = document.getElementById("homePg_i2_games");
  var quizes = document.getElementById("homePg_i2_quizes");
  var challenges = document.getElementById("homePg_i2_challenges");
  games.style.display = "none";  
  quizes.style.display = "block";   
  challenges.style.display = "none";  
  document.getElementById("quiz_h").style.color = "#92FE9D";
  document.getElementById("game_h").style.color = "#fff";  
  document.getElementById("challenge_h").style.color = "#fff";  
}

function open_i2_challenges() {
  var games = document.getElementById("homePg_i2_games");
  var quizes = document.getElementById("homePg_i2_quizes");
  var challenges = document.getElementById("homePg_i2_challenges");
  games.style.display = "none";  
  quizes.style.display = "none";  
  challenges.style.display = "block";  
  document.getElementById("quiz_h").style.color = "#fff";
  document.getElementById("game_h").style.color = "#fff";
  document.getElementById("challenge_h").style.color = "#92FE9D";    
}


$(document).ready(function() {
   $.localScroll({duration:1000});
});



$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});





function openSearchM() {
  var x = document.getElementById('searchBarM');
  if (x.style.width === '0px') {
    x.style.width = "77%";
    x.style.borderBottom = "1px solid #fff";
    document.getElementById('languageM').style.display = "none";
    document.getElementById('menuM').style.display = "none"; 
    document.getElementById('searchM').style.marginLeft = "20px";
    document.getElementById("searchBarM_results").style.height = "600px";
  } else {
    x.style.width = "0px";				
    x.style.borderBottom = "1px solid rgba(255, 255, 255, 0.0)";
    document.getElementById('languageM').style.display = "inline-block";
    document.getElementById('menuM').style.display = "inline-block";
    document.getElementById('searchM').style.marginLeft = "0px";   
    document.getElementById('searchBarM_results').style.height = "0px";    
  }
}

function openSearchM2() {
  document.getElementById("sBarM").style.height = "68px";
}

function openNavM() {
  document.getElementById("mNavM").style.height = "66px";
}

function closeNavM() {
  document.getElementById("mNavM").style.height = "0px";
  document.getElementById("aNavM").style.height = "0px";
  document.getElementById("exNavM").style.height = "0px";  
}


function openLangM() {
  document.getElementById("lNavM").style.height = "66px";
}

function closeLangM() {
  document.getElementById("lNavM").style.height = "0%";
}

function openResultsM() {
  document.getElementById("searchBarM_results").style.height = "80%";
}

function closeResultsM() {
  var x = document.getElementById('searchBarM');
  document.getElementById("searchBarM_results").style.height = "0px";
    x.style.width = "0px";				
    x.style.borderBottom = "1px solid rgba(255, 255, 255, 0.0)";
    document.getElementById('languageM').style.display = "inline-block";
    document.getElementById('menuM').style.display = "inline-block";
    document.getElementById('searchM').style.marginLeft = "0px";   
    document.getElementById('searchBarM_results').style.height = "0px";    
}



function open_aNavM() {
  document.getElementById("aNavM").style.height = "200px";
  document.getElementById("mNavM").style.height = "66px"; 
  document.getElementById("exNavM").style.height = "0px";
}

function close_aNavM() {
  document.getElementById("aNavM").style.height = "0px";
}



function open_exNavM() {
  document.getElementById("exNavM").style.height = "500px";
  document.getElementById("mNavM").style.height = "66px";  
  document.getElementById("aNavM").style.height = "0px";  
}

function close_exNavM() {
  document.getElementById("exNavM").style.height = "0px";
}


function open_i2_gamesM() {
  var games = document.getElementById("homePg_i2_gamesM");
  var quizes = document.getElementById("homePg_i2_quizesM");
  var challenges = document.getElementById("homePg_i2_challengesM");
  games.style.display = "block";  
  quizes.style.display = "none";     
  challenges.style.display = "none";
  document.getElementById("game_h").style.color = "#92FE9D";
  document.getElementById("quiz_h").style.color = "#fff";  
  document.getElementById("challenge_h").style.color = "#fff";  
}

function open_i2_quizesM() {
  var games = document.getElementById("homePg_i2_gamesM");
  var quizes = document.getElementById("homePg_i2_quizesM");
  var challenges = document.getElementById("homePg_i2_challengesM");
  games.style.display = "none";  
  quizes.style.display = "block";   
  challenges.style.display = "none";  
  document.getElementById("quiz_h").style.color = "#92FE9D";
  document.getElementById("game_h").style.color = "#ff00";  
  document.getElementById("challenge_h").style.color = "#fff";  
}

function open_i2_challengesM() {
  var games = document.getElementById("homePg_i2_gamesM");
  var quizes = document.getElementById("homePg_i2_quizesM");
  var challenges = document.getElementById("homePg_i2_challengesM");
  games.style.display = "none";  
  quizes.style.display = "none";  
  challenges.style.display = "block";  
  document.getElementById("quiz_h").style.color = "#fff";
  document.getElementById("game_h").style.color = "#fff";
  document.getElementById("challenge_h").style.color = "#92FE9D";    
}
