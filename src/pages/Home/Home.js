import React, { Component } from "react";
import Photo from "../../components/Photo";
import {Grid, Row} from "react-bootstrap";
import Nav from "./../../components/Nav";
import "./Home.css"



class Home extends Component {

    render () {
        return (
            <div>
            <Grid>
                    <Row className="image text-center"><Photo /></Row>
                    <div className="text text-center">Elma Gonzalez</div>
                    <div className="sub-head text-center">Web Developer</div>
                    <br />
                    <div className="text-center"><Nav /></div>
            </Grid>
            </div>
        )  
    }
}

export default Home;

