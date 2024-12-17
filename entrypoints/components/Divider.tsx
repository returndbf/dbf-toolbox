import React from 'react';

const Divider = ({bgColor}:{bgColor:string}) => {
    return (
        <div style={{width:'100%',height:'0.8px',backgroundColor:bgColor,opacity:0.4}}>

        </div>
    );
};

export default Divider;