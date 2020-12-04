google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Computers', 8],
  ['2 Lang', 2],
  ['Science', 4],
  ['3 Lang', 2],
  ['Maths', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Academic Talent', 'width':600, 'height':600};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}