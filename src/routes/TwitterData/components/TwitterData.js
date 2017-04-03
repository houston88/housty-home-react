import React from 'react'
import Spinner from '../../../components/Spinner'
import DataMap from './DataMap'
import Bubbles from './Bubbles'
import TimelineBar from './TimelineBar'
import './TwitterData.scss'

class TwitterData extends React.Component {

  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.renderTop10States = this.renderTop10States.bind(this)
    this.renderHashtagsList = this.renderHashtagsList.bind(this)
    this.state = {
      selectedDate: ''
    }
    this.states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]
  }

  componentDidMount () {
    // get happies state data and auto select first one
    this.props.getHappiestStates().then(() => {
      if (this.props.twitterData.happiestStates && this.props.twitterData.happiestStates.length) {
        // auto select latest, auto fetch latest
        this.props.handleDateSelection(this.props.twitterData.happiestStates.length - 1)
      }
    })
    // also get historical hapiness
    this.props.getHistoricalHappiness()
  }

  onChange (e) {
    this.props.handleDateSelection(e.target.value)
  }

  renderTop10States () {
    let statesTable = [], sorted = []
    if (this.props.twitterData.selectedIndex) {
      this.states.forEach(state => {
        if (this.props.twitterData.detailedData[state]) {
          statesTable.push({
            'state': state,
            'score': this.props.twitterData.detailedData[state].score,
            'rank': this.props.twitterData.detailedData[state].rank
          })
        }
      })
      sorted = statesTable.sort((a, b) => {
        if (typeof a.rank !== 'number' & typeof b.rank === 'number') {
          return +1
        } else if (typeof b.rank !== 'number' & typeof a.rank === 'number') {
          return -1
        }
        return a.rank - b.rank
      })
    }
    return (
      <div className='state-list-container'>
        { sorted.slice(0, 10).map(stateItem => {
          return <span
            key={stateItem.state}
            className='state-list'>
              #{stateItem.rank} - {stateItem.state}({stateItem.score})
            </span>
        })
        }
      </div>
    )
  }

  renderHashtagsList () {
    return (
      <div className='state-list-container'>
        { this.props.twitterData.detailedData.hashtags.map(tag => {
          return <span
            key={tag.hashtag}
            className='state-list'>
            {tag.hashtag} ({tag.count})
            </span>
        })
        }
      </div>
    )
  }

  render () {
    let dateSelectionsLength = 0,
      selectedDateLabel = ''
    if (this.props.twitterData && this.props.twitterData.happiestStates) {
      dateSelectionsLength = this.props.twitterData.happiestStates.length
    }
    if (dateSelectionsLength && this.props.twitterData.selectedIndex) {
      let sDate = new Date(this.props.twitterData.happiestStates[this.props.twitterData.selectedIndex].parseDate)
      selectedDateLabel = sDate.toLocaleDateString() + ' ' + sDate.toLocaleTimeString()
    }

    return (
      <div className='twitter-data'>
        <Spinner backdrop loading={this.props.twitterData.loading} />
        <div className='container'>
          <section>
            <h2>Happiest States Twitter Data</h2>
            <div className='range-control'>
              <label>Based on 10 minutes of 1% Twitter stream ending at {selectedDateLabel}</label>
              <input type='range'
                min='0' max={dateSelectionsLength - 1}
                step='1'
                value={this.props.twitterData.selectedIndex}
                onChange={this.onChange} />
            </div>
            <div className='muted'>
              Positive scores are positive vibes. Negative scores are... well, sad vibes.
              Based on <a href='http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010'>AFINN-111</a>
            </div>
            { this.renderTop10States() }
            { this.props.twitterData.selectedIndex
              ? <DataMap mapData={this.props.twitterData.detailedData} />
              : '' }
          </section>
          { this.props.twitterData.detailedData.hashtags
            ? <section>
              <h2>Top 10 Hashtags</h2>
              <div className='range-control'>
                <label>Based on 10 minutes of 1% Twitter stream from {selectedDateLabel}</label>
                <input type='range'
                  min='0' max={dateSelectionsLength - 1}
                  step='1'
                  value={this.props.twitterData.selectedIndex}
                  onChange={this.onChange} />
              </div>
              <div className='muted'>
                  Using same twitter data as above (tweets with geo data).
                  Not filtered by geography. Click and drag a circle, it's kinda fun.
                </div>
              { this.renderHashtagsList() }
              <Bubbles hashtagData={this.props.twitterData.detailedData.hashtags} />
            </section>
            : '' }
          {
            this.props.twitterData.historicalHapiness.length
            ? <section>
              <h2>Historical Happiness over Time</h2>
              <div className='muted'>Based on twitter stream data collected.</div>
              <TimelineBar happyData={this.props.twitterData.historicalHapiness} />
            </section>
            : ''
          }

        </div>
      </div>
    )
  }

}

TwitterData.propTypes = {
  getHappiestStates : React.PropTypes.func.isRequired
}

export default TwitterData
