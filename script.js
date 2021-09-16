function addrow() {
  var table = document.getElementById("table");
  var row = table.insertRow(2);
  var td1 = row.insertCell(0);
  var td2 = row.insertCell(1);
  td1.innerHTML = "New Row 1st cell";
  td2.innerHTML = "New Row 2nd cell";
}
