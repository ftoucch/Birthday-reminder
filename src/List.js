import React, { useState } from "react";
import data from "./data";

const List = () => {
  // setup use state for our data --- data is coming from data.js
  const [people, setPeople] = useState(data); // default value useState(data) is from the data.js

  // function to remove an item
  const removeItem = (id) => {
    // filter the current elemnet with its id, remove it

    let newPeople = people.filter((person) => person.id !== id);

    // and set the new object to that value
    setPeople(newPeople);
  };

  // html element that list returns
  return (
    <>
      <h3>{people.length} Birthdays Today</h3>

      {people.map((person) => {
        // map person to the people data.
        const { id, image, name, age } = person;
        return (
          <article Key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <button
                className="btn"
                onClick={() => {
                  removeItem(id);
                }}
              >
                Remove
              </button>
            </div>
          </article>
        );
      })}

      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear all
      </button>
      <button
        onClick={() => {
          setPeople(data);
        }}
      >
        Add all
      </button>
    </>
  );
};

export default List;
