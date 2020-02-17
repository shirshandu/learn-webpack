import image from './image.jpg';

function addImage(){
  const img = document.createElement('img');
  img.alt = 'Car';
  img.width = 300;
  img.src = image;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;