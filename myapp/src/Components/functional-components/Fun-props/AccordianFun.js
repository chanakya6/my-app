import React from "react";
import { Accordion } from "react-bootstrap";
import "./Accordian.css";
function AcFun(){
    return (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header >Introduction To HTML</Accordion.Header>
            <Accordion.Body className="Header">
            HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is a combination of Hypertext and Markup language. Hypertext defines the link between web pages. A markup language is used to define the text document within the tag which defines the structure of web pages. This language is used to annotate (make notes for the computer) text so that a machine can understand it and manipulate text accordingly. Most markup languages (e.g. HTML) are human-readable. The language uses tags to define what manipulation has to be done on the text. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header  >Introduction To CSS</Accordion.Header>
            <Accordion.Body  className="Header">
            Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independently of the HTML that makes up each web page. It describes how a webpage should look: it prescribes colors, fonts, spacing, and much more. In short, you can make your website look however you want. CSS lets developers and designers define how it behaves, including how elements are positioned in the browser.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" >
            <Accordion.Header>Intoduction To JS</Accordion.Header>
            <Accordion.Body  className="Header">
            JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it. JavaScript is a weakly typed language(dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. 
            </Accordion.Body >
            </Accordion.Item>
            <Accordion.Item eventKey="3" >
              <Accordion.Header  >Introduction To Reat-JavaScript</Accordion.Header>
            <Accordion.Body  className="Header">
            ReactJS is an open-source JavaScript library that is used for building user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of an MVC (Model View Controller) architecture. React is used to create modular user interfaces and it promotes the development of reusable UI components that display dynamic data.

ReactJS uses a declarative paradigm which makes it possible for applications to be both effective and flexible. It creates simple views for each state in your application and efficiently updates and renders just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. Each component in a React application is responsible for rendering a separate, reusable piece of HTML code. The ability to nest components within other components allows for the building of complex applications from simple building blocks. A component may also keep track of its internal state, for example, a TabList component may keep a variable for the open tab in memory.
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
export default AcFun;