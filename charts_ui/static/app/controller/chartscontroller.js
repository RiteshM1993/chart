angular.module('chartsCtrl', [])

.controller('chartsCtrl', function(en       ) {
  var vt = this;

  var ctx = document.getElementById("graph1").getContext('2d');

  var ctxOne = document.getElementById("graph2").getContext('2d');

  var success = function(response){
    var graph1Data = response.data.data.graph_one
    var graph2Data = response.data.data.graph_two
    var labels = []
    var graphData = []
    angular.forEach(graph1Data, function(data){
        labels.push(data.sex);
        graphData.push(data.dcount)
    })

    var myChartOne = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: graphData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
      }
    });

    labels = [];
    graphData = [];
    angular.forEach(graph2Data, function(data){
        labels.push(data.marital_status);
        graphData.push(data.dcount)
    })

  var myChart = new Chart(ctxOne, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: graphData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  }
});
    console.log(graph1Data)
    console.log(graph2Data)
  }

  var error = function(error){

  }

  $http.get('api/graphApi/').then(success, error)

});

