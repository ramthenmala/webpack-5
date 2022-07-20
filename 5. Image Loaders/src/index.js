import style from './index.scss';
import _ from 'lodash';
import './clearButton'
import logo from './assets/webpack-logo.png'

const btn1 = document.getElementById('button');
const logoImg = document.getElementById('logo');

btn1.addEventListener('click', function () {
  const el = document.getElementById('header');
  el.innerHTML = 'Hello World';

  const listItems = ['Apple', 'Banana', 'Orange'];
  const ul = document.getElementById('shoppingList');
  _.forEach(listItems, function (item) {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
});

btn1.classList.add([style.button]);
logoImg.src = logo;