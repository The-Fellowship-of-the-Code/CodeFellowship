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
        <h1 className='title'>Meet Our Team</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={400} alt='wasim' src={wasim}/>
            <div className="description">
                <h1>Wasim Soomro</h1>
                <h2>Software Developer</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                <Icon icon="devicon:linkedin" />
                <Icon icon="bi:github" />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} alt='ryan' src={ryan}/>
            <div className="description">
                <h1>Ryan Gosselin</h1>
                <h2>Software Developer</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                <Icon icon="devicon:linkedin" />
                <Icon icon="bi:github" />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} alt='rocio' src={rocio}/>
            <div className="description">
                <h1>Rocio Martinez</h1>
                <h2>Software Developer</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                <Icon icon="devicon:linkedin" />
                <Icon icon="bi:github" />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={400} alt='tojot' src={tojot}/>
            <div className="description">
                <h1>ChristianRhey Tojot</h1>
                <h2>Software Developer</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                <Icon icon="devicon:linkedin" />
                <Icon icon="bi:github" />
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}