import React from 'react';

const LeaguesCover = (props) => {
    console.log(props);
    return (
        <div>
            {props.lg.strSport}
        </div>
    );
};

export default LeaguesCover;