import React, { Component } from 'react';
import '../styles/PersonalStatement.css';
import WOW from 'wowjs';
import image_personal from '../images/personal.jpg';
import image_programming from '../images/programming.jpg';

class PersonalStatement extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <div className='jumbotron jumbotron-personal animated fadeIn wow'>
          <h1>
            <div className='animated fadeInLeft-custom wow title1'>HELLO WORLD</div>
            <div className="animated fadeInLeft-custom wow title2">I&#39;M JACK</div>
          </h1>
        </div>
        <div className='container container-personal'>
          <div className="row">
            <div className="col-md-4 animated fadeIn wow">
              <div className="image-personal center-block">
                <img className="responsive" src={image_personal}  alt='personal_image'/>
              </div>
            </div>
            <div className="col-md-8 animated fadeIn wow">
              <h2>About me</h2>
              <p>
                I&#39;m Cheung Chun Lok, or I prefer you calling me Jack.
                I was graduated from The University of Hong Kong with a major of
                Electrical Engineering. You may wonder why I became a Programmer now instead of
                an Electrical Engineer. <br />
                "Am I bad in Electrical Engineering ?" No. I&#39;m really good at
                Electrical Engineering, was almost the top one in Department.
                I like everything related to computer, that&#39;s why I chose to start my career in IT sector.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 animated fadeIn wow">
              <h2>Experiences</h2>
              <p>
                When I was HKU undergraduate, I joined an Internship Programm held by Cyberport and worked as a programmer in Shanghai,
                this was my first programming experience. Initially, it was quite painful to settle in the job for a completely beginner like me.
                But I found it was such an interesting job later. After I finished the internship, I got many chances to handle school projects related to
                programming in which I gained more understanding about computer science especially algorithm and data structure. Besides, in my final
                year, I built a machine learning application by Python and Tensorflow as my senior design project which took me 8 months to complete. <br />

                And now, I am working as a full-time programmer in an IT-vendor, I gained even more practical experiences in handling large projects, more chances
                cooperating with professional developer or frontend developer, opportunity to work on system design rather than just coding and coding.
                These experiences definitely help me to further explore my career.
              </p>
            </div>
            <div className="col-md-4 animated fadeIn wow">
              <div className="image-programming center-block">
                <img className="responsive" src={image_programming}  alt='image_programming'/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animated fadeIn wow">
              <h2>Why me?</h2>
              <p>
                I have prior experiences in many programming languages, but the main reason that I think I outperforms othres is my fast learning
                ability. As a programmer, I am willing to accept new technology, attempt new framework or languages rather than stay with
                traditional technology without learning any new things. I can always integrated new technology to existing service in a
                fast manner. <br />

                For example, after studying the advantage of docker, I proposed to deploy all python application of a project in docker to avoid
                dependency problem (different python version among servers). I started reading docker's documentation, tried with "hello-world" exmaple,
                and attempted to encapsulate the application with docker. Although it took time, finally we could just deliever the image to servers and
                deploy it without any dependency concerns.  <br />

                Having 1 year working experience, I think I have already been compatible with any of the programmer with computer-science background.
                It proofs that I have really strong learning ability.<br />

                Although 4-years of studying in electrical engineering seems to be a waste, I developed a set of particlar skills including
                mathematics or engineering, I believe my achievement in electrical engineering proofs that I am a special one.

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalStatement;
