import React from 'react';
import MyImg from './myImg.jpg';
import './index.css';

function About() {
  return (
    <div id='about' className='about-wrapper'>
      <div className='container'>
        <h2 className='about-section-title'>About Me</h2>
        <div className='row'>
          <div className='col-12 col-md-7 about-text'>
            <p>
              Hi, my name is Adi Cang, and I'm full-stack end to end JavaScript
              developer.
            </p>
            <p>
              I have a BSc in Information Systems and specialize mainly in React
              and Node.js. I have industry experience following product &
              project management, support and QA roles. I love learning
              something new every day and feel joy from being a significant part
              of a team who develops a product :)
            </p>

            <a
              target='_blang'
              className='cta-btn cta-btn--resume'
              href='https://drive.google.com/file/d/1-3Q4DLSRC2jq-3USLAJMs5gboa-oAfLd/view?usp=sharing'
            >
              View Resume
            </a>
          </div>
          <div className='col-12 col-md-5'>
            <img
              className='my-img img-fluid rounded shadow-lg'
              src={MyImg}
              alt='Profile Picture'
              width='300'
            />
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='white' points='0,100 100,0 100,100' />
      </svg>
    </div>
  );
}

export default About;
