import React, { useEffect } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import invert from "../../helpers/invertTheme";
import { Icon } from "@iconify/react";
import "./styles/About.css";
import "./styles/About-mobile.css";
import perfil from "././images/perfil.png";

function About({ color, theme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header selectedPage="about" />
      <main className={`about bg${theme}`}>
        <article
          className={`container-about-me c${invert(theme)}`}
          id="about-me"
        >
          <section className={`about-me`}>
            <h3  className={`c${color}`}>A little about me...</h3>
            <p>
              I was born in 2001 in Santa Inês, MA, Brazil. I have studied and
              graduated from Trybe, a wonderful school, in Web Development.
              After a few months studying something totally new for me, today, I
              can say with certainty that it is something I really love to do.
              Every code, every function, every array... bring me a challenge
              and arouse the desire to go further and further. So, yes, I love
              being a developer and I will get better and better!
            </p>
          </section>
          <img src={perfil} alt="" />
        </article>
        <article className="skills-container">
          <ul className={`skills c${invert(theme)}`}>
            <li>
              <Icon icon="ant-design:html5-outlined" className={`c${color}`} />
              Html
            </li>
            <li>
              <Icon icon="la:css3" className={`c${color}`} />
              Css
            </li>
            <li>
              <Icon icon="bxl:javascript" className={`c${color}`} />
              Javascript
            </li>
            <li>
              <Icon icon="fe:github-alt" className={`c${color}`} />
              Git & Github
            </li>
            <li>
              <Icon icon="bxl:react" className={`c${color}`} />
              React.js
            </li>
            <li>
              <Icon icon="bxl:redux" className={`c${color}`} />
              Redux
            </li>
            <li>
              <Icon icon="cib:bootstrap" className={`c${color}`} />
              Bootstrap
            </li>
            <li>
              <Icon icon="akar-icons:node-fill" className={`c${color}`} />
              Node.js
            </li>
            <li>
              <Icon icon="cib:jest" className={`c${color}`} />
              Jest
            </li>
            <li>
              <Icon icon="cib:npm" className={`c${color}`} />
              NPM
            </li>
            <li>
              <Icon icon="fa-brands:docker" className={`c${color}`} />
              Docker
            </li>
            <li>
              <Icon icon="bi:kanban" className={`c${color}`} />
              Kanban
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
});

export default connect(mapStateToProps)(About);
