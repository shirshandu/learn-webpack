import './heading.scss';
import $ from 'jquery';

class Heading{
  render(pageName){
    // const h1 = document.createElement('h1');
    const h1 = $('<h1>');
    // const body = document.querySelector('body');
    const body = $('body');
    // h1.innerHTML = "webpack is amazing. This is " + pageName  + "'page'";
    h1.text("webpack is amazing. This is " + pageName  + "'page'");
    // body.appendChild(h1);
    body.append(h1);
  }
}

export default Heading;