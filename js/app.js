
var $sectionOne = document.getElementById('s1');
var $sectionTwo = document.getElementById('s2');
var $sectionFour = document.getElementById('s4-content');
var $buttonArsenal = document.getElementById('button-arsenal');
var $buttonSense = document.getElementById('button-sense');
var $buttonCloseSense = document.getElementById('close-sense');
var $buttonTouch = document.getElementById('button-touch');
var $nameTouch = document.getElementById('name');
var $emailTouch = document.getElementById('email');

// BEGIN: arsenal section interactivity when button 'know more' is clicked.
function getBadges($arsenalButtonHTML) {
  var treehouseAPI = 'https://teamtreehouse.com/steingrimurstefansson.json?';
  var treehouseOptions = {};

  var $data;
  function displayBadges(data) {
    var $badgesCount = data.badges.length;
    var $badgesObject = {};
    var $listBadges = '<ul>';
    for (i = 0; i < $badgesCount; i++) {

      var $badgeNumber = Math.floor(Math.random() * $badgesCount);
      $badgeUrl = data.badges[$badgeNumber].icon_url;
      $badgeName = data.badges[$badgeNumber].name;

      $badgesObject.image = $badgeUrl;
      $badgesObject.name = $badgeName;
      $listBadges += '<li><img src="' + $badgesObject.image + '" alt="' + $badgesObject.name + '">';
      $listBadges += '<p>' + $badgesObject.name.toLowerCase() + '</p>';
      $listBadges += '</li>';
    }

    $listBadges += '</ul>';
    $listBadges += '</div>';
    $('.badge-listing').html($listBadges);
    $arsenalButtonHTML.html('<a href="">know less</a>');
  }

  $.getJSON(treehouseAPI, treehouseOptions, displayBadges);
}
var $arsenalButtonStatus = 0;
$buttonArsenal.addEventListener('click', function(e) {
  e.preventDefault();
  var $arsenalButtonHTML = $(this);

  if($arsenalButtonStatus <= 0) {
    $arsenalButtonStatus = 1;
    getBadges($arsenalButtonHTML);
  } else {
    $arsenalButtonStatus = 0;
    $('.badge-listing').html('');
    $arsenalButtonHTML.html('<a href="">know more</a>');
    window.scrollTo(0, $sectionOne.clientHeight);
  }
});

// END: arsenal section interactivity when button 'know more' is clicked.

// BEGIN: sense section interactivity when button 'know more' is clicked.
$buttonSense.addEventListener('click', function(e) {
	e.preventDefault();
	$('.s3-content').fadeOut(400);
	$('.projects-overview').delay(500).fadeIn(600);
	window.scrollTo(0, $sectionOne.clientHeight + $sectionTwo.clientHeight);
});

$buttonCloseSense.addEventListener('click', function(e) {
	e.preventDefault();
	$('.projects-overview').fadeOut(400);
	$('.s3-content').delay(500).fadeIn(600);
	window.scrollTo(0, $sectionOne.clientHeight + $sectionTwo.clientHeight);
});
// END: sense section interactivity when button 'know more' is clicked.

// BEGIN: touch section interactivity when button 'keep in touch' is clicked.
function submitForm() {
  var $contactName = $nameTouch.value.toLowerCase();
  var $emailAddress = $emailTouch.value.toLowerCase();
  var $warningName = $('.warning-message.name');
  var $warningEmail = $('.warning-message.email');
  if($contactName !== '' && $emailAddress !== '') {
    $('#s4-content').fadeOut(700, function() {
      var $senseGreeting = '<div class="sense-message">';
      $senseGreeting += '<div>';
      $senseGreeting += '<h3>hi ' + $contactName + '</h3>';
      $senseGreeting += '<p>thank you so much for contacting me!<br>i will do my very best to reply to your inquiry as sharply as i can, no later than next business day.</p>';
      $senseGreeting += '<p>have a great day!</p>';
      $senseGreeting += '<p><i>sincerely,<br>steingrimur</i></p>';
      $senseGreeting += '<div id="close-touch" class="buttons close-touch center-text">';
      $senseGreeting += '<a href="#">close</a>';
      $senseGreeting += '</div>';
      $senseGreeting += '</div>';
      $senseGreeting += '</div>';
      $('#s4-content').html($senseGreeting).delay(300).fadeIn(500);
      $closeTouchButton = document.getElementById('close-touch');
      $closeTouchButton.addEventListener('click', function(e) {
        e.preventDefault();
        $('#s4-content').delay(200).fadeOut(300, function() {
          $('#s4-content').html($sectionFourContent).fadeIn();
          $buttonTouch = document.getElementById('button-touch');
        });
      });
    });

  } else {
    if($contactName === '') {
      $warningName.fadeIn();
    } else {
      $warningName.fadeOut();
    }
    if($emailAddress === '') {
      $warningEmail.fadeIn();
    } else {
      $warningEmail.fadeOut();
    }
  }
}

var $sectionFourContent = $sectionFour.innerHTML;
$buttonTouch.addEventListener('click', function() {
  submitForm();
});




// END: touch section interactivity when button 'keep in touch' is clicked.
