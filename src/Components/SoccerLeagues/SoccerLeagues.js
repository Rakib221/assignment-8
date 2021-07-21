import React, { useEffect, useState } from 'react';
import SoccerLeaguesFind from '../SoccerLeaguesFind/SoccerLeaguesFind';
import backgroundImage from '../../footballStadium.jpg';
import './SoccerLeagues.css';

const SoccerLeagues = () => {
    const [leagues, setLeagues] = useState([])
    const selectedLeagues = leagues.slice(0, 12);
    console.log(selectedLeagues);
    const loadLeagues = () => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(response => response.json())
            .then(data => setSoccerData(data.leagues))
    }
    useEffect(loadLeagues, []);
    const setSoccerData = (leaguesData) => {

        const filterLeagues = leaguesData.filter(league => league.strSport === "Soccer");
        setLeagues(filterLeagues);
    }
    return (
        <div>
            <div style={{ height: '200px', backgroundImage: `url(${backgroundImage})` }}>
                <div className="alignText">
                    <p className="d-flex justify-content-center align-items-center"><h1 style={{ color: 'white' }}>Sports Mania</h1></p>
                </div>
            </div>
            <div className="displayGrid mt-5">
                {
                    selectedLeagues.map(league => <SoccerLeaguesFind league={league}></SoccerLeaguesFind>)
                }
            </div>
        </div>
    );
};

export default SoccerLeagues;