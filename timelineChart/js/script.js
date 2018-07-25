google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('chart-container');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Step' });
  dataTable.addColumn({ type: 'string', id: 'Title' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    ['Step', 'Planning', new Date(2018, 6, 20), new Date(2018, 7, 31) ],
    ['Step', 'Execution',      new Date(2018, 7, 31),  new Date(2018, 8, 21) ],
    ['Step', 'Evaluation',  new Date(2018, 8, 21),  new Date(2018, 8, 26) ]]);

    var options = {
      timeline: { groupByRowLabel: true }
    };

  chart.draw(dataTable);
}