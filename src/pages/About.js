import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {JSON.stringify(query)}
        </div>
    );
};

export default About;