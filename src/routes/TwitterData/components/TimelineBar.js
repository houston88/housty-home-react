import React from 'react'
import ReactDOM from 'react-dom'
import d3 from 'd3'
import { createTooltip } from'./barTooltip'
import './TimelineBar.scss'

class TimelineBar extends React.Component {

  constructor(props) {
    super(props)
    this.timeline = null
    this.width = 0
    this.updateDimensions = this.updateDimensions.bind(this)
    this.renderTimelineBar = this.renderTimelineBar.bind(this)
  }

  componentDidMount() {
    let elem = document.getElementById('happy-bar')
    this.width = elem.innerWidth || elem.clientWidth
    window.addEventListener("resize", this.updateDimensions)
    // render timeline bar chart
    this.renderTimelineBar( elem, this.width, this.props.happyData)
  }

  componentWillUnmount() {
    console.log('Timeline bar getting unmounted?')
    window.removeEventListener("resize", this.updateDimensions)
    d3.select('#happy-bar').select('svg').remove()
    d3.select('.d3-tip').remove()
  }

  updateDimensions() {
    let elem = document.getElementById('happy-bar')
    this.width = elem.innerWidth || elem.clientWidth
    d3.select('#happy-bar').select('svg').remove()
    // lets attempt redraw?
    this.renderTimelineBar(elem, this.width, this.props.happyData)
  }

  render() {
    return (
      <div id='happy-bar'></div>
    )
  }

  renderTimelineBar(elem, elemWidth, data) {
    // to support small screens
    let screenWidth = elemWidth;

    let margin = {top: 10, right: 10, bottom: 10, left: 35},
		    width = screenWidth - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

    let y0 = Math.max(Math.abs(d3.min(data)), Math.abs(d3.max(data)));
    let x = d3.scale.ordinal().rangeRoundBands([0, width], 0.15);
    let y = d3.scale.linear().domain([-y0, y0]).range([height, 0]).nice();

    // Format date? Too much data to read: .tickFormat(d3.time.format('%m/%d/%Y'));
    let xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .tickFormat('');

    let yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .ticks(20);

		// Create the SVG drawing area
		let svg = d3.select(elem)
		  .append('svg')
		  .attr('width', width + margin.left + margin.right)
		  .attr('height', height + margin.top + margin.bottom)
		  .append('g')
		  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	  // Parse the date strings into javascript dates
	  data.forEach(function(d) {
	    d.date = new Date(d.parseDate);
      d.value = d.score;
	  });

    x.domain(data.map(function(d) { return d.date; }));
    y.domain([d3.min(data, function(d) { return d.value; }), d3.max(data, function(d) { return d.value; })]);

    let tip = createTooltip(d3)
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return '<strong>Date: </strong><span>'+ d3.time.format('%m/%d/%Y')(d.date) +'</span><br><strong>Score: </strong><span style="color:red">' + d.score + '</span>';
      });
    svg.call(tip);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + y(0) + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .style('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .text('Happiness Score');

    svg.selectAll('bar')
        .data(data)
        .enter().append('rect')
        .attr('class', function(d) { return 'bar bar-' + (d.value < 0 ? 'negative' : 'positive'); })
        .attr('x', function(d) { return x(d.date); })
        .attr('width', function(d) { return x.rangeBand(); })
        .attr('y', function(d) {
          return y(Math.max(0, d.value));
        })
        .attr('height', function(d) {
          return Math.abs(y(d.value) - y(0));
        })
        .on('mouseover', (e) => {
          tip.show(e)
        })
        .on('mouseout', (e) => {
          tip.hide(e)
        })
  }

}


TimelineBar.propTypes = {
  happyData : React.PropTypes.array.isRequired
}

export default TimelineBar
