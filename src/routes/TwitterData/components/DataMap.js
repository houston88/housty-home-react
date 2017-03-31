import React from 'react'
import ReactDOM from 'react-dom'
import d3 from 'd3';
import topojson from 'topojson';
import Datamap from 'datamaps/dist/datamaps.usa.min'

class DataMap extends React.Component {

  constructor(props) {
    super(props)
    this.datamap = null
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
    this.datamap = this.renderMap(this.props.mapData)
    this.datamap.labels({fontSize: 10, labelColor: '#222'})
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);
    d3.select('#data-map').select('svg').remove()
  }

  updateDimensions() {
    if (this.datamap) {
      this.datamap.resize();
    }
  }

  renderMap(data) {
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: 'usa',
      responsive: true,
      fills: {
        TOP: '#99FF99',
        HIGH: '#3385FF',
        MEDIUM: '#66A3FF',
        LOW: '#99C2FF',
        NEG: '#CC3300',
        UNKNOWN: '#D0D0D0',
        defaultFill: '#D0D0D0'
      },
      data: data,
      geographyConfig: {
        highlightBorderColor: '#bada55',
        highlightFillColor: '#FC8D59',
        popupTemplate: function(geography, data) {
          if (!data) {
            data = {rank:'NA',score:'NA'}
          }
          return '<div class="hoverinfo"><b>'+ geography.properties.name +
            '<b><br>Rank: ' + data.rank + '<br>Score: ' + data.score
        }
      }
    })
  }

  render() {
    if (this.datamap) {
      this.datamap.updateChoropleth(this.props.mapData)
    }
    return (
      <div id='data-map'></div>
    )
  }

}

DataMap.propTypes = {
  mapData : React.PropTypes.object.isRequired
}

export default DataMap
