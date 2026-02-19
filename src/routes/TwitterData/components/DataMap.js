import React, { Component } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const colorScale = scaleLinear()
  .domain([0, 100])
  .range(['#ffedea', '#ff5233'])

const fipsToAbbr = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL', '13': 'GA',
  '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '24': 'MD', '25': 'MA',
  '26': 'MI', '27': 'MN', '28': 'MS', '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', '34': 'NJ', '35': 'NM', '36': 'NY',
  '37': 'NC', '38': 'ND', '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX',
  '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI', '56': 'WY'
}

class DataMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipContent: ''
    }
    this.tooltipRef = React.createRef()
    this.setTooltipContent = this.setTooltipContent.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  setTooltipContent(content) {
    this.setState({ tooltipContent: content })
  }

  handleMouseMove(event) {
    if (this.tooltipRef.current) {
      const { clientX, clientY } = event
      this.tooltipRef.current.style.left = `${clientX + 10}px`
      this.tooltipRef.current.style.top = `${clientY + 10}px`
    }
  }

  render() {
    const { mapData } = this.props
    return (
      <div id='data-map' style={{ width: '100%', maxWidth: '100%', height: 'auto' }}>
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1000 }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const abbr = fipsToAbbr[geo.id]
                const cur = abbr ? this.props.mapData[abbr] : null
                // Map legacy fill keys to colors if needed, or use a scale
                // For now, let's just use a default color if no fill key
                let fillColor = '#D0D0D0'
                if (cur) {
                  if (cur.fillKey === 'TOP') fillColor = '#99FF99'
                  else if (cur.fillKey === 'HIGH') fillColor = '#3385FF'
                  else if (cur.fillKey === 'MEDIUM') fillColor = '#66A3FF'
                  else if (cur.fillKey === 'LOW') fillColor = '#99C2FF'
                  else if (cur.fillKey === 'NEG') fillColor = '#CC3300'
                }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#FFF"
                    onMouseEnter={() => {
                      const { name } = geo.properties
                      const rank = cur ? cur.rank : 'NA'
                      const score = cur ? cur.score : 'NA'
                      this.setTooltipContent(`${name} - Rank: ${rank} - Score: ${score}`)
                    }}
                    onMouseMove={this.handleMouseMove}
                    onMouseLeave={() => {
                      this.setTooltipContent('')
                    }}
                    style={{
                      default: {
                        outline: 'none'
                      },
                      hover: {
                        fill: '#F53',
                        outline: 'none'
                      },
                      pressed: {
                        outline: 'none'
                      }
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>
        <div
          ref={this.tooltipRef}
          className="tooltip"
          style={{
            position: 'fixed',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '5px',
            borderRadius: '3px',
            pointerEvents: 'none',
            zIndex: 1000,
            display: this.state.tooltipContent ? 'block' : 'none'
          }}
        >
          {this.state.tooltipContent}
        </div>
      </div>
    )
  }
}

import PropTypes from 'prop-types'

DataMap.propTypes = {
  mapData: PropTypes.object.isRequired
}

export default DataMap
