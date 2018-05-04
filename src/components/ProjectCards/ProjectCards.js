import React from "react";
import { Grid, Button, Thumbnail, Col, Row } from "react-bootstrap";

class ProjectCards extends React.Component {

    render() {
        return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                            <Thumbnail src="https://dummyimage.com/242x200/f3f3f3/2d2d2d.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            
                    <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                            <Thumbnail src="https://dummyimage.com/242x200/f3f3f3/2d2d2d.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            
                    <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                            <Thumbnail src="https://dummyimage.com/242x200/f3f3f3/2d2d2d.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            
                    <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="https://dummyimage.com/242x200/f3f3f3/2d2d2d.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>

                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="https://dummyimage.com/242x200/f3f3f3/2d2d2d.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>

                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="https://dummyimage.com/242x200/f3f3f3/2d2d2d.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>

                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
                </Row>
            </Grid>;
        </div>
        )
    }
}

export default ProjectCards;