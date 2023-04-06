function readCSV() {
  var file = "ha_spots.csv"; // Replace with the name of your CSV file
  var reader = new FileReader();
  reader.onload = function(e) {
      var contents = e.target.result;
      var lines = contents.split("\n");
      var output = "";
      for (var i = 0; i < lines.length; i++) {
          output += "<li>" + lines[i] + "</li>";
      }
      document.getElementById("list").innerHTML = output;
  };
  reader.readAsText(file);
}
