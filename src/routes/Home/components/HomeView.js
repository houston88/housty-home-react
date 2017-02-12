import React from 'react'
import { Parallax, Background } from 'react-parallax';
import Card from '../../../components/Card';
import DuckImage from '../assets/Duck.jpg';
import TetonsImage from '../assets/tetons.jpg';
import FamilyImage from '../assets/family.jpg';
import PhotosAlbumImage from '../assets/vancouver_cropped.jpg';
import FacebookAlbumImage from '../assets/housty_san_fran_cropped.jpg';
import YouTubeImage from '../assets/new_mex_cropped.png';
import './HomeView.scss';

// pure render component
export const HomeView = (props) => (
  <div className='home-top'>

    <Parallax strength={-400} blur={2}>
      <Background>
        <img src={TetonsImage}/>
      </Background>
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
          label='Google Photo Albums' />
        <Card
          image={FacebookAlbumImage}
          brand='facebook'
          url='https://www.facebook.com/housty.harris/photos'
          label='Facebook Photo Albums' />
        <Card
          image={YouTubeImage}
          brand='youtube'
          url='https://www.youtube.com/user/houstyharris/videos'
          label='Family YouTube Channel' />
      </div>

      <h4>Welcome!</h4>
      <img
        alt='This is a duck, because Redux!'
        className='duck'
        src={DuckImage} />

      <p>
        For Literature, the students are writing a compare/contrast essay
        for A Single Shard (Korea) and Matilda Bone (England).  I have
        attached a document with new instructions for that paper, due
        February 23.  Also, they should be reading and listening to Good
        Masters! Sweet Ladies!  The Plano Library system has both the book
        and audio.  The assignment for this book is not to write an essay,
        but rather to recite a memorized piece which can be either one of
        the monologues or dialogues in the book or an alternate piece of
        your (the teacher's) choosing.  However, the recitation should be
        about 3 minutes long.  The recitation will be on March 16, the
        week after Spring Break.
      </p>

    </div>

  </div>
)

export default HomeView
