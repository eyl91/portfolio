import React from "react";
import Bio from "./../../components/Bio";
import ProjectCards from "./../../components/ProjectCards"
import "./Nav.css"

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      aboutClicked: false,
      portfolioClicked: false
    };
  }

  

  render() {
    const aboutClicked = (component) => {
      if (this.state.aboutClicked) {
        if (this.state.portfolioClicked && this.state.portfolioClicked){
          this.setState({ portfolioClicked: false });
        }
        return component;
      }
    }

    const portfolioClicked = (component) => {
      if (this.state.portfolioClicked) {
        if (this.state.portfolioClicked && this.state.aboutClicked){
          this.setState({ aboutClicked: false });
        }
        return component;
      }
    }
    return (
      <div>
        <div className="nav-text"><span className="hover" onClick={() => this.setState({ aboutClicked: !this.state.aboutClicked })}>About</span> | 
          <span className="hover" onClick={() => this.setState({ portfolioClicked: !this.state.portfolioClicked })}>Portfolio</span> |
          <span><a href="https://twitter.com/elmayedda"><i className="hover fab fa-twitter"></i></a> <a href="https://www.linkedin.com/in/elmagonzalez/"> <i className="hover fab fa-linkedin-in"></i></a> <a href="https://github.com/eyl91"><i className="hover fab fa-github"></i></a> <a href="mailto:elmayl91@gmail.com"><i className="hover fas fa-envelope"></i></a> </span> 
          <br />
        </div>
        <br />
          {aboutClicked(<Bio />)}
          {portfolioClicked(<ProjectCards />)}
      </div>

    )
  }
}

export default Nav;






