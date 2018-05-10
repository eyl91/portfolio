import React from "react";
import { Grid, Thumbnail, Col, Row } from "react-bootstrap";
import "./ProjectCards.css"

class ProjectCards extends React.Component {

    render() {
        return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <a href="https://cxchange.herokuapp.com/">                    
                            <Thumbnail className="thumbnail-style" src={require("../../utils/1.png")} alt="242x200">
                                <h3>CX</h3>
                                <p>An app that finds real-time currency exchange rates in the San Diego-Tijuana region.</p>
                            
                            </Thumbnail>
                        </a>    
                    </Col>
                    <Col xs={6} md={4}>
                        <a href="https://hidden-spire-18757.herokuapp.com/">
                            <Thumbnail className="thumbnail-style" src={require("../../utils/2.png")} alt="242x200">
                                <h3>Farmers Exchange</h3>
                                <p>An app that enables users to search for local farmers markets.</p>
                            
                            </Thumbnail>
                        </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a href="https://eyl91.github.io/brew-map/">
                            <Thumbnail className="thumbnail-style" src={require("../../utils/3.png")} alt="242x200">
                                <h3>The Brews</h3>
                                <p>An app that helps users search for thousands of breweries nationwide.</p>
                            </Thumbnail>
                        </a>
                    </Col>
                </Row>
            </Grid>
        </div>
        )
    }
}

export default ProjectCards;