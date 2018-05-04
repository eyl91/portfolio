import React from "react";
import { Col, Well, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";

class Bio extends React.Component {



    render() {
        return (
            <div className="bio-container">
            <Col xs={6} md={4}>
                    <Image className="bio-image" src={require("../../utils/elma-img-2.png")} circle />
                   
            </Col>

            <Well>
                I am full stack developer possessing journalism experience working in TV, radio and web platforms.
                I am looking for a  position where I can use my skills in HTML5, CSS3, Javascript, JQuery, React JS, Handlebars JS, Firebase, Node Js, MySQL, MongoDB, Express, and  Bootstrap. Additionally, I’m a native Spanish speaker and fluent in Portuguese. 
            </Well>
            </div>
        )
    }
}

export default Bio;

