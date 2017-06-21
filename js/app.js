
var $sectionOne = document.getElementById('s1');
var $sectionFour = document.getElementById('s4-content');
var $buttonArsenal = document.getElementById('button-arsenal');
var $buttonSense = document.getElementById('button-sense');

// BEGIN: arsenal section interactivity when button 'know more' is clicked.
function getBadges($arsenalButtonHTML) {
  var treehouseAPI = 'https://teamtreehouse.com/steingrimurstefansson.json?';
  var treehouseOptions = {}

  var $data;
  function displayBadges(data) {
    var $badgesCount = data.badges.length;
    var $badgesObject = new Object();
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

// BEGIN: touch section interactivity when button 'keep in touch' is clicked.



$buttonSense.addEventListener('click', function() {
  $('#s4-content').fadeOut(700, function() {
    var $senseGreeting = '<div class="sense-message">';
    $senseGreeting += '<h3>hi, steingrímur</h3>';
    $senseGreeting += '<p>thank you so much for contacting me!<br>i will do my very best to reply to your inquiry as sharply as i can, no later than next business day.</p>';
    $senseGreeting += '<p>have a great day!</p>';
    $senseGreeting += '<p><i>sincerely,<br>steingrimur</i></p>';
    $senseGreeting += '<div class="buttons close-touch center-text">';
    $senseGreeting += '<a href="#">close</a>';
    $senseGreeting += '</div>';
    $senseGreeting += '</div>';
    $('#s4-content').html($senseGreeting).delay(500).fadeIn(500);
  });
});

// END: touch section interactivity when button 'keep in touch' is clicked.
