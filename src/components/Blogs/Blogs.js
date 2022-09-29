import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h2 className='title'>Questions And Answers</h2>
            <h3>**How does React works?</h3>
            <p>Answer: React Js actually works with JSX,Virtual Dom,Components and Props,State Management.
                1.JSX:JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structures.
                2.Virtual Dom:The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.
                3.Components and Props:ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                4:State Management:A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.
            </p>
            <h3>**What are the differences between props and state in React?</h3>
            <p>Answer:Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.<br></br>
                State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
            </p>
            <h3>**What are the purpose of UseEffect in React?</h3>
            <p>Answer: UseEffect is used for Data fetching, setting up a subscription, and manually changing the DOM in React components </p>
        </div>
    );
};

export default Blogs;