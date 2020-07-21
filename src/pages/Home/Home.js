import React, { Component } from "react";
import Photo from "../../components/Photo";
import Container from 'react-bootstrap/Container'
import Nav from "./../../components/Nav";
import "./Home.css"



class Home extends Component {

    render() {
        return (

            <Container>
                <Photo />
                <div className="text text-center">Elma Gonzalez</div>
                <div className="sub-head text-center">Web Developer</div>
                <br />
                <div className="text-center"><Nav /></div>
            </Container>

        )
    }
}

export default Home;

