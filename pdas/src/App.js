// Import the Bulma CSS framework
import "bulma/css/bulma.css"; 
/*
 * Imports the Bulma CSS framework styles. Bulma is a modern CSS framework based on Flexbox.
 * By importing it here, its styles are made available throughout the application.
 */

// Import the ProfileCard component from a local JS file
import ProfileCard from "./ProfileCard"; 
/*
 * Imports the ProfileCard component from a local JavaScript file named 'ProfileCard.js'. 
 * This component is presumably a custom component that you will use in this application.
 * Note: The '.js' extension is omitted as it's the default for JavaScript imports.
 */

// Import images from local files with extensions specified
import AlexaImage from "./images/alexa.png"; 
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
/*
 * Imports image files from the specified paths. These imports bring image files into your React application, 
 * allowing you to use them as regular JavaScript variables. This is a feature of modern JavaScript bundlers like Webpack.
 * Each image import is given a named variable (AlexaImage, CortanaImage, SiriImage) which can be used in JSX.
 */

// Define the App component
function App() {
    // Return JSX to render
    return(
        // JSX starts here
        <div>

            {/* Hero section using Bulma classes, comments in JSX, are between keys */}
            <section className="hero is-primary">
                {/* Hero body container */}
                <div className="hero-body">
                    {/* Title in the hero section */}
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
        
            {/* Main container for profile cards */}
            <div className="container"> 
                {/* Section for the columns */}
                <section className="section">
                    {/* Columns for profile cards */}
                    <div className="columns">
                        {/* Column for Alexa */}
                        <div className="column is-4">
                            {/* ProfileCard component for Alexa */}
                            <ProfileCard title="Alexa" handle="@AlexA99" image={AlexaImage}
                            description="Alexa was created by Amazon and helps you buy things."/>
                        </div>

                        {/* Column for Cortana */}
                        <div className="column is-4">
                            {/* ProfileCard component for Cortana */}
                            <ProfileCard title="Cortana" handle="@Cortana32" image={CortanaImage}
                            description="Cortana was created by Microsoft and helps you to search things."/>
                        </div>

                        {/* Column for Siri */}
                        <div className="column is-4">
                            {/* ProfileCard component for Siri */}
                            <ProfileCard title="Siri" handle="@Siri01" image={SiriImage}
                            description="Siri was created by Apple and is being phased out."/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        // JSX ends here
    );
}

// Export the App component as default
export default App;
/*
 * Exports the App component as the default export of this file. 
 * This allows the App component to be imported easily in other parts of the application, like in the main index.js file.
 */
