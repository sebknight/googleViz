


google.charts.load('current', {'packages':['bar', 'controls']});
      google.charts.setOnLoadCallback(drawDashboard);

      function drawDashboard() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Total', 'Unprovoked', 'Provoked'],
          ['Australia', 42.93, 37.46, 5.47],
          ['New Zealand', 20, 16, 4],
          ['South Africa', 8.03, 7, 0.9],
          ['USA', 6.53, 5.08, 1.44],
        ]);

        var options = {
          chart: {
            title: '',
            subtitle: '',
          },
          colors: ['#013234','#4DAF7C','#C0392B']
        };

        var dashboard = new google.visualization.Dashboard(
          document.getElementById('dashboard'));
        // var  

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }


      //325700000 - / 1,000,000 = 6.53 total, (US divide by 325.7) 5.08 unprovoked, 1.44 proboked
      //AUS 42.93!! total, 37.46 unprovoked, 5.47 proboked divide  by 24.13
      //SA 8.03 total, 7.0 unpro. 0.9 pro
      //Bra 0.43 total, 0.41 unpro, 0.01 pro
      //NZ 20 total, 16 unpro, 4 pro