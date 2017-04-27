import React from 'react'
import { Parallax } from 'react-parallax'
import Card from '../../../components/Card'
import ParallaxTopImage from '../assets/buchart_gardens_sm.jpg'
import FamilyImage from '../assets/family.jpg'
import PhotosAlbumImage from '../assets/vancouver_cropped.jpg'
import FacebookAlbumImage from '../assets/housty_san_fran_cropped.jpg'
import HoustyInstagram from '../assets/claire_eye_instagram.jpg'
import YouTubeImage from '../assets/new_mex_cropped.png'
import KatieBeret from '../assets/katie_beret.jpg'
import DebiPhotosAlbumImage from '../assets/fall.jpg'
import DebiFacebookImage from '../assets/new_york.jpg'
import AngelaYouTubeImage from '../assets/angie_umbrella.jpg'
import AngelaDeviantArtImage from '../assets/marzz.png'
import BensArtImage from '../assets/elcap_benart.jpg'
import GunungBonitoImage from '../assets/lng_ship_boston.jpg'
import './HomeView.scss'

// pure render component
export const HomeView = (props) => (
  <div className='home-top'>

    <Parallax strength={300} bgImage={ParallaxTopImage}>
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
          image={PhotosAlbumImage}
          brand='google'
          url='https://get.google.com/albumarchive/109571831393986720016'
          label='Houston&#39;s Google Photos' />
        <Card
          image={FacebookAlbumImage}
          brand='facebook'
          url='https://www.facebook.com/housty.harris/photos'
          label='Houston&#39;s Facebook Photos' />
        <Card
          image={DebiPhotosAlbumImage}
          brand='google'
          url='https://get.google.com/albumarchive/112758650498152815622'
          label='Debi&#39;s Google Photos' />
        <Card
          image={DebiFacebookImage}
          brand='facebook'
          url='https://www.facebook.com/debi.s.harris/photos'
          label='Debi&#39;s Facebook Photos' />
        <Card
          image={YouTubeImage}
          brand='youtube'
          url='https://www.youtube.com/user/houstyharris/videos'
          label='Houston&#39;s YouTube Channel' />
        <Card
          image={KatieBeret}
          brand='youtube'
          url='https://www.youtube.com/channel/UCSTLbVq3kb-L4gleh23t-1Q'
          label='Katie&#39;s YouTube Channel' />
        <Card
          image={AngelaYouTubeImage}
          brand='youtube'
          url='https://www.youtube.com/channel/UCL7F8JE0grX_3v__KWqcbmg/videos'
          label='Angela&#39;s YouTube Channel' />
        <Card
          image={AngelaDeviantArtImage}
          brand='deviantart'
          url='http://ghostsky.deviantart.com/gallery/'
          label='Angela&#39;s Deviant Art' />
        <Card
          image={HoustyInstagram}
          brand='instagram'
          url='https://www.instagram.com/housty_harris'
          label='Houston&#39;s Instagram' />
        <Card
          image={BensArtImage}
          brand='squarespace'
          url='http://bensartorius.com/'
          label='Ben Sartorius Art' />
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
