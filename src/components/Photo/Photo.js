import React from "react";
import { Image } from "react-bootstrap";
import "./Photo.css"

const Photo = () => (
    <div>
        <Image className="bio-image" src={require("../../utils/elma-img-2.png")} circle />  
    </div>
);

export default Photo;