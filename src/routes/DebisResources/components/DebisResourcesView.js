import React from 'react'
import FontAwesome from 'react-fontawesome'
import Card from '../../../components/Card'
import './DebisResourcesView.scss'
import TPT from '../assets/HandsOnScience.jpg'
import Preview1 from '../assets/sample_preview.jpg';

// pure render component
export const DebisResourcesView = (props) => (
  <div className='debis-resources'>
    <div className='container'>
      <section>
      <div className='cards'>
        <Card
          image={Preview1}
          brand='google'
          url='/DebisResources/Handout_EEL_Week1_PDF.pdf'
          label='Handout 1' />

        <Card
          image={TPT}
          brand='google'
          url='https://www.teacherspayteachers.com/Store/The-Tutors-Assistant'
          label='The Tutor&#39;s Assistant' />
      </div>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Preview</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={Preview1} /></td>
              <td><a className='button' target='_blank' href='/DebisResources/Handout_EEL_Week1_PDF.pdf'>Download Handout 1</a></td>
            </tr>
            <tr>
              <td><img src={Preview1} /></td>
              <td><a className='button' target='_blank' href='/DebisResources/Handout_EEL_Week2_PDF.pdf'>Download Handout 2</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
)

export default DebisResourcesView
