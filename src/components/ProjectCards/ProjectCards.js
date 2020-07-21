import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./ProjectCards.css"

class ProjectCards extends React.Component {

    render() {
        return (
            <div>

                <Row>
                    <Col className="column" md={4}>
                        <a href="https://cxchange.herokuapp.com/">
                            <Image className="thumbnail-style" src={require("../../utils/1.png")} alt="242x200" />
                            <h3>CX</h3>
                            <p>An app that finds real-time currency exchange rates in the San Diego-Tijuana region.</p>


                        </a>
                    </Col>
                    <Col className="column" md={4}>
                        <a href="https://hidden-spire-18757.herokuapp.com/">
                            <Image className="thumbnail-style" src={require("../../utils/2.png")} alt="242x200" />
                            <h3>Farmers Exchange</h3>
                            <p>An app that enables users to search for local farmers markets.</p>


                        </a>
                    </Col>
                    <Col className="column" md={4}>
                        <a href="https://eyl91.github.io/brew-map/">
                            <Image className="thumbnail-style " src={require("../../utils/3.png")} alt="242x200" />
                            <h3>The Brews</h3>
                            <p>An app that helps users search for thousands of breweries nationwide.</p>

                        </a>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default ProjectCards;