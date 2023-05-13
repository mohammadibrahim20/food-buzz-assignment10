import React from "react";
import ReactDOM from "react-dom";
import { FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function MyDocument() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <button
            className="btn btn-outline btn-secondary text-lg font-semibold ml-4"
            onClick={toPdf}
          >
            {" "}
            <FaFilePdf className="text-red-500 mr-3 hover:text-white"></FaFilePdf> Download Pdf
          </button>
        )}
      </Pdf>
      <div className="pl-4" ref={ref}>
        <div>
          <h1 className="text-3xl font-bold underline-offset-8 text-red-700">
            Question and Answer:
          </h1>
          <div className="my-5 border p-4 rounded-lg border-red-400">
            <h2 className="text-2xl font-semibold">
              <span>Question: </span> Tell us the differences between
              uncontrolled and controlled components?
            </h2>
            <hr className="border-1 mt-2 border-red-200" />
            <p className="text-sm font-medium mt-3">
              <span>Answer: </span> In React, the difference between controlled
              and uncontrolled components is that controlled components are
              entirely managed by the parent component, while uncontrolled
              components manage their state internally without any parent
              component control. Controlled components provide more control and
              flexibility, while uncontrolled components are simpler to use but
              offer less control over form behavior.
            </p>
          </div>
          <div className="my-5 border p-4 rounded-lg border-red-400">
            <h2 className="text-2xl font-semibold">
              <span>Question: </span>How to validate
              React props using PropTypes?
            </h2>
            <hr className="border-1 mt-2 border-red-200" />
            <p className="text-sm font-medium mt-3">
              <span>Answer: </span> You can validate React props using
              PropTypes, a type-checking library that comes with React.
              PropTypes allows you to define the expected data type and
              structure of props, helping to catch potential errors and improve
              code reliability. To use PropTypes, you can import the library and
              define the propTypes property on your component, setting the
              expected data types and any required props. When the component is
              rendered, React will check the propTypes against the actual props
              passed in, and log a warning in the console if any errors are
              detected.
            </p>
          </div>
          <div className="my-5 border p-4 rounded-lg border-red-400">
            <h2 className="text-2xl font-semibold">
              <span>Question: </span> Tell us the difference between nodejs and
              express js.?
            </h2>
            <hr className="border-1 mt-2 border-red-200" />
            <p className="text-sm font-medium mt-3">
              <span>Answer: </span> Node.js is a runtime environment for
              executing JavaScript code outside of a web browser, while
              Express.js is a web application framework built on top of Node.js.
              Node.js provides the underlying platform and APIs for building
              server-side applications in JavaScript, while Express.js provides
              additional features and tools for building web applications, such
              as routing, middleware, and template engines. In other words,
              Node.js is a JavaScript runtime that can be used for many
              different purposes, while Express.js is a framework specifically
              designed for building web applications.
            </p>
          </div>
          <div className="my-5 border p-4 rounded-lg border-red-400">
            <h2 className="text-2xl font-semibold">
              <span>Question: </span> What is a custom hook, and why will you
              create a custom hook?
            </h2>
            <hr className="border-1 mt-2 border-red-200" />
            <p className="text-sm font-medium mt-3">
              <span>Answer: </span> A custom hook is a function that uses
              React's built-in hooks to encapsulate and reuse stateful logic
              across multiple components. Custom hooks allow you to abstract
              away complex stateful logic into a reusable function, which can
              then be imported and used in any component. Custom hooks can help
              to improve code organization, reduce duplication, and simplify
              complex logic that may be difficult to manage within a single
              component. You might create a custom hook if you find yourself
              repeating the same stateful logic across multiple components or if
              you need to manage complex state or side effects within your
              application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyDocument;
const rootElement = document.getElementById("root");
ReactDOM.render(<MyDocument />, rootElement);
