import React from "react";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

const LandingPage = () => {
  return (
    <>
      <div class="landing-title">
        <h1 class="centering">Humans VS Zombies</h1>
        <h2>The best post apocalyptic game of tag</h2>
        <Link className="games-button" to="/games">
          <button>Find game</button>
        </Link>
      </div>
      <div>

        <div className="warning-headline">
          <img
            src="https://images.emojiterra.com/google/android-nougat/512px/26a0.png"
            alt="Warning triangle"
          />
          <h1>Emergency warning!</h1>
          <img
            src="https://images.emojiterra.com/google/android-nougat/512px/26a0.png"
            alt="Warning triangle"
          />
        </div>
        <p class="story>
          Society as we know it has ended due to an outbreak of the disease
          called 'corpus animatum' or better known as 'CoNima Type-5'.
          <br />
          This outbreak has already wiped out a large number of campuses around
          the globe. Your campus has been able to avoid the spread untill now
          but the first confirmed case has been detected. This means that one
          person from this institute has been infected. Unfortunately the
          individual escaped before proper containment could be established.
          <br />
          It is now up to the rest of us to stay safe and healthy by avoiding
          being bitten.
          <br />
          If you should be so unlucky to be bitten, the chance of infection is a
          guarantee and you WILL show symptoms shortly after.
          <br />
          <br />
          For now there is nothing more to say but good luck!
        </p>
      </div>
    </>
  );
};

export default LandingPage;
