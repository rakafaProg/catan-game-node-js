
const COOKIE_NAME = 'game';
const COOKIE_USER = 'user';
$(document).ready(function() {

  let gameCookie = Cookies.getJSON(COOKIE_NAME);
  console.log(gameCookie);

  if (gameCookie && gameCookie[COOKIE_USER]) {
    // User Already Registered Before
    $('.signoutbtn').click(openSignOutPage).removeClass('invisible');
    $('.strtgmbtn').click(openStartGamePage).removeClass('invisible');
    $('.joingamebtn').click(openJoinGamePage).removeClass('invisible');
    $('.registerbtn').addClass('invisible');
    $('.loginbtn').addClass('invisible');
  } else {
    // User is not loged in
    setHeaderForAnonimus ();
  }

});

function setHeaderForAnonimus () {
  $('.registerbtn').click (openRegisterPage).removeClass('invisible');
  $('.loginbtn').click (openLogInPage).removeClass('invisible');
  $('.signoutbtn').addClass('invisible');
  $('.strtgmbtn').addClass('invisible');
  $('.joingamebtn').addClass('invisible');
}



function openRegisterPage () {
  $('main').html ('This is register page');
}

function openLogInPage () {
  console.log('tring to log in');
  $.get('login', function(data){
    $('main').html (data);
  });
}

function openSignOutPage () {
  setHeaderForAnonimus ();
  Cookies.remove(COOKIE_NAME);
  $.get('signout', function(data){
    $('main').html (data);
  });
}

function openStartGamePage () {
  $('main').html ('This is Start game page');
}

function openJoinGamePage () {
$('main').html ('This is join game page');
}
