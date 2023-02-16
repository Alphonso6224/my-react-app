import React from 'react';
import ReactDOM from 'react-dom/client';
import { name, age } from "./person.js";
import Message from "./Message.js";

/**
 * Composant dans Composant
 * @param {*} props 
 * @returns 
 */
function FirstElement(props) {
  return (
    <div>
      <h1>Hello React!</h1>
      <h2>I am a {props.color} Car !</h2>
      <Message/>
    </div>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <FirstElement color="red"/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Garage />
);

