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

  // const skills = [
  //   { name: "HTML", value: 100 },
  //   { name: "CSS", value: 100 },
  //   { name: "React", value: 100 },
  //   { name: "Material UI", value: 100 },
  //   { name: "Bootstrap", value: 100 },
  //   { name: "Node", value: 100 },
  //   { name: "Express", value: 100 },
  //   { name: "MySql", value: 100 },
  // ];

  const skills = [
    {
      name: "Front-End Development",
      examples: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Apollo Graphql",
      ],
    },
    {
      name: "Back-End Development",
      examples: [
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "Restful API",
        "Graphql",
      ],
    },
    // {
    //   name: "Data Science",
    //   examples: [
    //     "Python",
    //     "R",
    //     "SQL",
    //     "Machine Learning",
    //     "Natural Language Processing",
    //   ],
    // },
    // {
    //   name: "Cybersecurity",
    //   examples: [
    //     "C",
    //     "C++",
    //     "Java",
    //     "Python",
    //     "Network Security",
    //     "Penetration Testing",
    //   ],
    // },
    // {
    //   name: "Game Development",
    //   examples: ["C++", "Java", "Unity", "Unreal Engine"],
    // },
    {
      name: "Mobile Development",
      examples: ["React Native", "Flutter", "Android"],
    },
    // {
    //   name: "Web Development",
    //   examples: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    // },
    // {
    //   name: "Databases",
    //   examples: ["MongoDB", "MySQL", "PostgreSQL", "Oracle", "SQL Server"],
    // },
    // {
    //   name: "Cloud Computing",
    //   examples: ["AWS", "Azure", "GCP"],
    // },
    // {
    //   name: "DevOps",
    //   examples: ["Ansible", "Chef", "Puppet", "Terraform", "Jenkins"],
    // },
    // {
    //   name: "Machine Learning",
    //   examples: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-Learn"],
    // },
    // {
    //   name: "Artificial Intelligence",
    //   examples: ["Python", "R", "TensorFlow", "PyTorch", "OpenAI"],
    // },
    // {
    //   name: "Big Data",
    //   examples: ["Hadoop", "Spark", "Hive", "Pig", "HBase"],
    // },
    // {
    //   name: "Blockchain",
    //   examples: [
    //     "Solidity",
    //     "Python",
    //     "JavaScript",
    //     "Ethereum",
    //     "Hyperledger Fabric",
    //   ],
    // },
    // {
    //   name: "Cryptography",
    //   examples: ["C", "C++", "Java", "Python", "RSA", "AES"],
    // },
    // {
    //   name: "Operating Systems",
    //   examples: ["Linux", "Windows", "macOS", "FreeBSD", "Solaris"],
    // },
    // {
    //   name: "Networking",
    //   examples: ["TCP/IP", "HTTP", "DNS", "DHCP", "NAT"],
    // },
    // {
    //   name: "Security",
    //   examples: [
    //     "Firewalls",
    //     "Intrusion Detection Systems",
    //     "Vulnerability Scanning",
    //     "Malware Detection",
    //     "Data Loss Prevention",
    //   ],
    // },
    // {
    //   name: "Testing",
    //   examples: [],
    // },
  ];

  return (
    <section id="skills" className="skills about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Here are some specific programming skills I have. I am a highly
            motivated and results-oriented individual. I am always looking for
            new challenges and I am eager to learn new technologies.
          </p>
        </div>

        {/* <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        /> */}

        {/* <div className="row skills-content" id="skills-content">
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
        </div> */}
        <div className="row skill-content content">
          {skills.map(({ name, examples }) => (
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h5>{name}</h5>

              <ul>
                {examples.map((lang) => (
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <span>{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
