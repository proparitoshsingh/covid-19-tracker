import React from 'react';
import './About.css';
import covidpic from './images/covid.jpg';
import joseph from './images/joseph.jpg';
import madhur from './images/madhur.jpg';
import paritosh from './images/paritosh.jpg';
import rand1 from './images/rand1.jpg';
import rand2 from './images/rand2.jpeg';
import vitb from './images/vitb.jpg';


function About() {
  return(
    <div>
    <div className="cuntainer">
        <img className="covid-pic" src={covidpic} alt="" />
        <div className="inner-cuntainer first">
            <div>
                <h2 class="uh2">WHAT IS COVID-19?</h2>
                <p class="up"><em>Coronavirus disease 2019 (COVID-19)</em> is a contagious disease caused by a virus,
                    the
                    severe acute
                    respiratory
                    syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China, in
                    December
                    2019. The disease has since spread worldwide, leading to the ongoing COVID-19 pandemic.</p>
                <a href="https://en.wikipedia.org/wiki/COVID-19" target="">Read more</a>
            </div>
        </div>
    </div>
    <div className="cuntainer">
        <img className="vitb-pic" src={vitb} alt="" />
        <div className="inner-cuntainer second">
            <div>
                <h2 class="uh2">WHO ARE WE?</h2>
                <p class="up">We are a small team of five undergraduate students. All five of us are pursuing our B.
                    Tech
                    degree in
                    Computer Science and Engineering at the renowned institute, Vellore Institute of Technology,
                    Bhopal.
                    Other than our homework sheets, we also share a common goal of becoming great engineers; filled
                    with
                    pride and determination while working hard to make the world a better place.</p>
            </div>
            <div className="pic-cuntainer">
                <div className="row1">
                    <img className="prof-pic" src={paritosh} alt="" />
                    <img className="prof-pic" src={joseph} alt="" />
                </div>
                <div className="row1 center">
                    <img className="prof-pic" src={madhur} alt="" />
                </div>
                <div className="row1">
                    <img className="prof-pic" src={rand1} alt="" />
                    <img className="prof-pic" src={rand2} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="cuntainer">
        <div className="inner-cuntainer third">
            <div>
                <h2 class="uh2">OUR PURPOSE</h2>
                <p className="pp">After browsing through our entire website, it is not very unconventional for a
                    question
                    like this to come across the viewer's mind. Why? Out of millions of website ideas on the
                    internet,
                    why did we choose to make a COVID-19 tracker? Perhaps we could've made the world's billionth
                    task
                    manager. Well, the reason behind that was quite simple. It is to spread awareness and knowledge
                    amongst the people.</p>
                <p className="pp"> Our website allows any user to find the number of covid cases in their country,
                    making
                    them aware of the situation in this pandemic and consider their decisions more carefully. Our site
                    not only just provides a picture of the how big the problem is but also provides a solution. We have
                    a page where you can find vaccination centers in any area located in India. So you can get your
                    vaccine from wherever you are and be safe from the virus.</p>
            </div>
        </div>
    </div>
  </div>

  )

}


export default About;