google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
  console.log('Packages have been loaded');
  // var variableName; //just regular type
  // const variableName; //constant - will never change value
  // let variableName;  //similar to var - can be reassigned but should only be changed within the block (for loop, function etc)
  const data = google.visualization.arrayToDataTable([
    ["Year", "Births", "Deaths", "Marriages"],
    ["2013", 58719, 29568, 19237],
    ["2014", 57243, 31062, 20125],
    ["2015", 61038, 31608, 19947],
    ["2016", 59430, 31176, 20235]
  ]);

  const options = {
    title: "New Zealand Births, Deaths, and Marriages",
    hAxis: {
      title: "Number"
    },
    vAxis: {
      title: "Year"
    },
  }

  const chart = new google.visualization.AreaChart(document.getElementById("chart-container"));
  chart.draw(data, options);
}