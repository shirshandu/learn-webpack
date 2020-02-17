// // import helloWorld from './helloworld.js';
// import HelloWorldButton from './components/hello-world-button.js';
// import addImage from './add-image.js';
// // import addImage from './add-image';

// // helloWorld();
// const helloWorldButton =  new HelloWorldButton();
// helloWorldButton.render();


// // addImage();



import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
// import _ from 'lodash';
import React from 'react';

const heading  = new Heading();
// heading.render(_.upperFirst('hello-world'));
heading.render('hello-world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV === 'production'){
  console.log('Production Mode');
}
else if(process.env.NODE_ENV === 'development'){
  console.log('Dev Mode');
}