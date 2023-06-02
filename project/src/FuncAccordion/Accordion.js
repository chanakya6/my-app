import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

function Example() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Robust Face Recognition From Multiview</Accordion.Header>
        <Accordion.Body>
          A Facial recognition syestem which is capable of matching faces from a digital image or video frame against a database of faces using DIGITAL IMAGE PROCESSING techniques 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is JSX</Accordion.Header>
        <Accordion.Body>
          It is a syntax extension for javascript that allows you too write HTML-like code directly within javascript code.Jsx is most commonly associated with the React library,although it can be used with other frameworks or libraries as well
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Example;