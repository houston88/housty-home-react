import React from 'react'
import * as d3 from 'd3'
import './Bubbles.scss'

class Bubbles extends React.Component {

  constructor(props) {
    super(props)
    this.simulation = null
    this.width = 0
    this.height = 0
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    let elem = document.getElementById('hashtag-bubbles')
    this.width = elem.innerWidth || elem.clientWidth
    this.height = this.width * 0.3 || 400
    window.addEventListener('resize', this.updateDimensions)
    this.plotBubbles(this.props.hashtagData)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
    if (this.simulation) this.simulation.stop()
    d3.select('#hashtag-bubbles').select('svg').remove()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hashtagData !== this.props.hashtagData) {
      this.plotBubbles(this.props.hashtagData)
    }
  }

  updateDimensions() {
    let elem = document.getElementById('hashtag-bubbles')
    this.width = elem.innerWidth || elem.clientWidth
    this.height = this.width * 0.3 || 400
    if (this.simulation) {
      this.simulation.force('center', d3.forceCenter(this.width / 2, this.height / 2))
      this.simulation.alpha(1).restart()
    } else {
      this.plotBubbles(this.props.hashtagData)
    }
  }

  dragstarted = (event, d) => {
    if (!event.active) this.simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  }

  dragged = (event, d) => {
    d.fx = event.x
    d.fy = event.y
  }

  dragended = (event, d) => {
    if (!event.active) this.simulation.alphaTarget(0.05)
    d.fx = null
    d.fy = null
  }

  plotBubbles(data) {
    if (this.simulation) this.simulation.stop()
    const { width, height } = this
    d3.select('#hashtag-bubbles').selectAll('*').remove()

    const bubbleData = data.map(tag => ({
      name: tag.hashtag,
      count: parseInt(tag.count),
      r: parseInt(tag.count) // Initial radius, will be scaled
    }))

    const maxRadius = 85
    const rScale = d3.scaleSqrt()
      .domain([0, d3.max(bubbleData, d => d.count)])
      .range([0, maxRadius])

    // Update radius in data
    bubbleData.forEach(d => {
      d.r = rScale(d.count)
    })

    const svg = d3.select('#hashtag-bubbles')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const node = svg.append('g')
      .attr('class', 'bubble-nodes')
      .selectAll('circle')
      .data(bubbleData)
      .enter()
      .append('g')
      .attr('class', 'bubble-node')
      .attr('cursor', 'pointer')
      .on('click', (event, d) => {
        // Handle click
        console.log('Clicked', d.name)
      })
      .call(d3.drag()
        .on('start', this.dragstarted)
        .on('drag', this.dragged)
        .on('end', this.dragended))

    // Define color scale: Neon Cyan to Neon Pink
    const colorScale = d3.scaleLinear()
      .domain([0, d3.max(bubbleData, d => d.count)])
      .range(['#00f3ff', '#ff00ff'])

    const circles = node.append('circle')
      .attr('r', d => d.r)
      .attr('fill', d => colorScale(d.count))
      .attr('stroke', '#fff')
      .attr('stroke-width', '1px')

    const labels = node.append('text')
      .attr('class', 'bubble-label')
      .style('text-anchor', 'middle')
      .style('font-size', d => Math.max(8, rScale(d.count / 8)) + 'px')
      .text(d => d.name)
      .style('pointer-events', 'none')
      .attr('fill', 'black')

    const simulation = d3.forceSimulation(bubbleData)
      .velocityDecay(0.2) // Lower decay for more "floaty" movement
      .force('charge', d3.forceManyBody().strength(5)) // Positive strength attracts, but we want them to cluster. 
      // If we want "bouncing", we rely on collision. 
      // Actually, user said previously they were bouncing.
      // Let's try combining Charge (attract) with Collision (repel) properly.
      // Or maybe simple repulsion (-charge) + separate forceX/Y?
      // Let's stick to Center + Collision + light Charge.
      // Refined:
      .force('charge', d3.forceManyBody().strength(5))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.01)) // Pulls bubbles to horizontal center
      .force('y', d3.forceY(height / 2).strength(0.01)) // Pulls bubbles to vertical center
      .force('collision', d3.forceCollide().radius(d => d.r + 2).strength(3)) // Higher iteration/strength for hardness
      .on('tick', () => {
        node.attr('transform', d => `translate(${d.x},${d.y})`)
      })

    // To keep them "moving" continuously or longer:
    // simulation.alphaTarget(0.05); // Keeps the simulation "hot" but might be too CPU intensive?
    // Let's just reduce regular decay.

    // Actually, looking at the user request: "slightly moving and bouncing off of each other".
    // This often implies a low velocity decay and maybe a small alpha target.
    // Let's set a small alpha target to keep them alive.
    simulation.alphaTarget(0.05)

    this.simulation = simulation
  }

  render() {
    return (
      <div id='hashtag-bubbles' style={{ width: '100%' }} />
    )
  }

}

import PropTypes from 'prop-types'

Bubbles.propTypes = {
  hashtagData: PropTypes.array.isRequired
}

export default Bubbles
