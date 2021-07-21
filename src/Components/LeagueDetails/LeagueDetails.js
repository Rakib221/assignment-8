import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faVenusMars, faFacebook, faBrowser, faTwitter, github } from '@fortawesome/free-solid-svg-icons';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import YouTube from './youtube.png';
import backgroundImage from '../../footballStadium.jpg';
import './LeagueDetails.css';
const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [singleLeague, setSingleLeague] = useState([]);
    const loadLeaguesById = () => {
        const urlId = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(urlId)
            .then(response => response.json())
            .then(data => setSingleLeague(data.leagues[0]))
    };
    useEffect(loadLeaguesById, [leagueId]);
    const {strLogo, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strPoster, strYoutube, strFanart1} = singleLeague;
    let strCreateNewPoster;
    if (strPoster === null || "") {
        strCreateNewPoster = strFanart1;
    }
    else{
        strCreateNewPoster = strPoster;
    }
    console.log(singleLeague);
    console.log(singleLeague.strFacebook);
    return (
        <div>
            <div>
                <div style={{ height: '200px', backgroundImage: `url(${backgroundImage})` }}>
                    <div className="d-flex justify-content-center align-items-center alignLogo" >
                        <img style={{ width: '200px' }} src={strLogo} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div>
                    <div className="row mx-5">
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-8 displayG rounded" style={{ backgroundColor: 'blue' }}>
                            <div>
                                <h4 className="text-white">{strLeague}</h4>
                                <p className="text-white"><b>Foundation: {dateFirstEvent}</b></p>
                                <p className="text-white"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                                <p className="text-white"><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</p>
                                <p className="text-white"><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</p>
                            </div>
                            <div>
                                <img style={{ width: '150px' }} className="m-2 rounded" src={strCreateNewPoster} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="row mt-5 mx-5">
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-8" style={{ textAlign: 'justify' }}>
                            {strDescriptionEN}
                        </div>
                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">

                        </div>
                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                            <a target="_blank" href={strFacebook}><img style={{ width: '40px' }} src={Facebook} alt="" srcset="" /></a>
                            <a target="_blank" href={strYoutube}><img style={{ width: '40px' }} src={YouTube} alt="" srcset="" /></a>
                            <a target="_blank" href={strTwitter}><img style={{ width: '40px' }} src={Twitter} alt="" srcset="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;