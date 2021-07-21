
import React, { useEffect, useState } from 'react';
import LeaguesCover from '../LeaguesCover/LeaguesCover';
import './SoccerLeaguesFind.css';
import { Link, useHistory } from 'react-router-dom';

const SoccerLeaguesFind = (props) => {
    // console.log(props.league);
    const { idLeague } = props.league;
    const [singleLeague, setSingleLeague] = useState([]);
    const loadLeaguesById = () => {
        const urlId = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(urlId)
            .then(response => response.json())
            .then(data => setSingleLeague(data.leagues[0]))
    }
    useEffect(loadLeaguesById, [idLeague]);
    const history = useHistory();
    const handleOneLeagueById = (idLeague) => {
        const league = `/league/${singleLeague.idLeague}`;
        history.push(league);
    }
    console.log(singleLeague);
    return (
        <div>
            <div className="card" style={{ width: '15rem', height: '18rem' }}>
                <img style={{ width: '80px' }} src={singleLeague.strBadge} className="card-img-top align" alt="..." />
                <div className="card-body">
                    <p className="card-title"><b>{singleLeague.strLeagueAlternate}</b></p>
                    <p className="card-text">{singleLeague.strCountry}</p>
                    <p className="card-text">Sports type: Football</p>
                    {/* <Link to={`/league/${singleLeague.idLeague}`}><a href="#" className ="btn btn-primary align">Explore</a></Link> */}
                    <button className="btn btn-primary align" onClick={() => handleOneLeagueById(idLeague)}>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default SoccerLeaguesFind;