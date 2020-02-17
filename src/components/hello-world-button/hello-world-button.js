import './hello-world-button.scss';

// // import helloWorld from './hello-world-button';
// // function helloWorld() {
// //   console.log('Hello world');
// // }

// class helloWorldButton {
//   render(){
//     const button = document.createElement('button');
//     button.innerHTML = 'Hello World';
//     const body = document.querySelector('body');
//     body.appendChild(button)
//   }
// }

// export default helloWorldButton;

class HelloWorldButton {
  // buttonCssClass = 'hello-world-text';
  // testClass = 'hello-world-text';
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'WebPack';
        button.classList.add('hello-world-button');
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Webpack List';
            p.classList.add('hello-world-text');
            // p.classList.add(this.testClass);
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;