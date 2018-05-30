import React, { Component } from 'react';
import '../styles/PersonalStatement.css';
import WOW from 'wowjs';
import image_personal from '../images/personal.jpg';
import image_programming from '../images/programming.jpg';
import image_hobbies from '../images/hobbies.png';

class PersonalStatement extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <div class='jumbotron jumbotron-personal animated fadeIn wow'>
          <h1>
            <div class='animated fadeInLeft-custom wow title1'>HELLO WORLD</div>
            <div class="animated fadeInLeft-custom wow title2">I&#39;M JACK</div>
          </h1>
        </div>
        <div class='container container-personal'>
          <div class="row">
            <div class="col-md-4 animated fadeIn wow">
              <div class="image-personal center-block">
                <img class="responsive" src={image_personal}  alt='personal_image'/>
              </div>
            </div>
            <div class="col-md-8 animated fadeIn wow">
              <h2>About me</h2>
              <p>
                I&#39;m Cheung Chun Lok, or I prefer you calling me Jack.
                I was graduated from The University of Hong Kong with a major of
                Electrical Engineering. You may wonder why I became a Programmer now instead of
                an Electrical Engineer. <br />
                "Am I bad in Electrical Engineering ?" No. I&#39;m really good at
                Electrical Engineering, was almost the top one in Department.
                I like everything related to computer, that&#39; why I chose to start my career in IT sector.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 animated fadeIn wow">
              <h2>Experiences</h2>
              <p>
                I have prior experience in C++, Java and Python.
                When I was HKU undergraduate, I joined an Internship Programm held by Cyberport and worked as a programmer in Shanghai,
                this was my first coding experience. Initially, it was quite painful to settle in the job for a completely beginner like me.
                But I found it was such an interesting job later. After I finished the internship, I got many chances to handle some school projects related to
                programming in which I gained more understanding about computer science especially for algorithm and data structure. Besides, in my final
                year, I built a machine learning application by Python and Tensorflow as my senior design project which took me 8 months to complete. <br />
                And now ......
              </p>
            </div>
            <div class="col-md-4 animated fadeIn wow">
              <div class="image-programming center-block">
                <img class="responsive" src={image_programming}  alt='image_programming'/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 animated fadeIn wow">
              <div class="image-hobbies center-block">
                <img class="responsive" src={image_hobbies}  alt='image_hobbies'/>
              </div>
            </div>
            <div class="col-md-8 animated fadeIn wow">
              <h2>Hobbies and Interests</h2>
              <p>
                I like gaming, no matter which types, like FPS, TPS, RPG or Sport. Among all of them,
                "Counter-Strike", a multiplayer shooter, is my favourite one,
                not only of because of its gameplay, but also its customizability. It allows you to customize
                your own map or mod to improve the playability. That&#39;s my favourite part of gaming - build your own world. <br />
                Besides, I love Japanese culture, that&#39;s why I decided to join a semester exchange in Japan where I made many
                international friends and experienced a wonderful life. Now, I&#39;m still learning Japanese by reading raw manga. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalStatement;
