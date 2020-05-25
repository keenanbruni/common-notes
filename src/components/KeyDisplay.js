import React from 'react'

const KeyHeader = (props) => (
    <div>
        <h1>
            {props.keyChoice ? props.keyChoice : "No Key Chosen"}
        </h1>
    </div>
)

export default KeyHeader