google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var dataZero = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memory', 0],
    ['CPU', 0],
    ['Network', 0]
    ]);
      

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memory', 80],
    ['CPU', 55],
    ['Network', 68]
  ]);

  var options = {
    width: 1000, height: 500,
    redFrom: 80, redTo: 100,
    yellowFrom: 50, yellowTo: 80,
    animation: {
        easing: 'inAndOut'
    },
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart-container-one'));

  chart.draw(dataZero, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 2000);
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 1000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 3000);

  chart.draw(data, options);


}


// google.charts.load('current', {'packages':['gauge']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
// var buttonOne = document.getElementById("button-one");
// var buttonTwo = document.getElementById("button-two");
// var buttonThree = document.getElementById("button-three");


// var dataZero = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//     ['Memory', 0],
//     ['CPU', 0],
//     ['Network', 0]
//     ]);

// var data = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//     ['Memory', 80],
//     ['CPU', 70],
//     ['Network', 60]
//     ]);

//   var options = {
//     width: 1000, height: 500,
//     redFrom: 80, redTo: 100,
//     yellowFrom: 50, yellowTo: 80,
//     animation: {
//         easing: 'inAndOut',
//         duration: 1000
//     },
//     minorTicks: 5,
//     max: 100,
//     min: 0
//   };
  
//   var chart = new google.visualization.Gauge(document.getElementById('chart-container'));
// //   chart.draw(dataZero, options);
//     // function setData(){
//     //     data[1][1].value = 80;
//     //     data[2][1].value = 70;
//     //     data[3][1].value = 60;
//     // }
//     //   chart.draw(data, options);
//     // //   setData();
//   chart.draw(dataZero, options);
//   setInterval(function() {
//     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 3000);
//   setInterval(function() {
//     data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 3000);
//   setInterval(function() {
//     data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
//     chart.draw(data, options);
//   }, 3000);

// //   function setToZero(){
// //     setInterval(function() {
// //         data.setValue(0, 0, 0);
// //         chart.draw(data, options);
// //       }, 3000);
    
//     // data.setValue(0, 0, 0);
//     // chart.draw(dataZero, options);
//     // }
// }


google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawGauge);

    var gaugeOptions = {min: 0, max: 280, yellowFrom: 200, yellowTo: 250,
      redFrom: 250, redTo: 280, minorTicks: 5};
    var gauge;

    function drawGauge() {
      gaugeData = new google.visualization.DataTable();
      gaugeData.addColumn('number', 'Engine');
      gaugeData.addColumn('number', 'Torpedo');
      gaugeData.addRows(2);
      gaugeData.setCell(0, 0, 120);
      gaugeData.setCell(0, 1, 80);

      gauge = new google.visualization.Gauge(document.getElementById('chart-container-two'));
      gauge.draw(gaugeData, gaugeOptions);
    }

    function changeTemp(dir) {
      gaugeData.setValue(0, 0, gaugeData.getValue(0, 0) + dir * 25);
      gaugeData.setValue(0, 1, gaugeData.getValue(0, 1) + dir * 20);
      gauge.draw(gaugeData, gaugeOptions);
    }