import React from 'react'
import YouTubeLogoImage from './assets/youtube.png';
import './Card.scss';


class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  renderBrandLogo(brand) {
    switch(brand) {
      case 'google':
        return <div className='service-logo'>
          <svg viewBox='0 0 24 24' height='1em' width='1em'>
            <path d='M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z'></path>
          </svg>
        </div>;
      case 'facebook':
        return <div className='service-logo'>
          <svg viewBox="0 0 266.893 266.895" height='1em' width='1em'>
            <path id="Blue_1_" fill="#3C5A99" d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z"/>
            <path id="f" fill="#FFFFFF" d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z"/>
          </svg>
        </div>
      case 'youtube':
        return <div className='service-logo'>
          <img
            alt='YouTube'
            src={YouTubeLogoImage} />
        </div>
      default:
        return '';
    }
  }

  render() {
    return (
      <div className='card'>
        <a href={this.props.url} target='_blank'>
          <div className='card-image'>
            <img alt='image' src={this.props.image} />
          </div>
          <div className={'card-desc' + (this.props.brand?` ${this.props.brand}`:'')}>
            { this.props.brand
              ? this.renderBrandLogo(this.props.brand)
              : '' }
              {this.props.label}
          </div>
        </a>
      </div>
    );
  }

}

export default Card
