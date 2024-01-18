/*
 * Imports the useState hook from the React library.
 * useState is a hook that allows you to add state to your functional components in React.
 */
import { useState } from "react";

/*
 * Imports the AnimalShow component from a local JavaScript file in the same directory.
 * This component is presumably a custom component that you will use in this application.
 */
import AnimalShow from "./AnimalShow";

/*
 * Imports CSS styles from the App.css file located in the same directory.
 * This allows you to use the styles defined in the App.css file in this component.
 */
import "./App.css"

/*
 * Defines a function to get a random animal name.
 * This function selects a random name from an array of animal names.
 * Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
 * Multiplying it by the length of the animals array gives a range from 0 to just below the length of the array.
 * Math.floor() then rounds down to the nearest whole number, ensuring it's a valid index for the animals array.
 * As a result, the maximum value inside the brackets is length-1, providing a valid array index.
 */
function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
    /*
     * Uses the useState hook to create the 'animals' state, initially set as an empty array.
     * 'animals' holds the current list of animals, and 'setAnimals' is the function to update this state.
     */
    const [animals, setAnimals] = useState([]);
    
    /*
     * Function to handle click events.
     * Each time it is called, it adds a new random animal to the end of the 'animals' array.
     * Uses the spread operator '...' to copy the current array and then adds the new animal.
     */
    const handleClick = () => {
        // Updates the 'animals' state by adding a new random animal
        setAnimals([...animals, getRandomAnimal()]);
    };

    /*
     * Maps each animal in the 'animals' array to an AnimalShow component.
     * 'animal' is the current animal being mapped, and 'index' is its position in the array.
     * Each AnimalShow component receives a 'type' prop with the animal's name and a unique 'key'.
     */
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    /*
    * Returns the JSX for the App component.
    * Includes a button to add a new animal and a div to display the list of rendered animals.
    */
    return (
        <div className="app">
            <button onClick={handleClick}>Add animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );

    } 

// Export the App component as the default export
export default App;