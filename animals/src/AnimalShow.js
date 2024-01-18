import { useState } from "react";
import "./AnimalShow.css"

/*
 * Importing SVG images for different animals and a heart.
 * These images are used in the AnimalShow component to visually represent the animals and the heart icon.
 */
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

/*
 * Mapping animal types to their corresponding SVG images.
 * This allows for dynamic selection of images based on the 'type' prop passed to the AnimalShow component.
 */
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({ type }) {
    /*
     * useState hook to manage the number of clicks on the component.
     * The 'clicks' state is initialized to 0 and is incremented with each click event.
     */
    const [clicks, setClicks] = useState(0);
    
    /*
     * Function to handle click events on the component.
     * Increments the 'clicks' state, which affects the size of the heart image in the render.
     */
    const handleClick = () => {
        setClicks(clicks + 1);
    };

    /*
     * Returns the JSX for the AnimalShow component.
     * Displays an image of the specified animal and a heart icon whose size changes based on the 'clicks' state.
     */
    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt="animal" src={svgMap[type]} />
            <img 
                className="heart"
                alt="heart"
                src={heart}
                style={{ width: 10 + 10 * clicks + "px" }} />
        </div>
    );
}

// Export the AnimalShow component as the default export
export default AnimalShow;
