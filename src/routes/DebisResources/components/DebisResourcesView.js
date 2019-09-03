import React from 'react'
// import { Link } from 'react-router'
import Card from '../../../components/Card'
import './DebisResourcesView.scss'
import TPT from '../assets/Hands.jpg'
import ART from '../assets/Art.jpg'
import SHOP from '../assets/Store.jpg'
import ESCAP from '../assets/Escape.jpg'
// import WEEK from '../assets/week.jpg'
import LESS from '../assets/Lessons.jpg'
import ORIE from '../assets/Orient.jpg'

// pure render component
export const DebisResourcesView = (props) => (
  <div className='debis-resources'>
    <div className='container'>
      {/*
      <section className='top-panel'>
        <div className='info'>
          <a className='button'
            target='_blank'
            href='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'>
              My Store
          </a>
          <Link className='button' to='/debis-resources/orientation'>Orientation</Link>
        </div>
      </section>
      */}
      <div className='grade-sections'>
        <section>
          <h2>Foundations</h2>
          <div className='cards'>
            <Card
              image={ART}
              brand='pdf'
              url='https://www.teacherspayteachers.com/Product/Giotto-Biogrophy-for-Kids-CC-Cycle-1-Week-13-4523704'
              label='Scripts for Art Lesson' />

            <Card
              image={TPT}
              brand='pdf'
              url='https://www.teacherspayteachers.com/Product/Giotto-Biogrophy-for-Kids-CC-Cycle-1-Week-13-4523704'
              label='Scripts for Hands-On Science Lesson' />
          </div>
        </section>
        <section>
          <h2>Essentials</h2>
          <div className='cards'>
            <Card
              image={ORIE}
              brand='pdf'
              url='/debi/orientation.html'
              label='Orientation Meeting' />

            {/* <Card
              image={WEEK}
              brand='pdf'
              url='/debi/lessonplans.html'
              label='Week by Week Resources' /> */}

            {/* <Card
              image={HANDY}
              brand='pdf'
              url='/debi'
              label='Handy Handouts' /> */}
            <Card
              image={LESS}
              brand='pdf'
              url='/debi/lessonplans.html'
              label='My Lesson Plans' />
            <Card
              image={ESCAP}
              brand='pdf'
              url='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'
              label='Escape Room' />
          </div>
        </section>
        <section>
          <h2>Shop</h2>
          <div className='cards'>
            <Card
              image={SHOP}
              brand='pdf'
              url='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'
              label='The Tutor&#39;s Assistant' />
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default DebisResourcesView
