import React from 'react';
import ReactDOM from 'react-dom';
import Workshop from './Workshop';

// var ajax = new XMLHttpRequest();
// ajax.open("GET", "workshop.html", false);
// ajax.send();
// document.body.innerHTML += ajax.responseText;
// const Code = eval(ajax.responseText);

ReactDOM.render(
  <React.StrictMode>
    <Workshop />
  </React.StrictMode>,
  document.getElementById('root')
);
