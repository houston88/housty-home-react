import React from 'react'
import * as d3 from 'd3'
import './TimelineBar.scss'

class TimelineBar extends React.Component {

  constructor(props) {
    super(props)
    this.width = 0
    this.updateDimensions = this.updateDimensions.bind(this)
    this.renderTimelineBar = this.renderTimelineBar.bind(this)
  }

  componentDidMount() {
    let elem = document.getElementById('happy-bar')
    this.width = elem.innerWidth || elem.clientWidth
    window.addEventListener('resize', this.updateDimensions)
    // render timeline bar chart
    this.renderTimelineBar(elem, this.width, this.props.happyData)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
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
      <div id='happy-bar' />
    )
  }

  renderTimelineBar(elem, elemWidth, data) {
    // to support small screens
    let screenWidth = elemWidth

    let margin = { top: 10, right: 10, bottom: 20, left: 35 },
      width = screenWidth - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom

    let y0 = Math.max(Math.abs(d3.min(data, d => d.score)), Math.abs(d3.max(data, d => d.score)))

    // Create a local copy to avoid mutating props
    // This ensures we always parse from the original source strings on re-renders
    let localData = data.map(d => ({ ...d }))

    // Parse the date strings into javascript dates
    // d3 v7 timeParse
    const parseDate = d3.timeParse('%m/%d/%Y')
    const parseDateLegacy = d3.timeParse('%Y-%m-%d')
    const parseIso = d3.isoParse

    localData.forEach(function (d) {
      if (typeof d.date === 'string') {
        const parsed = parseIso(d.date) || parseDate(d.date) || parseDateLegacy(d.date) || new Date(d.date)
        d.date = parsed instanceof Date && !isNaN(parsed) ? parsed : new Date() // Fallback to now or handle error?
        // If it's still invalid, we might want to filter it out, but for now let's keep it safe.
        if (isNaN(d.date)) {
          console.error('Failed to parse date:', d.date)
          d.date = new Date() // Failsafe
        }
      } else if (!(d.date instanceof Date)) {
        // If it's not a string and not a date?
        d.date = new Date()
      }
      d.value = d.score
    })

    let x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.15)
      .domain(localData.map((d, i) => i))

    let y = d3.scaleLinear()
      .domain([-y0, y0])
      .range([height, 0])
      .nice()

    let xAxis = d3.axisBottom(x)
      .tickFormat(() => '') // Hide labels for now as there are too many

    let yAxis = d3.axisLeft(y)
      .ticks(20)

    // Create the SVG drawing area
    let svg = d3.select(elem)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Tooltip
    // Simple custom tooltip since d3-tip is legacy
    const tooltip = d3.select('body').append('div')
      .attr('class', 'd3-tip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', '#fff')
      .style('padding', '5px')
      .style('border-radius', '2px')
      .style('pointer-events', 'none')

    const formatDate = d3.timeFormat('%m/%d/%Y')

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + y(0) + ')')
      .call(xAxis)

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .attr('fill', '#000')
      .text('Happiness Score')

    svg.selectAll('.bar')
      .data(localData)
      .enter().append('rect')
      .attr('class', function (d) { return 'bar bar-' + (d.value < 0 ? 'negative' : 'positive') })
      .attr('x', function (d, i) { return x(i) })
      .attr('width', x.bandwidth())
      .attr('y', function (d) {
        return y(Math.max(0, d.value))
      })
      .attr('height', function (d) {
        return Math.abs(y(d.value) - y(0))
      })
      .on('mouseover', (event, d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', .9)
        tooltip.html(
          '<strong>Date: </strong><span>' + formatDate(d.date) + '</span><br>' +
          '<strong>Score: </strong><span style="color:red">' + d.score + '</span>'
        )
          .style('left', (event.pageX) + 'px')
          .style('top', (event.pageY - 28) + 'px')
      })
      .on('mouseout', (d) => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0)
      })
  }

}

import PropTypes from 'prop-types'

TimelineBar.propTypes = {
  happyData: PropTypes.array.isRequired
}

export default TimelineBar
