import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './Spinner.scss'

class Spinner extends React.Component {

  render() {
    return <div>
      <TransitionGroup>
        {this.props.loading
          ? <CSSTransition
            key="loading"
            timeout={500}
            classNames="loading-spinner"
            appear
          >
            <div className={this.props.backdrop ? 'loading-spinner overlay' : 'loading-spinner'}>
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
          </CSSTransition>
          : null}
      </TransitionGroup>
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
