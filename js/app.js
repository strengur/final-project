var s2Content = document.getElementById('s2-content');
var buttonArsenal = document.getElementById('button-arsenal');

function getBatches () {
  var treehouseAPI = 'https://teamtreehouse.com/steingrimurstefansson.json?';
  var treehouseOptions = {

  }

  var $data;
  function displayBatches(data) {
    console.log(data);
    $data = data.badges[49].icon_url;

  }

  $.getJSON(treehouseAPI, treehouseOptions, displayBatches);
}

buttonArsenal.addEventListener('click', funditon() {
  getBathes();
})
