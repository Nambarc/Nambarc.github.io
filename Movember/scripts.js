
// Get graph context and configure size.
var ctx = document.getElementById('chart_0').getContext('2d');
ctx.canvas.width = 1000;
ctx.canvas.height = 470;

// Define graph options.
var graph_options = {
  animation: {duration: 2000},
  scales:{
    xAxes: [{scaleLabel: {display: false, labelString: 'Date'}, type: 'time', distribution: 'series', offset: true}],
    yAxes: [{scaleLabel: {display: true, labelString: 'Distance (km)'}, gridLines: {drawBorder: false}}],
  },
  legend: {position: 'right'}
}

// Configure graph.
var cfg = {
  data: {
    datasets: boys_combined_dataset
  },
  options: graph_options
};

// Create graph.
var chart = new Chart(ctx, cfg);
