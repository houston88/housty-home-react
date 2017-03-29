import { connect } from 'react-redux'
import { getHappiestStates, handleDateSelection } from '../modules/twitterData'

import TwitterData from '../components/TwitterData'

const mapDispatchToProps = {
  getHappiestStates : () => getHappiestStates(),
  handleDateSelection : (index) => handleDateSelection(index)
}

const mapStateToProps = (state) => ({
  twitterData : state.twitterData
})

export default connect(mapStateToProps, mapDispatchToProps)(TwitterData)
