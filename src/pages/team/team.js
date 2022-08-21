import React from "react";
import "./team.css";
import mansi from "../../static/mansi.jpg";
import aryan from "../../static/aryan.jpg";
import atharvak from "../../static/atharvak.jpg";
import atharva from "../../static/atharva.jpg";
import raj from "../../static/raj.jpg";
// import aditya from "../../static/aditya.jpg";

const Team = () => {
  return (
    <div>
      <div className="text-4xl flex justify-center py-10">Team Antons</div>
      <div class="container min-h-screen flex flex-wrap ">
        <div className="p-6">
          <div class="card">
            <div class="imgBx">
              <img src={atharvak} alt="atharvak" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>
                  Atharva Kinikar <br />
                </h3>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://github.com/atharvakinikar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/atharva-kinikar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div class="card">
            <div class="imgBx">
              <img src={aryan} alt="aryan" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>
                  Aryan Agrawal <br />
                </h3>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://github.com/aryanagrawal22"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/-aryanagrawal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div class="card">
            <div class="imgBx">
              <img src={atharva} alt="atharva" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>
                  Atharva Nagmoti
                  <br />
                </h3>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://github.com/atharvanagmoti20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/atharva-nagmoti-801764235/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div class="card">
            <div class="imgBx">
              <img src="" alt="aditya" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>
                  Aditya Gitte <br />
                </h3>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://github.com/aditya-gitte"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aditya-gitte/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div class="card">
            <div class="imgBx">
              <img src={raj} alt="raj" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>
                  Raj Shende <br />
                </h3>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://github.com/shenderaj9021"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/raj-shende-350718204/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div class="card">
            <div class="imgBx">
              <img src={mansi} alt="mansi" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>
                  Mansi Gundre <br />
                </h3>
              </div>
              <ul class="sci">
                <li>
                  <a
                    href="https://github.com/mansi0829"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mansi-gundre/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
