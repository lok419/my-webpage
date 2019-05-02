import React, { Component } from 'react';
import '../styles/Projects.css';
import WOW from 'wowjs';
import project1_1 from '../images/project1_1.png';
import project1_2 from '../images/project1_2.png';
import project2_reward from '../images/project2_reward.jpg';
import project2_poster from '../images/project2_poster.png';
import openup_poster from '../images/openup_poster.png'
import ModalImage from './ModalImage';


class Projects extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <div className='heading-projects animated fadeIn wow'>
          <div className='jumbotron jumbotron-projects wow'></div>
          <div className='title-projects'>
            <h1>
              <div className='animated fadeInLeft-custom wow title1-projects'>Practice doesn&#39;t make Perfect</div>
              <div className='animated fadeInLeft-custom wow title2-projects'>It makes Progress</div>
            </h1>
          </div>
        </div>
        <div className='container container-projects'>
          <div className="row animated fadeIn wow">
            <h2>Projects</h2>
            <p>
              This section briefly introduces all projects and programs I have done so far and demonstrates my skills and passion
              as well. Some of source codes can be found on <a target="lok419" href='https://github.com/lok419'>my GitHub website</a>. Please feel free to visit it.
            </p>
          </div>

          <div className="row">
            <h2 style={{lineHeight: 1.5, marginTop:"20px", marginBottom:"20px", marginLeft:"20px", marginRight:"20px"}}>OpenUp</h2>
            <div className="col-md-12 animated fadeIn wow">
              <div className="image-openup_poster center-block">
                <img src={openup_poster} alt="openup_poster" />
              </div>
            <br />
            </div>
            <div className="col-md-12 animated fadeIn wow">
              <p>
                OpenUp strives to provide an accessible platform for youngsters experiencing emotional difficulties.
                It aims to provide a real-time emotional support to helpseekers from various messaging channels including FaceBook messenger,
                WeChat, SMS, Website.
                I was responsible for backend development including IM gateway (WeChat, FaceBook, SMS), Chat Server, API Server, Chatbot, User Authorization.<br /><br />
                For more inforamtion, pleaes visit <a target="openup" href='https://www.openup.hk/index.htm'>OpenUp</a>
              </p>
              <p>
                Contributions:
                <ul>
                  <li>Implemented HTTP gateway which supports WeChat, FaceBook and SMS</li>
                  <li>Implemented Oauth2.0 protocol for system authorization</li>
                  <li>Implemented API Server for frontend application</li>
                  <li>Enhanced chatbot for auto-replying and smart analysis of helpseeker crysis level</li>
                  <li>Daily user statistics</li>
                  <li>Daily and monthly database backup</li>
                  <li>Cooperated with Software Engineer and Counsellor from Jockey Club, Data Analyst from HKU, Frontend Developer</li>
                </ul>
              </p>

              <p>
                Keywords:
                <ul>
                  <li>Java (Vertx, OpenAPI, Websocket)</li>
                  <li>Microsoft Azure</li>
                  <li>MongoDB</li>
                  <li>Apache Kafka</li>
                  <li>Oauth 2.0</li>
                  <li>Google Firebase</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="row">
            <h2 style={{lineHeight: 1.5, marginTop:"20px", marginBottom:"20px", marginLeft:"20px", marginRight:"20px"}}>Generic User Profile</h2>
            <div className="col-md-12 animated fadeIn wow">
              <p>
                Generic User Profile (GUP) is a profile server which aims to manipulate million of daily user records for SmarTone (top tier telecom company in Hong Kong).
                It mainly contains three parts: update server, query server, GIMEI system.
                Update server enables to create, update and delete operations through SOAP request.
                Query server enables to query user records by LDAP protocol.
                GIMEI enables to real-time synchronize customer's IMEI infomation with the IMEI in GUP.
              </p>

              <p>
                Contributions:
                <ul>
                  <li>Implemented GIMEI system</li>
                  <li>Maintained 10 production servers</li>
                  <li>Enhanced searching profile with special character</li>
                  <li>Daily database backup</li>
                  <li>Daily and hourly statistics for query and update operations</li>
                  <li>Cooperated with Software Engineer in Information Services Division (SmarTone)</li>
                </ul>
              </p>

              <p>
                Keywords:
                <ul>
                  <li>Java (Netty, JSP)</li>
                  <li>Python</li>
                  <li>SOAP protocol, LDAP protocol</li>
                  <li>Apache Tomcat</li>
                  <li>MongoDB (Enterprise, Ops manager, BI connector)</li>
                  <li>MySQL</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="row">
            <h2 style={{lineHeight: 1.5, marginTop:"20px", marginBottom:"20px", marginLeft:"20px", marginRight:"20px"}}>An Investigation on Quantitative Techniques for Computational Finance</h2>
            <div className="col-md-8 animated fadeIn wow">
              <p>
                This project is my senior design project which relates to Computational Finance.
                This research attempted to implement a reinforcement learning framework
                and utilize Deterministic Policy Gradient algorithm to generate a portfolio selection vector,
                each number in the vector represents an exact percentage of total capital
                allocated to an individual stock in the portfolio during next trading
                interval. Different reward functions and models were implemented in this research,
                and the result was compared with different trading algorithms as benchmarks such that
                effectiveness of models could be evaluated.
              </p>
              <p>
                Keywords:
                <ul>
                  <li>Machine learning, Reinfocement Learning</li>
                  <li>Deterministic Policy Gradient</li>
                  <li>Convolution Neural Network</li>
                  <li>Python, Tensorflow, Keras</li>
                  <li>Portfolio Management</li>
                </ul>
              </p>
            </div>
            <div className="col-md-4 animated fadeIn wow" style={{marginBottom:"20px"}}>
              <ModalImage name="project2_poster" image={project2_poster} />
            </div>
            <div><hr></hr></div>
            <div className="col-md-8 animated fadeIn wow">
              <p>
                The poster briefly summarizes the features of this project and was rewarded one of the <b>best poster design
                in HKU Final Year Project Presentation Day 2018</b>.
              </p>
            </div>
            <div className="col-md-4 animated fadeIn wow">
              <div>
                <img className="center-block" style={{marginBottom:"2em"}} src={project2_reward} alt="project2_reward" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 animated fadeIn wow">
              <div className="image-project1_1 center-block">
                <img src={project1_1} alt="project1_1" />
              </div>
            </div>
            <div className="col-md-8 animated fadeIn wow">
              <h2>Smart farm with micro grid</h2>
              <p>
                This project aims to harvest energy by renewables and apply power electronics to stabilize and manipulate harvested
                renewable energy to power pump loads while also explores the possibility of feeding back energy to grid and
                interconnecting microgrid together as smart grid in the future. Our team aims to build a model that
                implements small scale hydroelectric generator, wind turbine and PV panels as power sources to supply
                energy for control circuits and mechanical loads. The systems will conduct self-modification
                to optimize the performance under different level of power input and various load conditions.
                Through mobile user interface, users can track power throughput, energy records and load conditions
                with Wi-Fi connections. <br /><br />
                This project was rewarded as <b>Champion of Integrated Design Project</b> out of 40 teams
              </p>
            </div>
            <div><hr></hr></div>
            <div className="col-md-8 animated fadeIn wow">
              <h2>Internet of things (IoT)</h2>
              <p>
                The overall system implements the concept of Internet of Things (IoT) which consists of a group
                of sensors connected to internet. Such that all data can be centralized on the cloud server for
                further application. <br />
                The arduino sends the sensor data to cloud server (dweet.io) by a HTTP request, these data is then
                visualized by a web application called Freeboard and retrieved for local storage.
              </p>
            </div>
            <div style={{marginBottom:"2em"}} className="col-md-4 animated fadeIn wow">
              <div className="image-project1_2 center-block">
                <img src={project1_2} alt="project1_2" />
              </div>
            </div>
            <div><hr></hr></div>
            <div className="col-md-12 animated fadeIn wow">
              <h2 style={{textAlign: 'center'}}>Demostration Video</h2>
              <iframe className='center-block responsive' style={{marginBottom:"2em"}} src="https://www.youtube.com/embed/RjFxPih5qoA"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen title="project1_demo"></iframe>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
