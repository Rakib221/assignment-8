import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faVenusMars} from '@fortawesome/free-solid-svg-icons';
import { IconContext } from 'react-icons';
import { FaFacebook, FaTwitter, FaYoutube,} from 'react-icons/fa';
import Male from './messi.jpg';
import Female from './Usa.jpg';
import backgroundImage from '../../footballStadium.jpg';
import './LeagueDetails.css';
const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [singleLeague, setSingleLeague] = useState([]);
    //load data for details
    const loadLeaguesById = () => {
        const urlId = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(urlId)
            .then(response => response.json())
            .then(data => setSingleLeague(data.leagues[0]))
    };
    useEffect(loadLeaguesById, [leagueId]);
    const {strLogo, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube} = singleLeague;
    // conditional image 
    let strPicture;
    if (strGender === 'Male') {
        strPicture = Male;
    }
    else{
        strPicture = Female;
    }
    // if strPoster is empty
    // let strCreateNewPoster;
    // if (singleLeague.strPoster === null || "") {
    //     strCreateNewPoster = singleLeague.strFanart1;
    // }
    // else{
    //     strCreateNewPoster = singleLeague.strPoster;
    // }
    // console.log(singleLeague);
    // console.log(singleLeague.strFacebook);
    return (
        <div>
            {/* provide design to icon */}
            <IconContext.Provider value={{size:'40px'}}>
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
                                <img style={{ width: '170px',height:'190px' }} className="m-2 rounded" src={strPicture} alt="" srcset="" />
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
                            <a className="mx-2" target="_blank" href={`${strFacebook}`}><FaFacebook/></a>
                            <a className="mx-2" target="_blank" href={strYoutube}><FaYoutube style={{color:'red'}}/></a>
                            <a className="mx-2" target="_blank" href={strTwitter}><FaTwitter/></a>
                        </div>
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
            </IconContext.Provider>
        </div>
    );
};

export default LeagueDetails;