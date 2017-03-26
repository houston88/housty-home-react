import React from 'react'
import FontAwesome from 'react-fontawesome'
import './ResumeView.scss'

// pure render component
export const ResumeView = (props) => (
  <div className='resume'>
    <div className='container'>
      <div className='card'>
        <section className='top-panel'>
          <div className='name'>
            <div className='name-container'>
              <h2>Houston C Harris</h2>
            </div>
          </div>
          <div className='contact'>
            <div className='border-panel'>
              <a href='tel:2144763629'>
                <FontAwesome name='phone' />
                <span> (214)476-3629</span>
              </a>
              <a href='mailto:houstyharris@gmail.com'>
                <FontAwesome name='envelope' />
                <span> houstyharris@gmail.com</span>
              </a>
              <a href='https://www.linkedin.com/in/houstonharris/'>
                <FontAwesome name='linkedin' />
                <span> https://www.linkedin.com/in/houstonharris/</span>
              </a>
              <a href='http://housty.io'>
                <FontAwesome name='bookmark' />
                <span> http://housty.io</span>
              </a>
              <span>
                  <FontAwesome name='map-pin' />
                  <span> Plano, TX</span>
              </span>
            </div>
          </div>
        </section>
        <section className='qualifications'>
          <h3>Qualifications</h3>
          <span>Highly skilled software engineer with a proven ability to deliver
          solid solutions on time. Specialties include web applications, user
          interfaces and geospatial software development.</span>
        </section>
        <section className='skills'>
          <h3>Skills</h3>
          <div className='resume-data-table'><label>GENERAL </label><span>Software Developer, Team Management, Software Architect</span></div>
          <div className='resume-data-table'><label>LANGUAGES </label><span>JavaScript, Java, Groovy, Python, KML, CSS, XML, C/C++</span></div>
          <div className='resume-data-table'><label>FRAMEWORKS </label><span>React, AngularJs, jQuery, Grails, JEE, Spring, Hibernate, JDBC, Struts, JSP, SOA, Solr, Swing, Dojo</span></div>
          <div className='resume-data-table'><label>MIDDLEWARE </label><span>Node, Tomcat, Apache, Weblogic, JBoss</span></div>
          <div className='resume-data-table'><label>DATABASES </label><span>Cassandra, MongoDB, Oracle, PostgreSQL, MySQL, Lucene</span></div>
        </section>

        <section>
          <div className='experience'>
            <h3>Experience</h3>
            <div>
              <span><b>Intuit</b>, ProConnect Group </span>
              <u>2013 - Present</u>
            </div>
            <div> 
              <span><b>Raytheon Company</b>, IIS </span>
              <u>2000 - 2013</u>
            </div>
          </div>
        </section>

        <section>
          <label>2013 - Present : Intuit Link Project</label>
          <ul>
            <li>Full stack development utilizing JavaScript, HTML, CSS, Java</li>
            <li>React, Angular, Highcharts, d3, Node.js, Webpack, Grunt, Gulp, Npm, Bower</li>
            <li>Java Spring RESTful web services</li>
            <li>Cassandra data layer</li>
          </ul>
        </section>

        <div className='experienceTable'></div>
        <div className='education'></div>
        <div className='misc'></div>
      </div>

    </div>
  </div>
)

export default ResumeView
