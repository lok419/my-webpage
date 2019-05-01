import React, { Component } from 'react';
import {OverlayTrigger, Popover} from 'react-bootstrap';
import '../styles/Main.css';
import WOW from 'wowjs';

const popoverHoverFocus_ee = (
  <Popover id="popover-trigger-hover-focus">
    I have a really strong academic background in Electrical Engineering, was the top stduent graduated from the department.
  </Popover>
);

const popoverHoverFocus_c = (
  <Popover id="popover-trigger-hover-focus">
    Prior experience in Arduino Programming in C++
  </Popover>
);

const popoverHoverFocus_java = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in implementnig backend application
  </Popover>
);

const popoverHoverFocus_python = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in implementnig backend and machine learning application
  </Popover>
);

const popoverHoverFocus_htmlcss = (
  <Popover id="popover-trigger-hover-focus">
    Prior experience in designing login page, profile page and ...... this webpage
  </Popover>
);

const popoverHoverFocus_javascript = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in implementing an API-server and ....... this webpage
  </Popover>
);

const popoverHoverFocus_php = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in implementing an API-server for telecom application
  </Popover>
);

const popoverHoverFocus_matlab = (
  <Popover id="popover-trigger-hover-focus">
    Prior experience for solving the engineering problems and implementing finanical application
  </Popover>
);

const popoverHoverFocus_ml = (
  <Popover id="popover-trigger-hover-focus">
    Experience in using tensorflow to build a machine learning model for finanical application
  </Popover>
);

const popoverHoverFocus_mongodb = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in applying, deploying and maintaing MongoDB in production server (Community and Enterprise)
  </Popover>
);

const popoverHoverFocus_sql = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in applying, deploying and maintaing MySQL in production server
  </Popover>
);

const popoverHoverFocus_linuxshell = (
  <Popover id="popover-trigger-hover-focus">
    Practical experience in applying shell script for server maintenance. For example, log rotate, log monitor, database backup, process monitor, system resource monitor......
  </Popover>
);

class Main extends Component {

  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div className='container container-main'>

        <div className="row">
          <div className="col-md-8 animated fadeIn wow">
            <div className="panel panel-primary panel-about-me">
              <div className="panel-heading"><span className="glyphicon">&#xe008;</span> About Me</div>
              <div className="panel-body">
                <p>
                  I am a graduate at the University of Hong Kong with a major in electrical engineering. A highly
                  motivated and hardworking individual, who recently seeking for valuable opportunity for long term career
                  development in IT industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4  animated fadeIn wow">
            <div className="panel panel-success panel-contact">
              <div className="panel-heading"><span className="glyphicon">&#xe182;</span> Contact</div>
              <div className="panel-body">
                <p><span className="align-left"><span className="glyphicon">&#x2709;</span> Email:</span> <span className="align-right">cheungchunlok419@gmail.com</span></p>
                <p><span className="align-left"><span className="glyphicon">&#xe183;</span> Phone:</span> <span className="align-right">852-68409090</span></p>
                <p>
                  <span className="align-left"><span className="glyphicon">&#xe021;</span> Address:</span> <span className="align-right">Flat F, 3/F, Block 3</span><br />
                  <span className="align-right">Carado Garden, Taiwai</span><br />
                  <span className="align-right">Hong Kong, China</span>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="row animated">
          <div className="col-md-8 animated fadeIn wow">
            <div className="panel panel-primary panel-education">
              <div className="panel-heading"><span className="glyphicon">&#xe233;</span> Education</div>
              <div className="panel-body">
                <div>
                  <span className="align-left">The University of Hong Kong, Hong Kong</span>
                  <span className="align-right">September 2014 – June 2018</span>
                </div>
                <div>
                  <span className="align-left">BENG in Electrical Engineering (First Class Honours)</span>
                </div>
                <div className="progress progress-hku-gpa center-block">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    CGPA: 3.80 out of 4.3
                  </div>
                </div>
                <div>
                  Scholarships
                  <ul>
                    <li>Hongkong Electric Electrical Energy Scholarships for 2015-2016</li>
                    <li>Hongkong Electric Electrical Energy Scholarships for 2016-2017</li>
                    <li>Philip K H Wong Foundation Scholarships for Student Enrichment for 2016-2017</li>
                    <li>Simatelex Charitable Foundation Scholarships for 2017-2018</li>
                  </ul>
                  Awards
                  <ul>
                      <li>Summer internship through Cyberport Digital Tech Internship Programme 2016: Shanghai stream</li>
                      <li>Outstanding Performance in modules Microcontroller and Virtual Instrumentation</li>
                      <li>Champion of Integrated Design Project - "Smart Farm with Micro Grid"</li>
                      <li>2015-2016 Dean&#39;s Honours List</li>
                      <li>2016-2017 Dean&#39;s Honours List</li>
                      <li>2017-2018 Dean&#39;s Honours List</li>
                  </ul>
                </div>
                <hr></hr>
                <div>
                  <span className="align-left">Semester Abroad in Kyoto University, Japan</span>
                  <span className="align-right">April 2017 – September 2017</span>
                </div>
                <div>Kyoto University International Education Program</div>
                <div className="progress progress-kyoto-gpa center-block">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    SGPA: 3.9 out of 4.3
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Gained fluency in Japanese, equivalent to JLPT N3 level judged by Education Center for Japanese
                    Language and Culture in Kyoto University</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 animated fadeIn wow">
            <div className="panel panel-success panel-skills">
              <div className="panel-heading"><span className="glyphicon">&#xe006;</span> Skills</div>
              <div className="panel-body">

                <div>
                  Electrical Engineering
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_ee}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                  <div className="progress progress-ee">
                    <div className="progress-bar progress-bar-striped active" role="progressbar"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>

                <div>
                  C++, C
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_c}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-c">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Java / Kotlin
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_java}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-java">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Python
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_python}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-python">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  HTML/CSS
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_htmlcss}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-htmlcss">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Javascript
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_javascript}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-javascript">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  PHP
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_php}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-php">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Matlab
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_matlab}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-matlab">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Machine Learning
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_ml}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-ml">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Database (MongoDB)
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_mongodb}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-mongodb">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Database (SQL language)
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_sql}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-sql">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

                <div>
                  Linux shell scripting
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus_linuxshell}>
                  <span className="glyphicon align-right">&#xe085;</span>
                  </OverlayTrigger>
                </ div>
                <div className="progress progress-linuxshell">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 animated fadeIn wow">
            <div className="panel panel-primary panel-working-experience">
              <div className="panel-heading"><span className="glyphicon">&#xe139;</span> Working Experience</div>
              <div className="panel-body">
              <div>
                <span className="align-left">Zensis Limited</span>
                <span className="align-right">China, Hong Kong</span>
              </div>
              <div>
                <span className="align-left">Backend Developer</span>
                <span className="align-right">June 2018 – "Present"</span>
              </div>
              <div>
                <ul>
                  <li>
                    OpenUp (online text platform for emotional support)
                    <ul>
                      <li>Implemented real-time chat system which supports WeChat, FaceBook and SMS</li>
                      <li>Implemented Oauth2.0 protocol for system authorization</li>
                      <li>Enhanced chatbot for replying and analysing helpseeker automatically</li>
                      <li>Cooperated with Frontend Developer and Counsellor</li>
                    </ul>
                  </li>
                  <br/>
                  <li>
                    Generic User Profile (user profile server)
                    <ul>
                      <li>Implemented hourly and daily report for update and query operations</li>
                      <li>Enhanced searching profile with special character</li>
                      <li>Implemented real-time IMEI update system which synchronizes customer's IMEI info with the IMEI value in GUP</li>
                      <li>Copperated with Software Engineer in Information Services Division (SmarTone)</li>
                    </ul>
                  </li>
                  <br/>
                  <li>
                    HTTPSMS (SMS job through HTTPS)
                    <ul>
                      <li>Implemented SMPP client to submit sms message to SMSC</li>
                      <li>Enhanced performance (tps) by 30% comparing to legacy system</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr></hr>
                <div>
                  <span className="align-left">SIM Technology Group</span>
                  <span className="align-right">China, Shanghai</span>
                </div>
                <div>
                  <span className="align-left">Programmer</span>
                  <span className="align-right">June 2016 – August 2016</span>
                </div>
                <div>
                  <ul>
                    <li>Developed an Android software application by Java</li>
                    <li>Designed a user interface for a mobile system according to a specification from SoftBank</li>
                    <li>Translated document from Japanese into English and Simplified Chinese</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 animated fadeIn wow">
            <div className="panel panel-success panel-language">
              <div className="panel-heading"><span className="glyphicon">&#x270f;</span> Language</div>
              <div className="panel-body panel-skills">

                <div>
                  Cantonese
                </ div>
                <div className="progress progress-cantonese">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  Fluent
                  </div>
                </div>

                <div>
                  Mandarin
                </ div>
                <div className="progress progress-mandarin">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  Intermediate
                  </div>
                </div>

                <div>
                  English
                </ div>
                <div className="progress progress-english">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  Advanced
                  </div>
                </div>

                <div>
                  Japanese
                </ div>
                <div className="progress progress-japanese">
                  <div className="progress-bar progress-bar-striped active" role="progressbar"
                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                  Basic
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
