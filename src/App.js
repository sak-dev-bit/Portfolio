import React, { useState } from 'react';
import Header from './Header';
import './style.css'; // Make sure this path is correct
import Project1 from './Assests/Project1.png'
import Project2 from './Assests/Project2.jpg'
import Project3 from './Assests/Project3.png'
import Project4 from './Assests/Project4.png'
import Project5 from './Assests/Project5.png'
import media600 from './Assests/media600.png'
import sakshicv from './Assests/sakshicv.pdf'
import { FaPhoneSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

function App() {
  const [activeTab, setActiveTab] = useState('Education');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <Header />

      {/* About Section */}
      <div id="about" className="section" >
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={media600} className="about-img" alt="A professional headshot of Sakshi" width="10%" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About me</h1> <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquid
                doloribus! Iusto est quisquam assumenda, dignissimos voluptas ducimus,
                quam rem suscipit corporis distinctio alias error at, vel autem sunt
                debitis itaque voluptates temporibus molestiae consequuntur excepturi
                nobis eius. Laborum quidem alias blanditiis est accusamus delectus
                mollitia ea architecto a, magnam reiciendis soluta totam suscipit
                aliquam consectetur earum, quae ducimus itaque. Consequuntur facere
                eveniet dolore illo cumque. Ipsum quo vero ea adipisci, dolor magnam
                neque veniam odio? Dolor atque, esse placeat exercitationem aliquid quo
                iste ab illo iusto consequuntur temporibus nisi laborum veritatis quis
                pariatur porro velit doloribus nemo? Dolores, aperiam!
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
                  onClick={() => openTab('Education')}
                >
                  Education
                </p>
                <p
                  className={`tab-links ${activeTab === 'Certifications' ? 'active-link' : ''}`}
                  onClick={() => openTab('Certifications')}
                >
                  Certifications
                </p>
              </div>
              <div
                className={`tab-content ${activeTab === 'Certifications' ? 'active-tab' : ''}`}
                id="Certifications"
              >
                <ul>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>Team Work</li>
                </ul>
              </div>
              <div
                className={`tab-content ${activeTab === 'Education' ? 'active-tab' : ''}`}
                id="Education"
              >
                <ul>
                  <li>
                    <span>Master of Computer Application </span> <br /> August 2024 - Present
                  </li>
                  <li>
                    <span>
                      Bachelor of Business Administration (Computer Application)
                    </span>{' '}
                    <br /> April 2021 - April 2024 <br /> CGPA - 8.50 | Grade - A+
                  </li>
                  <li>
                    <span>Higher Secondary Certificate Examination </span> <br /> March 2021{' '}
                    <br /> Percentage - 66.50%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Skills Section */}
      <div id="skills" className="section">
          <h1 className="sub-title">My Skills</h1>
        <div className="container">
          <div className="skills-grid">
            <div className="skills-category">
              <h3 className="category-title">Programming Languages</h3>
              <ul className="skill-items-list">
                <li>C++</li>
                <li>Python</li>
                <li>C</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="category-title">Frameworks & Libraries</h3>
              <ul className="skill-items-list">
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="category-title">Tools & Technologies</h3>
              <ul className="skill-items-list">
                <li>Git & GitHub</li>
                <li>Firebase</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="category-title">Software Development</h3>
              <ul className="skill-items-list">
                <li>SDLC</li>
                <li>Debugging</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="section">
        <div className="container">
          <h1 className="sub-title">
            Projects
          </h1>
          <div className="work-list">
            <div className="work">
              <img src={Project1} alt="Screenshot of a portfolio website" />
              <div className="layer">
                <h3>Portfolio</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                  repellendus nemo rem dolor reiciendis soluta eaque harum odit sint
                  autem.
                </p>
                <a href="https://github.com/sak-dev-bit">Github</a>
              </div>
            </div>
            <div className="work">
              <img src={Project1}  alt="Screenshot of a portfolio website" />
              <div className="layer">
                <h3>Portfolio</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                  repellendus nemo rem dolor reiciendis soluta eaque harum odit sint
                  autem.
                </p>
                <a href="https://github.com/sak-dev-bit">Github</a>
              </div>
            </div>
            <div className="work">
              <img src={Project3}  alt="Screenshot of a portfolio website" />
              <div className="layer">
                <h3>Portfolio</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                  repellendus nemo rem dolor reiciendis soluta eaque harum odit sint
                  autem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
                  repellendus nemo rem dolor reiciendis soluta eaque harum odit sint
                  autem.
                </p>
                <a href="https://github.com/sak-dev-bit">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="section">
        <div className="container">
          <h1 className="sub-title">
            MY BLOG
          </h1>
          <p >
          Explore latest articles and insights on design,from which I got inspired.
          </p>
          <div className="blog-cards">
            <div className="blog-card">
              <h3 className="blog-title">Make Your Website</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
                dicta natus quasi vero enim nobis, cumque deserunt repellendus
                similique, accusamus voluptatem. Perspiciatis quisquam in repellendus
                pariatur molestias recusandae fuga cum incidunt natus at quo voluptate
                consequatur praesentium ut, enim rem aliquam facere culpa eligendi
                distinctio nostrum, ex reiciendis expedita nulla!
              </p>
              <a href='https://medium.com/search?q=coding+' className="btn2">
                Read More
              </a>
            </div>
            <div className="blog-card">
              <h3 className="blog-title">Build Responsive Layouts</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ab
                eligendi? Commodi quod suscipit asperiores est dolorem reiciendis quasi
                blanditiis, amet quam minus vero aspernatur quisquam eveniet quidem
                illo ipsa quaerat beatae! Rem dolore expedita rerum quod minima odio
                eum, reprehenderit numquam excepturi sequi veniam et doloribus quae
                atque laborum?
              </p>
              <a href='https://medium.com/search?q=coding+' className="btn2">
                Read More
              </a>
            </div>
            <div className="blog-card">
              <h3 className="blog-title">Improve Your Workflow</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo
                soluta officia natus odio laboriosam harum ea repellat nobis
                repudiandae nesciunt, itaque cum dolore illum ex nihil quam molestias
                aspernatur velit suscipit atque laudantium qui quia. Enim, similique
                voluptatibus! Eaque perferendis porro expedita. Voluptatum iure nisi,
                omnis laudantium quia adipisci?.
              </p>
              <a href='https://medium.com/search?q=coding+' className="btn2">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title" style={{ color: '#fff' }}>
                Contact Me
              </h1>
                <div className="contact-item">
                  <MdEmail className="contact-icon" />
                  <a href="mailto:contact@gmail.com">contact@gmail.com</a>
                </div>
              <div className="contact-item">
                <FaPhoneSquare className="contact-icon" />
                <a href="tel:0123456789">0123456789</a>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sakshi-jadhav-32a40126a">
                  <TbBrandLinkedinFilled/>
                </a>
                <a href="https://www.linkedin.com/in/sakshi-jadhav-32a40126a">
                  <TbBrandLinkedinFilled/>
                </a>
                <a href="https://github.com/sak-dev-bit">
                  <AiFillGithub/>
                </a>
                <a href="https://leetcode.com/u/3QVXspSxMA/">
                  <SiLeetcode/>
                </a>
              </div>
              <a href={sakshicv} download className="btn2" id="downloadBtn">
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your name" required />
                <input type="email" name="Email" placeholder="Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;