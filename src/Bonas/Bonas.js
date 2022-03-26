import React from 'react';
import './Bonas.css'

const Bonas = () => {
    return (
        <div className='bonas-question'>
            <h1>1.Question:How react work?</h1>
            <h2>Ans:React is not a freamwowk .It is just a libray devloped by Facebook to solve some problems that they were facing earlier. It designs simple views for each state in our application, and React will efficiently update and render just the right component when we data changes. The declarative view makes our code more predictable and easier to debug.
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state  for example, a TabList component may store a variable corresponding to the currently open tab.</h2>
            <h1>2.Question:What is difference between proos VS state?</h1>
            <h2>Ans:There are some difference between props and state.Such as:propes are immutable but state is mutable,props lets React do first reference checks but state should be managed in our view-controller,props to pass data to child components but state should not accessed from child components,props have better parformance but state has worse parformance and props use to pall data down form our view-controller but state always should be manage in our view-controller.The state of one componant will often became the props of a child componant.Props are passed to the child within the render mwthod of the parent as the second augment to React.createElement().</h2>
        </div>
    );
};

export default Bonas;