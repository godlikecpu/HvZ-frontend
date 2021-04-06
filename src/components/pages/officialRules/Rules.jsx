import React from "react";
import "./RulesStyles.css";

const Rules = () => {



    return (
        <>
            <div className="centering">
                <h1 >Official Rules</h1>
                <h3 >Please follow these rules to the best of your abilities so we all can have fun together</h3>
            </div>
            <div className="margins">
                <h3>The Basics</h3>
                <p>
                    Every player starts out by being a human except for one randomly selected player who will be patient-zero. <br />
                This player now have to try and infect all the humans. An infected human becomes a zombie with the same objective of infecting all humans.<br />
                Humans have to avoid being bitten long enough for the zombie to starve (predetermined game duration).
                </p>
            </div>
            <div className="margins">
                <h3>Allowed Equipment</h3>
                <p>
                    <strong>The Bandana</strong><br />
                    Every player (Human or Zombie) Should wear a bandana at all times.<br />
                    The Official game master determines how this bandana HAS to be worn as it determines your status as either a human or zombie.
                    <br />
                    <br />
                    A player who intetionally disguises or in other ways doesn't wear the bandana as intended is grounds for immediately disqualification of the offending player.
                </p>
                <p>
                    <strong>Artillery</strong><br />
                    Toy weapons may be used to stun zombies. These weapons can be clothing items such as balled up socks (preferably clean), Nerf-guns or a marshmellow gun.<br />
                    More types of weapons may be used as long as they adhere to these following guidelines:
                </p>
                    <ol>
                        <li>Absolutely no weapons may resemble a real firearm (Brightly colored weapons only)</li>
                        <li>All projectiles has to be soft meaning that no actual damage will occur on impact</li>
                        <li>All shots on players has to be aimed at the torso (No intentional shots aimed at the head)</li>
                    </ol>
                <p>
                If you are unsure if your weapon is approved for the game then please ask the game master before game start.
                </p>    
            </div>
            <div className="margins">
                <h3>Genral Safety</h3>
                <p>
                    In order to keep everyone safe the playing area is set to not include areas with vehicular traffic.<br />
                    This rule stands even if the game map shows an area with a road to be within the playing field. This area is therfor NOT playable.<br />
                    Any player(s) found playing in these areas are concidered disqualified.
                </p>
            </div>
            <div className="margins">
                <h3>Human Rules</h3>
                    <ol>
                        <li>Any human has to wear their bandana around an arm or leg to indicate human status</li>
                        <li>Hitting a zombie is only allowed with approved weapons (see Artillery clause</li>
                        <li>When tagged by a zombie the human is required to show their bite-code</li>
                        <li>When tagged the human immediately becomes a zombie</li>
                    </ol>
            </div>
            <div className="margins">
                <h3>Zombie Rules</h3>
                    <ol>
                        <li>A zombie must feed at least every 48 hours</li>
                        <li>Tagging a human only counts if it is a firm touch. There may not be any doubt if the human has been tagged</li>
                        <li>If a zombie is hit by a weapon it is stunned for 15 minutes. There can be no game interaction in that time what so ever.
                            <ul>
                                <li>No blocking shots on other zombies</li>
                                <li>No warning other players about risks or dangers</li>
                                <li>No game interaction</li>
                            </ul>
                        </li>
                        <li>A zombie has to wear the bandana on their head to indicate zombie status</li>
                    </ol>
            </div>
            <div className="margins">
                <h3>Other Rules</h3>
                    <ul>
                        <li>No shooting non-Players: Hitting an innocent bystander is grounds for disqualification</li>
                        <li>No Non-Player may help players by giving information or delivering food and the like</li>
                        <li>A zombie can tag a human who is inside a safe-zone as long as BOTH feet are outside the zone</li>
                        <li>A human can stun a zombie (outside safe-zone) while being in a safe-zone</li>
                        <li>A zombie is not allowed to use anything to shield them from a projectile</li>
                    </ul>
            </div>
            <div className="margins">
                <h3>Gentleman Clause</h3>
                <p>
                    We are all playing a friendly game so please be kind and follow all rules.<br />
                    You are expected to he honest and to play fair so we all can have the most fun for the duration of the game.<br />
                    <br />
                    You are allowed to disagree with a fellow player but be respectful and constructive when discussing the disagrement.<br />
                    Any profanity or racial/sexual/sexistic slurs targeted at another player will result in immediate disqualification.
                </p>
            </div>
        </>
    )
};

export default Rules;