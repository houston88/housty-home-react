import React from 'react'
import YouTubeLogoImage from './assets/youtube.png'
import DeviantArtLogoImage from './assets/deviantart.jpg'
import InstagramLogoImage from './assets/instagram.png'
import PdfImage from './assets/pdf-icon.png'
import Itch from './assets/itch.png'
import './Card.scss'

class Card extends React.Component {

  renderBrandLogo(brand) {
    switch (brand) {
      case 'google':
        return <div className='service-logo'>
          <svg viewBox='0 0 24 24' height='1em' width='1em'>
            <path d='M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z' />
          </svg>
        </div>
      case 'facebook':
        return <div className='service-logo'>
          <svg viewBox='0 0 266.893 266.895' height='1em' width='1em'>
            <path id='Blue_1_' fill='#3C5A99' d='M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z' />
            <path id='f' fill='#FFFFFF' d='M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z' />
          </svg>
        </div>
      case 'youtube':
        return <div className='service-logo'>
          <img
            alt='YouTube'
            src={YouTubeLogoImage} />
        </div>
      case 'deviantart':
        return <div className='service-logo'>
          <img
            alt='Deviant Art'
            src={DeviantArtLogoImage} />
        </div>
      case 'instagram':
        return <div className='service-logo'>
          <img
            alt='Instagram'
            src={InstagramLogoImage} />
        </div>
      case 'squarespace':
        return <div className='service-logo'>
          <svg viewBox='0 0 430.112 430.112' height='1em' width='1em'>
            <path fill='black' d='M71.232,197.391L200.388,67.461c32.425-32.604,84.976-32.604,117.384,0   c7.762,8.172,7.397,21.396-0.588,29.428c-8.111,8.163-21.226,8.163-29.355,0l-1.96-2.272c-16.298-13.899-40.753-13.11-56.136,2.373   L97.675,229.817c-8.697,8.061-21.83,8.061-29.932-0.089c-8.109-8.144-8.109-21.37,0-29.519   C68.833,199.125,69.995,198.189,71.232,197.391z M361.2,200.214c-8.111-8.149-21.23-8.149-29.342,0   c-1.083,1.099-2.025,2.275-2.828,3.523l-128.637,129.4c-16.211,16.297-42.491,16.297-58.698,0l-0.588-0.094   c-8.095-8.148-21.228-8.148-29.342,0c-8.097,8.135-8.097,21.375,0,29.505c1.036,1.041,2.14,1.951,3.307,2.74   c32.593,29.935,83.142,29.066,114.661-2.637L361.2,229.733C369.297,221.59,369.297,208.363,361.2,200.214z M159.265,285.943   c-1.23,0.812-2.404,1.746-3.479,2.829c-8.111,8.139-8.111,21.37,0,29.505c8.1,8.148,21.228,8.148,29.93,0.103l132.057-132.851   c16.209-16.297,42.489-16.297,58.685,0c16.228,16.305,16.228,42.748,0,59.046L251.239,371.132   c16.223,16.293,42.489,16.293,58.693,0l95.88-97.038c32.399-32.6,32.399-85.463,0-118.081c-32.403-32.583-84.959-32.583-117.386,0   L159.265,285.943z M141.69,274.094L273.16,141.178c8.106-8.158,8.106-21.382,0-29.515c-8.097-8.158-21.244-8.158-29.342,0   c-1.092,1.076-2.025,2.263-2.819,3.512L112.351,244.58c-16.209,16.307-42.48,16.307-58.682,0   c-16.225-16.298-16.225-42.742,0-59.046L178.887,58.993c-16.202-16.312-42.491-16.312-58.698,0l-95.878,97.02   c-32.415,32.618-32.415,85.481,0,118.081C56.729,306.708,109.299,306.708,141.69,274.094z' />
          </svg>
        </div>
      case 'pdf':
        return <div className='service-logo'>
          <img
            alt='PDF'
            src={PdfImage} />
        </div>
      case 'itch':
        return <div className='service-logo'>
          <img
            alt='Itch'
            src={Itch} />
        </div>
      case 'github':
        return <div className='service-logo'>
          <svg viewBox='0 0 24 24' height='1em' width='1em'>
            <path fill='currentColor' d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </div>
      default:
        return ''
    }
  }

  render() {
    return (
      <div className='card'>
        <a href={this.props.url} target='_blank'>
          <div className='card-image'>
            {typeof this.props.image === 'string' ? (
              <img alt='image' src={this.props.image} />
            ) : (
              this.props.image
            )}
          </div>
          <div className={'card-desc' + (this.props.brand ? ` ${this.props.brand}` : '')}>
            {this.props.brand
              ? this.renderBrandLogo(this.props.brand)
              : ''}
            {this.props.label}
          </div>
        </a>
      </div>
    )
  }

}

import PropTypes from 'prop-types'

Card.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  label: PropTypes.string.isRequired,
  brand: PropTypes.string
}

export default Card
