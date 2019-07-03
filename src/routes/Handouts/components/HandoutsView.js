import React from 'react'
import FontAwesome from 'react-fontawesome'
import './HandoutsView.scss'
import Preview1 from '../assets/sample_preview.jpg';

// pure render component
export const HandoutsView = (props) => (
  <div className='handouts'>
    <div className='container'>
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
              <td><a className='button' target='_blank' href='/handouts/Handout_EEL_Week1_PDF.pdf'>Download Handout 1</a></td>
            </tr>
            <tr>
              <td><img src={Preview1} /></td>
              <td><a className='button' target='_blank' href='/handouts/Handout_EEL_Week2_PDF.pdf'>Download Handout 2</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
)

export default HandoutsView
