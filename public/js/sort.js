function sortTable(tableId, columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tableId);
  switching = true;
  dir = "asc";
  while (switching) {
	switching = false;
	rows = table.getElementsByTagName("tr");
	for (i = 1; i < (rows.length - 1); i++) {
	  shouldSwitch = false;
	  x = rows[i].getElementsByTagName("td")[columnIndex];
	  y = rows[i + 1].getElementsByTagName("td")[columnIndex];
	  if (dir == "asc") {
		if (isNaN(x.innerHTML)) {
		  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
			shouldSwitch = true;
			break;
		  }
		} else {
		  if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
			shouldSwitch = true;
			break;
		  }
		}
	  } else if (dir == "desc") {
		if (isNaN(x.innerHTML)) {
		  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
			shouldSwitch = true;
			break;
		  }
		} else {
		  if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
			shouldSwitch = true;
			break;
		  }
		}
	  }
	}
	if (shouldSwitch) {
	  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	  switching = true;
	  switchcount++;
	} else {
	  if (switchcount == 0 && dir == "asc") {
		dir = "desc";
		switching = true;
	  }
	}
  }
}