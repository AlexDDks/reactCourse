import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard"; //JS file, no extension
import AlexaImage from "./images/alexa.png"; //Import file (no JS), with extension
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return(
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
        
            <div className="container"> 
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@AlexA99" image={AlexaImage}
                            description="Alexa was created by Amazon and helps you buy things."/>
                        </div>

                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@Cortana32" image={CortanaImage}
                            description="Cortana was created by Microsoft and helps you to search things."/>
                        </div>

                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@Siri01" image={SiriImage}
                            description="Siri was created by Apple and is being phased out."/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
