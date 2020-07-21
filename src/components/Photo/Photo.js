import React from 'react';
import Image from 'react-bootstrap/Image'
import './Photo.css'

const Photo = () => (
    <Image className="bio-image" src={require('../../utils/elma-img-2.png')} roundedCircle />
);

export default Photo;