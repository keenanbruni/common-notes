import React from 'react'

const CommonNotes = (props) => {
    const commonNotes = props.commonNotes
    const listItems = commonNotes.map((note) =>
        <li class="list-group-item">{note}</li>
    )
    return (
        <div>
            <ul class="list-group list-group-flush">{listItems}</ul>
        </div>
    )
}

export default CommonNotes