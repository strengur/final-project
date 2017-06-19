// Get all the batches from Treehouse
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

}

var treehouseAPI = 'https://teamtreehouse.com/steingrimurstefansson.json?';
var treehouseOptions = {
  
}

var $data;
function displayBatches(data) {
  console.log(data);
  $data = data;
}

$.getJSON(treehouseAPI, treehouseOptions, displayBatches);
