function createTable() {
  var table = document.getElementById("myTable");
  var rowCount = parseInt(prompt("Input number of rows"));
  var colCount = parseInt(prompt("Input number of columns"));
  for (var i = 0; i < rowCount; i++) {
    var row = table.insertRow(i);

    for (var j = 0; j < colCount; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
