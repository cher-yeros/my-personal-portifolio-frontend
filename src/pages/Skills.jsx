import React, { useEffect } from "react";

import { Waypoint } from "react-waypoint";

function Skills() {
  useEffect(() => {
    let skilsContent = select(".skills-content");

    new Waypoint({
      element: skilsContent,
      offset: "80%",

      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);

        console.log(progress);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });

    // var waypoint = new Waypoint({
    //   element: document.getElementById("skills-content"),
    //   handler: function (direction) {
    //     alert("You have scrolled to a thing");
    //   },
    // });
  }, []);

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 100 },
    { name: "React", value: 100 },
    { name: "Material UI", value: 100 },
    { name: "Bootstrap", value: 100 },
    { name: "Node", value: 100 },
    { name: "Express", value: 100 },
    { name: "MySql", value: 100 },
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        /> */}

        <div className="row skills-content" id="skills-content">
          {skills.map((skill) => (
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">
                  {skill.name} <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-6">
            {" "}
            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                WordPress/CMS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Photoshop <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
