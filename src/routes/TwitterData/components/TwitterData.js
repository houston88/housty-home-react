import React from 'react'
import './TwitterData.scss'

class TwitterData extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      selectedDate: ''
    }
  }

  componentDidMount() {
    this.props.getHappiestStates()
  }

  onChange(e) {
    this.props.handleDateSelection(e.target.value)
  }

  render() {

    let dateSelectionsLength = 0,
      selectedDateLabel = '';
    if (this.props.twitterData && this.props.twitterData.happiestStates) {
      dateSelectionsLength = this.props.twitterData.happiestStates.length
    }
    if (dateSelectionsLength && this.props.twitterData.selectedIndex) {
      let sDate = new Date(this.props.twitterData.happiestStates[this.props.twitterData.selectedIndex].parseDate)
      selectedDateLabel = sDate.toLocaleDateString() + ' ' + sDate.toLocaleTimeString();
    }

    return (
      <div className='twitter-data'>
        <div className='container'>
          <h2>Date for Twitter Data</h2>
          <div className='range-control'>
            <label>Based on 10 minutes of 1% Twitter stream from {selectedDateLabel}</label>
            <input type="range" min="0" max={dateSelectionsLength-1} step="1" onChange={this.onChange} />
          </div>

          {/* can we get map to show up here? */}


        </div>
      </div>
    )
  }

}

TwitterData.propTypes = {
  getHappiestStates : React.PropTypes.func.isRequired
}

export default TwitterData
