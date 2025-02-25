function showTable(itemId) {
  // Remove "active" class from all menu items
  var menuItems = document.querySelectorAll(".tableMenu .item");
  menuItems.forEach(function(item) {
	item.classList.remove("active");
  });

  // Add "active" class to the clicked menu item
  var clickedMenuItem = document.querySelector(".tableMenu .item[data-item-id='" + itemId + "']");
  if (clickedMenuItem) {
	clickedMenuItem.classList.add("active");
  }

  // Hide all tables
  var tables = document.getElementsByClassName("tableContainer");
  for (var i = 0; i < tables.length; i++) {
	tables[i].style.display = "none";
  }

  // Show the table corresponding to the clicked menu item
  var tableToShow = document.getElementById(itemId + "Table");
  if (tableToShow) {
	tableToShow.style.display = "block";
  }
}