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
        <h1>My Hacker Stories</h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <hr />

        <List />
        <List />

        {item.map(function(item) {
            return 
                <div key={item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                </div>
        })}
    </div>
  );
}

function List() {
    return item.map(function(item) {
        return (
            <div key={item.objectID}>
                <span>
                    <a href="{item.url}">{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        )
    })
}

export default App;
