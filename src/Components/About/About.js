import React from 'react';

const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>A little about myself</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
            <p>
              I am a web developer
              </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better.
              </p>
          </div>
          <div className="title">
            <h3>What does she do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with HTML, CSS, and, Javascript, including
              popular frameworks like ReactJS.
            </p>
            <p>
              For the back-end I work with NodeJS, Express, MongoDB, etc.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;