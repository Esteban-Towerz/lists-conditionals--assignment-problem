import React from 'react';

const char = (props) => {
    const styles = {
        display: 'inline-block',
        border: '1px solid tomato',
        padding: '16px',
        color: 'tomato',
        margin: '16px',
        textAlign: 'center'
    }

    return (
        <div style={styles}>
            {props.character}
        </div>
    );
};

export default char;