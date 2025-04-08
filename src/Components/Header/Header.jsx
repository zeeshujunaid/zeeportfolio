import "bootstrap/dist/css/bootstrap.min.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import Button from "../Common/Button/Button";
import "./Header.css";
import "./responsive.css";
import { useState } from "react";

const Header = () => {
  const [initialValue, setInitialValue] = useState(false);

  return (
    <>
      <section className="Header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-wrapper">
              <a href="#">
                <img src="./assets/images/cv.png" alt="" /><span>zeeshan</span>
              </a>
            </div>

            <div className="Navigation">
              <ul>
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#skill">Skills</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact Me</a>
                </li>
              </ul>
            </div>

            <div className="resume_link">
            <a href="/Zeeshanresume.pdf" download>
                <Button text="Resume" isImg />
              </a>
            </div>

            <a
              onClick={() => setInitialValue(!initialValue)}
              className="menuIcon"
              href="#"
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </section>

      <section className={initialValue == true ? "responsiveBoxShow" : "responsiveBox"}>
        <a onClick={() => setInitialValue(!initialValue)} className="closeIcon" href="#">
          <FaRegWindowClose />
        </a>
        <div className="NavigationBar">
          <ul>
            <li>
              <a onClick={() => setInitialValue(!initialValue)} href="#about">About Me</a>
            </li>
            <li>
              <a onClick={() => setInitialValue(!initialValue)} href="#skill">Skills</a>
            </li>
            <li>
              <a onClick={() => setInitialValue(!initialValue)} href="#project">Project</a>
            </li>
            <li>
              <a onClick={() => setInitialValue(!initialValue)} href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>

        <div className="Responsive_resume_link">
        <a href="#">
                <Button text="Resume" isImg />
        </a>
        </div>
      </section>
    </>
  );
};

export default Header;
