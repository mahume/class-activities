import React from "react";

function JSXVariables() {
  const name = 'Michael';
  const reactThoughts = 'is awesome!'
  
  const removeVowels = string => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arrayOfLetters = string.split('');
    const arrayWithoutVowels = arrayOfLetters.filter(letter => !vowels.includes(letter))
    const stringWithoutVowels = arrayWithoutVowels.join('');
    return stringWithoutVowels;
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}.</h1>
          <h2>My name has {name.length} letters.</h2>
          <h2>My name without vowels is {removeVowels(name)}.</h2>
          <h2>I think React {reactThoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
