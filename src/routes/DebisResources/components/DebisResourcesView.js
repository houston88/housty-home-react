import React from 'react'
import FontAwesome from 'react-fontawesome'
import Card from '../../../components/Card'
import './DebisResourcesView.scss'
import TPT from '../assets/HandsOnScience.jpg'

// pure render component
export const DebisResourcesView = (props) => (
  <div className='debis-resources'>
    <div className='container'>
      <section className='top-panel'>
        <div className='info'>
          <a className='button'
            target='_blank'
            href='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'>
              My Store
          </a>
        </div>
      </section>
      <section>
        <h2>Foundations</h2>
        <div className='cards'>
          <Card
            image={TPT}
            brand='pdf'
            url='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'
            label='The Tutor&#39;s Assistant' />
        </div>
      </section>
      <section>
        <h2>Essentials</h2>
        <div className='cards'>
          <Card
            image={TPT}
            brand='pdf'
            url='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'
            label='The Tutor&#39;s Assistant' />
        </div>
      </section>
    </div>
  </div>
)

export default DebisResourcesView
