// Define the ProfileCard functional component with destructured props
function ProfileCard({title , handle, image, description}) { 
    /*
     * Defines a functional component named 'ProfileCard'. 
     * The component's props are destructured directly in the parameter list, 
     * allowing for easy access to 'title', 'handle', 'image', and 'description' within the component.
     */
    
        // Return JSX for rendering the component
        return(
            // JSX starts here
            <div className="card">
                {/* Card image section */}
                <div className="card-image">
                    {/* Image container with a specific aspect ratio */}
                    <figure className="image is-1by1">
                        {/* Image element with 'src' set to the 'image' prop and an alt text */}
                        <img src={image} alt="pda logo"/>
                    </figure>
                </div>
    
                {/* Card content section */}
                <div className="card-content">
                    {/* Media content for title and handle */}
                    <div className="media-content">
                        {/* Title text, dynamically set from the 'title' prop */}
                        <p className="title is-4">{title}</p>
                        {/* Subtitle text, dynamically set from the 'handle' prop */}
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                    {/* Description text, dynamically set from the 'description' prop */}
                    <div className="content">{description}</div>
                </div>
                
            </div>
            // JSX ends here
        )
    }
    
    // Export the ProfileCard component as default
    export default ProfileCard;
    /*
     * Exports the ProfileCard component as the default export of this file.
     * This allows it to be easily imported and used in other parts of the application.
     */
    