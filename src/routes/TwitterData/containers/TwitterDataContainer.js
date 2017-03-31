import { connect } from 'react-redux'
import { getHappiestStates, handleDateSelection, getHistoricalHappiness } from '../modules/twitterData'

import TwitterData from '../components/TwitterData'

const mapDispatchToProps = {
  getHappiestStates : () => getHappiestStates(),
  handleDateSelection : (index) => handleDateSelection(index),
  getHistoricalHappiness: () => getHistoricalHappiness()
}

const mapStateToProps = (state) => ({
  twitterData : state.twitterData
})

export default connect(mapStateToProps, mapDispatchToProps)(TwitterData)
