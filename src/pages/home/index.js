import React, { useState } from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introdata, meta, skills, worktimeline } from '../../content_option';
import { Link } from 'react-router-dom';
import Three from './three';

export const Home = () => {
  const [showAI, setShowAI] = useState(false);

  return (
    <HelmetProvider>
      <section id='home' className='home'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='intro_sec d-block d-lg-flex align-items-center '>
          <div className='threeJS h_bg-image order-1 order-lg-2 h-100'>
            <Three />
          </div>
          <div className='text order-2 order-lg-1 h-100 d-lg-flex justify-content-center'>
            <div className='align-self-center '>
              <div className='intro mx-auto'>
                <h2 className='mb-1x'>{introdata.title}</h2>
                <h1 className='fluidz-48 mb-1x'>
                  <Typewriter
                    options={{
                      strings: Object.values(introdata.animated),
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className='mb-1x'>{introdata.description}</p>
                <div className='intro_btn-action pb-5 d-flex flex-wrap gap-2'>
                  <Link to='/about' className='text_2'>
                    <div id='button_p' className='ac_btn btn '>
                      About Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/portfolio'>
                    <div id='button_h' className='ac_btn btn'>
                      Projects
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='files/CurriculumVitae.pdf' target='_blank'>
                    <div id='button_h' className='ac_btn btn'>
                      Get My CV
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <button
                    id='button_ai'
                    className='ac_btn btn'
                    onClick={() => setShowAI(true)}
                  >
                    AI
                    <div className='ring one'></div>
                    <div className='ring two'></div>
                    <div className='ring three'></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showAI && (
          <div className='ai-overlay' onClick={() => setShowAI(false)}>
            <div className='ai-modal' onClick={(e) => e.stopPropagation()}>
              <button className='ai-close' onClick={() => setShowAI(false)}>
                &times;
              </button>
              <h2>AI Context — Nguyễn Tuấn Duy</h2>
              <p className='ai-sub'>
                Structured profile for AI agents and LLM crawlers. Also available at{' '}
                <a href='/AGENT.md' target='_blank' rel='noreferrer'>
                  /AGENT.md
                </a>
              </p>

              <section>
                <h3>Summary</h3>
                <p>{introdata.description}</p>
              </section>

              <section>
                <h3>Core Skills</h3>
                <div className='ai-tags'>
                  {Object.values(skills)
                    .flat()
                    .map((s) => (
                      <span key={s} className='ai-tag'>
                        {s}
                      </span>
                    ))}
                </div>
              </section>

              <section>
                <h3>Experience</h3>
                <ul className='ai-timeline'>
                  {worktimeline.slice(0, 4).map((w, i) => (
                    <li key={i}>
                      <strong>{w.jobtitle}</strong> — {w.where}{' '}
                      <span className='ai-date'>({w.date})</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>Contact</h3>
                <p>
                  Email: johnluy1999@gmail.com &middot; Phone: (+84) 834120699
                  <br />
                  GitHub: github.com/sylitas &middot; LinkedIn:{' '}
                  linkedin.com/in/nguyễn-tuấn-duy
                </p>
              </section>
            </div>
          </div>
        )}
      </section>
    </HelmetProvider>
  );
};
