import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';

import './index.css';

function Project(props) {
  return (
    <div className='row margin-bottom-30'>
      <div className='col'></div>
      <div className='col-lg-3 col-sm-12'>
        <Fade left>
          <div className='project-wrapper__text'>
            <h3 className='project-wrapper-text-title'>{props.title}</h3>
            <div>
              <p className='mb-4 project-text'>{props.description}</p>
              <p className='p-text-left'>
                {props.viewWebsite && (
                  <a
                    href={props.viewWebsite}
                    target='_blank'
                    className='cta-btn--website'
                  >
                    View Website
                  </a>
                )}
                <a
                  href={props.srcCode}
                  target='_blank'
                  className='cta-btn--website'
                >
                  Source Code
                </a>
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className='col-lg-8 col-sm-12'>
        <Fade right>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner gif-wrapper'>
              <img src={props.gif} className='project-gif' />
            </div>
          </Tilt>
        </Fade>
      </div>
    </div>
  );
}

export default Project;
