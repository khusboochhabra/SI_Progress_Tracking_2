
//Program 1 - component
/*
import React from 'react';
import ReactDOM from 'react-dom/client';


//function component
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}


//rendering a component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />)
*/







//Program 2 - Components in Components
/*
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car() {
  return <h2>I am a Car! <br></br> This is done by component in component</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
*/




//Program 3 - Components in Files


import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);



