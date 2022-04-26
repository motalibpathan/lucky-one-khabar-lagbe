import React from "react";

const Question = () => {
  return (
    <div className="container">
      <h3>Question: Different between Props and State</h3>
      <p>
        Answer: In React props are used to pass data from one component to
        another component. A state is a part of component and that can be
        changed. State is changed by a function. Props are Immutable we can not
        modify props. But states are Mutable we can change state. Props are read
        only. But state is both read and write and is can be changed by user
        interaction.
      </p>
      <br />
      <h3>Question: How useState works</h3>
      <p>
        Answer: useState is a react hook, it allow to use a state variable in
        react functional component. If we want to use it then we have to import
        it from React. useState function will give us array of state variable
        and a function to set state variable. useState receive a parameter which
        is initial state value. If we call set state function by event listener
        then React will re-render the component and make changes where we used
        state variable.
      </p>
    </div>
  );
};

export default Question;
