import React from 'react'
import wasim from './img/wasim.png'
import ryan from './img/ryan.png'
import rocio from './img/rocio.png'
import tojot from './img/tojot.jpg'
import { Icon } from '@iconify/react';
import './About.css'


export default function About () {
  return (
    <div id='about'>
        <h1 className='title'>Meet Our Team!</h1>
        <div className="members">
          <div className="member">
            <img width={400} alt='wasim' src={wasim}/>
            <div className="description">
                <h1>Wasim Soomro</h1>
                <h2>Software Developer</h2>
                <p>
                Hi! I'm a transitioning Air Force cyberspace operations officer with  intelligence community leadership and network operations, major incident management and cyber defense experience.
                </p>
                <div className="social-media">
                <a href="https://www.linkedin.com/in/wasimws/">
                <Icon icon="devicon:linkedin" />
                </a>
                <a href="https://github.com/WasimSoomro">
                <Icon icon="bi:github" />
                </a>
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} alt='ryan' src={ryan}/>
            <div className="description">
                <h1>Ryan Gosselin</h1>
                <h2>Software Developer</h2>
                <p>
                Well-rounded IT Leader with a demonstrated history of communications project management. Progressing towards mobile application development, with JAVA.
                </p>
                <div className="social-media">
                <a href="https://www.linkedin.com/in/ryan-gosselin2/">
                <Icon icon="devicon:linkedin" />
                </a>
                <a href="https://github.com/Gozz3230">
                <Icon icon="bi:github" />
                </a>
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} alt='rocio' src={rocio}/>
            <div className="description">
                <h1>Rocio Martinez</h1>
                <h2>Software Developer</h2>
                <p>
                From New Mexico, enjoys reading and hiking on her spare time.  Formerly worked as a biomedical technician in the military. Excited about the possibilities of working in tech now.
                </p>
                <div className="social-media">
                <a href="https://www.linkedin.com/in/rociocmartinez/">
                <Icon icon="devicon:linkedin" />
                </a>
                <a href="https://github.com/RocioCMartinez">
                <Icon icon="bi:github" />
                </a>
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} alt='tojot' src={tojot}/>
            <div className="description">
                <h1>ChristianRhey Tojot</h1>
                <h2>Software Developer</h2>
                <p>
                Hello! I am from Bothell, WA. I am currently enrolled in Code Fellows. I have previous experience in IT. The goal is to become a software developer and I'm looking to go into developing video games.
                </p>
                <div className="social-media">
                <a href="https://www.linkedin.com/in/christianrheytojot/">
                <Icon icon="devicon:linkedin" />
                </a>
                <a href="https://github.com/ctojot">
                <Icon icon="bi:github" />
                </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}