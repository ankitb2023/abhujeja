import React from 'react';
import '../styles/Skill.css';
export const Skill = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <div className="bar">
              <div className="info">
                <i className="fab fa-java"></i> <span>Core Java</span>
                <span></span>
              </div>
              <div className="line java"></div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fab fa-free-code-camp"></i>{' '}
                <span>Data Structures and Algorithms</span>
                <span></span>
              </div>
              <div className="line reactjs"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fab fa-react"></i> <span>ReactJS</span>
                <span></span>
              </div>
              <div className="line node"></div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fab fa-reacteurope"></i> <span>Redux</span>
                <span></span>
              </div>
              <div className="line node"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fab fa-js-square"></i> <span>Javascript</span>
                <span></span>
              </div>
              <div className="line blockchain"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fas fa-database"></i> <span>Elasticsearch</span>
                <span></span>
              </div>
              <div className="line blockchain"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fas fa-memory"></i> <span>Redis</span>
                <span></span>
              </div>
              <div className="line java"></div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fas fa-laptop-code"></i> <span>SQL</span>
                <span></span>
              </div>
              <div className="line java"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fab fa-html5"></i> <span>HTML</span>
                <span></span>
              </div>
              <div className="line html"></div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col">
            <div className="bar">
              <div className="info">
                <i className="fab fa-codiepie"></i> <span>C#</span>
                <span></span>
              </div>
              <div className="line java"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fas fa-code"></i>{' '}
                <span>Object Oriented Programming</span>
                <span></span>
              </div>
              <div className="line Cpp"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fab fa-java"></i> <span>Spring Boot</span>
                <span></span>
              </div>
              <div className="line clanguage"></div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fas fa-link"></i>{' '}
                <span>RESTful API Development</span>
                <span></span>
              </div>
              <div className="line clanguage"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fab fa-node-js"></i> <span>TypeScript</span>
                <span></span>
              </div>
              <div className="line sql"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fas fa-chart-pie"></i> <span>Kibana</span>
                <span></span>
              </div>
              <div className="line vcs"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fab fa-connectdevelop"></i> <span>WebSocket</span>
                <span></span>
              </div>
              <div className="line gcp"></div>
            </div>

            <div className="bar">
              <div className="info">
                <i className="fas fa-server"></i> <span>DBMS</span>
                <span></span>
              </div>
              <div className="line firebase"></div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fab fa-css3-alt"></i> <span>CSS</span>
                <span></span>
              </div>
              <div className="line css"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
