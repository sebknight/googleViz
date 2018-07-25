const studentData = [
  { 
    food: "Pie",
    count: 5
  },
  {
    food: "Cake",
    count: 6
  } 
]
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
  console.log('Packages have been loaded');
  const data = new google.visualization.DataTable();
  data.addColumn("string", "Food");
  data.addColumn("number", "Count");
  for (var i = 0; i < studentData.length; i++) {
    data.addRow([studentData[i].food, studentData[i].count]);    
  }

const options = {
  title: "Cake vs Pie"
}

const chart = new google.visualization.PieChart(document.getElementById("chart-container"));
chart.draw(data, options);

}