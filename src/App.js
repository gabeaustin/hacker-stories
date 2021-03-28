import React from "react";

const item = [
    {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1
    }
]

const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(newNumbers);
// 2, 8, 18, 32


function App() {
  return (
    <div>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <hr />

        {item.map(function(item) {
            return <div>{item.title}</div>
        })}

    </div>
  );
}

export default App;
