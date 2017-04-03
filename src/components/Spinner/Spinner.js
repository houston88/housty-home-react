import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Spinner.scss'

class Spinner extends React.Component {

  render () {
    return <div>
      <ReactCSSTransitionGroup transitionName='loading-spinner'
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {this.props.loading
          ? <div className={this.props.backdrop ? 'loading-spinner overlay' : 'loading-spinner'}>
            <svg className='spinner' width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
              <circle className='path'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                cx='33'
                cy='33'
                r='30' />
            </svg>
          </div>
          : ''}
      </ReactCSSTransitionGroup>
    </div>
  }

}

Spinner.defaultProps = {
  backdrop: true
}

Spinner.propTypes = {
  backdrop: PropTypes.bool,
  loading: PropTypes.bool
}

export default Spinner
