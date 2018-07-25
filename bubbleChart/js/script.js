google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
  console.log('Packages have been loaded');
  // var variableName; //just regular type
  // const variableName; //constant - will never change value
  // let variableName;  //similar to var - can be reassigned but should only be changed within the block (for loop, function etc)
  // const data = google.visualization.arrayToDataTable([
  //   ["Level of Education", "People in Household", "Age", "Ice cream flavour", "Height in cm"],
  //   ["6", 5, 21, "Cookies and Cream", 168],
  //   ["6", 5, 21, "Mango", 154],
  //   ["5", 2, 21, "Goody Goody Gum Drops", 176],
  //   ["5", 4, 18, "Chocolate", 182],
  //   ["6", 4, 25, "Vanilla", 171],
  //   ["7", 2, 25, "Goody Goody Gum Drops", 180],
  //   ["5", 3, 18, "Hazelnut", 135],
  //   ["5", 4, 18, "Sea Salt Caramel", 154],
  //   ["5", 4, 30, "Yum", 158],
  //   ["5", 5, 25, "Peanut Butter", 166],
  //   ["3", 5, 21, "Chocolate", 198],
  //   ["3", 5, 25, "Chocolate", 178]
  // ]);

  const data = google.visualization.arrayToDataTable([
    ["Level of Education", "People in Household", "Age", "Height in cm"],
    ["Level 6", 5, 21, 168],
    ["Level 6", 5, 21, 154],
    ["Level 5", 2, 21, 176],
    ["Level 5", 4, 18, 182],
    ["Level 6", 4, 25, 171],
    ["Level 7", 2, 25, 180],
    ["Level 5", 3, 18, 150],
    ["Level 5", 4, 18, 154],
    ["Level 5", 4, 30, 158],
    ["Level 5", 5, 25, 166],
    ["Level 3", 5, 21, 198],
    ["Level 3", 5, 25, 178]
  ]);


  const options = {
    title: "Correlation between levels of education, people in household, and height in CM",
    hAxis: {
      title: "People in Household"
    },
    vAxis: {
      title: "Age"
    },
    bubble: {textStyle:{fontSize:18}},
    colorAxis: {colors: ['blue', 'green', 'yellow']}
  }

  const chart = new google.visualization.BubbleChart(document.getElementById("chart-container"));
  chart.draw(data, options);
}