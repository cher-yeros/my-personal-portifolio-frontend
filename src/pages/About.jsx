import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            I am a web developer with 4+ years of experience in the industry. I
            have a strong understanding of React.js, Node.js, HTML, CSS, and
            JavaScript, and I am proficient in a variety of web development
            frameworks and technologies. I am also a creative thinker and I am
            always looking for new ways to improve the user experience of
            websites and applications.
          </p>
          <p>
            I am confident that I can use my skills and experience to help you
            create a website or application that meets your needs. Please feel
            free to contact me if you have any questions or would like to
            discuss a project.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src="assets/img/profile-img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Developer.</h3>
            {/* <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>24 Oct 2000</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong> <span>www.yerosendiriba.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+251 945 933 607</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Addis Ababa, Ethiopia</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Age:</strong> <span>22</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Education:</strong>{" "}
                    <span>BSc in Computer Science</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>E-mail:</strong>{" "}
                    <span>yerosendiriba1@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
