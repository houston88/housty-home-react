import React from 'react'
import { Parallax, Background } from 'react-parallax';
import DuckImage from '../assets/Duck.jpg';
import AlaskaImage from '../assets/alaska.jpg';
import FamilyImage from '../assets/family.jpg';
import './HomeView.scss';

// pure render component
export const HomeView = (props) => (
  <div className='home-top'>

    <Parallax strength={200} blur={2}>
      <Background>
        <img src={AlaskaImage}/>
      </Background>
      <div className='profile-container'>
        <img
          alt='Harris Family'
          className='profile-image'
          src={FamilyImage} />
        <h2>Harris Family Launch Pad</h2>
      </div>
    </Parallax>

    <div className='container'>
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
