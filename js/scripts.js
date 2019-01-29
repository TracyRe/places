function PlacesDatabase(){
  this.places = [],
  this.currentId = 0
}

PlacesDatabase.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesDatabase.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}


function Place(name, landmarks, people, time, notes){
  this.name = name,
  this.landmarks = landmarks,
  this.people = people,
  this.time = time,
  this.notes = notes
}

$(document).ready(function() {
  var newPlacesDb = new PlacesDatabase();
  $("#places").submit(function(event){
    event.preventDefault();
    debugger;
    var newPlace = new Place($("input#name").val(), $("input#landmarks").val(), $("input#people").val(), $("input#time").val(), $("input#notes").val());
    newPlacesDb.addPlace(newPlace);
    newPlacesDb.places.forEach(function(place) {
    $("#result").append("<div class=\"place-card\" id=" + newPlace.name + "-card\"><div class=\"place-head\">" + newPlace.name + "</div>  <div class=\"place-details\" <ul><li>" + place.landmarks + "</li> <li>" + place.people + "</li> <li>" + place.time + "</li><li>" + place.notes + "</li> </ul> </div></div>");
      })
    });
  });
