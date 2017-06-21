
var $sectionOne = document.getElementById('s1');
var $buttonArsenal = document.getElementById('button-arsenal');

function getBadges($arsenalButtonHTML) {
  var treehouseAPI = 'https://teamtreehouse.com/steingrimurstefansson.json?';
  var treehouseOptions = {

  }

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
