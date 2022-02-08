// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 40}
var width = 400 - margin.left - margin.right
var height = 400 - margin.top - margin.bottom

// append the svg object to the body of the page
var svg = d3.select("#root")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");

var min = 10
var q1 = 15
var median = 20
var q3 = 25
var max = 30

// Show the Y scale
var y = d3.scaleLinear()
          .domain([0,40])
          .range([height, 0]);
svg.call(d3.axisLeft(y))

// a few features for the box
var center = 200
var width = 100

svg.append("line")
    .attr("x1", center)
    .attr("x2", center)
    .attr("y1", y(min) )
    .attr("y2", y(max) )
    .attr("stroke", "black")
console.log(svg)

// Show the box
svg.append("rect")
    .attr("x", center - width/2)
    .attr("y", y(q3) )
    .attr("height", (y(q1)-y(q3)) )
    .attr("width", width )
    .attr("stroke", "black")
    .style("fill", "#69b3a2")
console.log(svg)

// show median, min and max horizontal lines
svg.selectAll("toto")
    .data([min, median, max])
    .enter()
    .append("line")
      .attr("x1", center-width/2)
      .attr("x2", center+width/2)
      .attr("y1", function(d){ return(y(d))} )
      .attr("y2", function(d){ return(y(d))} )
      .attr("stroke", "black")
console.log(svg)


Vue.component('QuickBench', {
  template: `
  <div>
    <p>QuickBench</p>
    <svg width="600" height="500"></svg>
  </div>
  `,
  data(){
    return{
      vued3: {},
    }
  }
});

new Vue({
  el: '#root'
});
