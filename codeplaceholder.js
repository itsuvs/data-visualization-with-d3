d3.select('#hello-world')
  .append('svg')
  .attr('style',"outline: 1px solid black; width: 100%; background: black;")
  .append('text')
  .text('Hello World')
  .attr("x", 20)
  .attr("y", 90)
  .attr('style',"fill: yellow; font-size: 36; font-family: monospace;")

// var data = [85, 25, 152, 47, 200];

// var width = 272;
// var height = 272;

// var svg = d3
//   .select("#axes")
//   .append("svg")
//   .attr("style", "outline: 1px solid black")
//   .attr("style", "width: 100%")
//   .attr("width", width)
//   .attr("height", height)
//   .attr("style", "outline: 1px solid black")
//   .attr("style", "background: #e5e5e5");

// var scale = d3.scaleLinear().domain([0, 200]).range([10, 252]);

// var xaxis = d3.axisBottom().scale(scale);

// svg.append("g").attr("transform", "translate(0,140)").call(xaxis);

