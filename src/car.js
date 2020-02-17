import Heading from './components/heading/heading.js';
import CarImage from './components/car-image/car-image.js';
// import _ from 'lodash';
import React from 'react';

const heading = new Heading();
// heading.render(_.upperFirst('CARs Page'));
heading.render('CARs Page');

const carImage = new CarImage();
carImage.render();