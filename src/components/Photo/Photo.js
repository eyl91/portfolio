import React from "react";
import { Col, Well, Image } from "react-bootstrap";



class Photo extends React.Component {

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Image className="bio-image" src={require("../../utils/elma-img-2.png")} circle />
                </Col>
            </div>
        )
    }
}

export default Photo;