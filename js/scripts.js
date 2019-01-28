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

$(function(){
  $("#places").submit(function(event){
    event.preventDefault();
    var newPlacesDb = new PlacesDatabase();
    var newPlace = new Place($("input#name").val());
    console.log(newPlace);
    newPlacesDb.addPlace(newPlace);
    console.log(PlacesDatabase);

    $("#result").text(newPlace.name);
  });
});
