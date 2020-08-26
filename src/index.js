import _ from 'lodash';
import './style.css';
import Photo from './background.png';
import Data from './data.xml';
import myJson from './myJson.json'

function component() {
const element = document.createElement('div');

element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.classList.add('hello');

const photo = new Image();
photo.src = Photo;

element.appendChild(photo);

console.log(Data);

console.log(myJson);

return element;
}

document.body.appendChild(component());