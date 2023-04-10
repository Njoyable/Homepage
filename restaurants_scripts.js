
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


  function addValue() {
	var newValue = document.getElementById("new-value").value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
		  readCSV("ha_spots.csv");
		} else {
		  console.error(xhr.statusText);
		}
	  }
	};
	xhr.open("POST", "add_value.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("value=" + encodeURIComponent(newValue));
  }
  