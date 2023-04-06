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

function readCSV(file) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				var contents = xhr.responseText;
				var lines = contents.split("\n");
				var output = "";
				for (var i = 0; i < lines.length; i++) {
					output += "<li>" + lines[i] + "</li>";
				}
				document.getElementById("list").innerHTML = output;
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.open("GET", file, true);
	xhr.send();
}
