import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/IMG_2660.jpg'
import pic05 from '../images/IMG_puma.jpeg'
import pic06 from '../images/html5.png'
import pic07 from '../images/css3.png'
import pic08 from '../images/react.png'
import pic09 from '../images/node.png'
import pic10 from '../images/express.png'
import pic11 from '../images/js.png'
import pic12 from '../images/postgresql.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Nathaniel Lawrence</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            My name is Nathaniel Lawrence (on the right), I reside in Utah, but I've lived all over and love to travel. I'm always open for a new adventure. I pride myself on developing and designing. Creation is a passion of mine. A lot of the things we now use every day haven't been available for a long period of time. As a developer, the world is a playground and open to explore. Other passions of mine include family and sports; basketball, football, soccer, rugby, etc. I can spend hours talking about just that. I like to inspire others and encourage them to follow their dreams. Just a genuine guy who likes to see the progress and success of others, make a difference, and have fun.</p>
            <p>Check out my <a href="https://github.com/nnlawrence"> work on GitHub</a>.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <h3>TechPanda</h3>
          <iframe src="https://player.vimeo.com/video/377590207" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p><a href="https://vimeo.com/377590207">TechPanda</a></p>
          <p>Group full-stack eCommerce web application that allows users to view and purchase new tech from google and apple. I implemented all animations, HTML, CSS, etc.</p>
          <h3>Voilà</h3>
          <iframe src="https://player.vimeo.com/video/377698079" width="100%" height="321" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p><a href="https://vimeo.com/377698079">Voila</a></p>
          </span>
          <p>Full-stack web application that allows users to locate food trucks and view information about them. Food truck owners can add new or additional food trucks and update their coordinates to be shown in a new location. RESTful API design</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src='https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg' width='300' alt="" />
          </span>
          <img src='https://static.parastorage.com/client/pfavico.ico' />
          <div className='skillio'>
            <h3>HTML, CSS, React, Node, Express, Javascript, Postgresql, Material-UI, Git, Sketch, etc.</h3>
            <div>
            <img src={pic06} width='94' margin='20%'/>
            <img src={pic07} width='100' />
            <img src={pic08} width='100' />
            <img src={pic09} width='100' />
            <img src={pic10} width='100' />
            </div>
            <div>
            <img src={pic11} width='95' />
            <img src={pic12} width='100' />
            <img src='https://static.wixstatic.com/media/b4bcde_22e16bf1307142868330102c0f3553ea~mv2.png/v1/fill/w_324,h_256,al_c,q_80,usm_0.66_1.00_0.01/material.webp' width='100' />
            <img src='https://static.wixstatic.com/media/b4bcde_e69c9f647bb848449b5c7e1019efe3de~mv2.png/v1/fill/w_284,h_282,al_c,q_80,usm_0.66_1.00_0.01/Git-Icon-1788C.webp' width='100' />
            <img src='https://www.sketch.com/images/pages/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' width='100' />
            </div>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/nathanielawrence@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="_replyto" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/nategottheflu"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/nathaniel.lawrence.7" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sirnaynay/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nnlawrence"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nnlawrence/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
