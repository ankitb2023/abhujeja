import React from 'react';
import '../styles/Education.css';
export const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>
      <p className="quote">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>
      <div className="box-container">
        {/* College Education */}
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src="./images/educat/college.jpg"
              alt="College"
            />
          </div>
          <div className="content">
            <h3>Bachelor of Technology in Electronics and Communication</h3>
            <p>
              Deenbandhu Chhotu Ram University of Science and Technology |
              DCRUST
            </p>
            <h4>
              2019 - 2023 | Pursuing | <span>CGPA: 8.62</span>
            </h4>
          </div>
        </div>

        {/* School Education */}
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src="./images/educat/school.jpg"
              alt="School"
            />
          </div>
          <div className="content">
            <h3>Senior Secondary Education | Science</h3>
            <p>Govt. Sr. Sec. School, Hansi | HBSE</p>
            <h4>
              2016-2018 | Completed | <span>88.2%</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
