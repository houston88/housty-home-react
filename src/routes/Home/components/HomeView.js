import React from 'react'
import { Parallax } from 'react-parallax'
import Card from '../../../components/Card'
import ParallaxTopImage from '../assets/tuscany_landscape_sm.jpg'
import FamilyImage from '../assets/HoustyFamPic.jpg'
import FacebookAlbumImage from '../assets/housty_san_fran_cropped.jpg'
import HoustyInstagram from '../assets/claire_eye_instagram.jpg'
import YouTubeImage from '../assets/you-tube-thumb.png'
import KatieBeret from '../assets/katie_beret.jpg'
import KatieInsta from '../assets/katie_insta.png'
import DebiFacebookImage from '../assets/new_york.jpg'
import AngelaAdumbrate from '../assets/adumbrate-no1-clip.jpg'
import AngelaInstagram from '../assets/angie-localffool-insta.png'
import GunungBonitoImage from '../assets/lng_ship_boston.jpg'
import AngieLocalFoolPage from '../assets/angie-localfool-neocities.png'
import GithubImage from '../assets/alaska.jpg'
import './HomeView.scss'

// pure render component
export const HomeView = (props) => (
  <div className='home-top'>

    <Parallax
      strength={300}
      bgImage={ParallaxTopImage}
    >
      <div className='profile-container'>
        <img
          alt='Harris Family'
          className='profile-image'
          src={FamilyImage} />
        <h2>Harris Family Launch Pad</h2>
        <h3>photos and related sites</h3>
      </div>
    </Parallax>

    <div className='container'>

      <div className='cards'>
        <Card
          image={GithubImage}
          brand='github'
          url='https://github.com/houston88'
          label='Houston&#39;s GitHub' />
        <Card
          image={YouTubeImage}
          brand='youtube'
          url='https://www.youtube.com/user/houstyharris/videos'
          label='Houston&#39;s YouTube Channel' />
        <Card
          image={HoustyInstagram}
          brand='instagram'
          url='https://www.instagram.com/housty_harris'
          label='Houston&#39;s Instagram' />
        <Card
          image={FacebookAlbumImage}
          brand='facebook'
          url='https://www.facebook.com/housty.harris/photos'
          label='Houston&#39;s Facebook Photos' />
        <Card
          image={DebiFacebookImage}
          brand='facebook'
          url='https://www.facebook.com/debi.s.harris/photos'
          label='Debi&#39;s Facebook Photos' />
        <Card
          image={AngelaAdumbrate}
          brand='itch'
          url='https://jellyfishlover.itch.io/'
          label='Angie&#39;s Games and Zines' />
        <Card
          image={GunungBonitoImage}
          brand='squarespace'
          url='http://www.gunungbonito.com/'
          label='Gunung Bonito Services' />
      </div>

    </div>

  </div>
)

export default HomeView
