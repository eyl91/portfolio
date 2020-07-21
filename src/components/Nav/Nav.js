import React from "react";
import Bio from "./../../components/Bio";
import ProjectCards from "./../../components/ProjectCards"
import "./Nav.css"
import FontAwesome from "react-fontawesome";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutClicked: false,
      portfolioClicked: false
    };
  }



  render() {

    const setClickedState = (clicked) => {
      if (clicked === 'About') {
        if (this.state.aboutClicked) {
          this.setState({ aboutClicked: false });
        } else {
          this.setState({ aboutClicked: true, portfolioClicked: false });
        }
      } else if (clicked === 'Portfolio') {
        if (this.state.portfolioClicked) {
          this.setState({ portfolioClicked: false });
        } else {
          this.setState({ portfolioClicked: true, aboutClicked: false });
        }
      }
    }

    const setComponent = () => {
      if (this.state.aboutClicked) {
        return <Bio />;
      } else if (this.state.portfolioClicked) {
        return <ProjectCards />;
      }
    }
    return (
      <div>
        <div className="nav-text"><span className="hover" onClick={() => setClickedState('About')}>About</span> |
          <span className="hover" onClick={() => setClickedState('Portfolio')}>Portfolio</span> |
          <span><a href="https://twitter.com/elmayedda">
            <FontAwesome
              className='hover fab fa-twitter'
              name='twitter'
            /></a> <a href="https://www.linkedin.com/in/elmagonzalez/">
              <FontAwesome
                className='hover fab fa-linkedin'
                name='linkedin'
              /></a> <a href="https://github.com/eyl91">
              <FontAwesome
                className='hover fab fa-github'
                name='github'
              /></a> <a href="mailto:elmayl91@gmail.com">
              <FontAwesome
                className='hover fas fa-envelope'
                name='envelope'
              /></a> </span>

          <br />
        </div>
        <br />
        {setComponent()}
      </div>

    )
  }
}

export default Nav;






