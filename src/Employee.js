import React from 'react';

const Employee = (props) => {
    const {name,id} = props;
    return (
        <div>
            <h2>Name: {name} ID: {id}</h2>
        </div>
    );
};

export default Employee;
