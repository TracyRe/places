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
  var newPlacesDb = new PlacesDatabase();
  $("#places").submit(function(event){
    event.preventDefault();
    var newPlace = new Place($("input#name").val(), $("input#landmarks").val(), $("input#people").val(), $("input#time").val(), $("input#notes").val());
    newPlacesDb.addPlace(newPlace);

    // $("#result").append("<button onclick=\"alert('hello');\">" + newPlace.name + "</button>");
    $("#result").append("<button value=" + newPlace.id + ">" + newPlace.name + "</button>");
    $("button").click(function(){
      var buttonValue = this.value;
      newPlacesDb.places.forEach(function(place){
        if (buttonValue == place.id){
         // console.log(place); replace with printed info!!!!!
         $("#result").append(
         "<li>" + place.landmarks + "</li>" +
         "<li>" + place.people + "</li>" +
         "<li>" + place.time + "</li>" +
         "<li>" + place.notes + "</li>"
          );
        }
      });
      // console.log(this.value);
      // console.log(newPlace.value); UNDEFINED
      // console.log(newPlace.id.value);  UNDEFINED
    });
  });

});
