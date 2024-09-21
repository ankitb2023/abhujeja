import React from 'react'
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
              <i className="fab fa-react"></i> <span>ReactJS</span>
              <span>92%</span>
            </div>
            <div className="line reactjs"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-node"></i> <span>Node.js</span>
              <span>81%</span>
            </div>
            <div className="line node"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fas fa-layer-group"></i> <span>BlockChain (Solidity)</span>
              <span>82%</span>
            </div>
            <div className="line blockchain"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-html5"></i> <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="line html"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-css3-alt"></i> <span>CSS</span>
              <span>89%</span>
            </div>
            <div className="line css"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-js-square"></i> <span>Javascript</span>
              <span>87%</span>
            </div>
            <div className="line javascript"></div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col">
          <div className="bar">
            <div className="info">
              <i className="fab fa-java"></i> <span>Core Java</span>
              <span>91%</span>
            </div>
            <div className="line java"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-codiepie"></i> <span>C++</span>
              <span>84%</span>
            </div>
            <div className="line Cpp"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-contao"></i> <span>C#</span>
              <span>89%</span>
            </div>
            <div className="line clanguage"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fas fa-database"></i> <span>SQL</span>
              <span>90%</span>
            </div>
            <div className="line sql"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fas fa-code-branch"></i> <span>Git & GitHub | VCS</span>
              <span>84%</span>
            </div>
            <div className="line vcs"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fab fa-cloudflare"></i> <span>Google Cloud Platform</span>
              <span>78%</span>
            </div>
            <div className="line gcp"></div>
          </div>

          <div className="bar">
            <div className="info">
              <i className="fas fa-server"></i> <span>Firebase</span>
              <span>84%</span>
            </div>
            <div className="line firebase"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
