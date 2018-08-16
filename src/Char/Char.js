import React from 'react';

const char = (props) => {
    const styles = {
        padding: '12px 20px',
        color: '#db3236',
        cursor: 'pointer',
        border: '.6px solid slateGrey',
        fontSize: '2em',
        margin: '8px 8px',
        borderRadius: '4px',
        display: 'inline-block'
    }

    return (
        <div style={styles} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;