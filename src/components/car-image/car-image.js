import CarImg from './car-image.jpg';
import './car-image.scss';

class CarImage{
  render(){
    const img = document.createElement('img');
    img.src = CarImg;
    img.alt = 'Car';
    img.classList.add('car-image');
    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default CarImage;