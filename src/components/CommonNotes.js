import React from 'react'

const CommonNotes = (props) => {
    const commonNotesStorageOne = []
    const commonNotesStorageTwo = []
    const finalCommonNoteReductionArray = []
    commonNotesStorageOne.push(props.commonNotesOne, props.commonNotesTwo)
    commonNotesStorageTwo.push(props.commonNotesTwo, props.commonNotesThree)
    const commonNotesReduceOne = commonNotesStorageOne.reduce((parent, child) => parent.filter(instance => child.includes(instance)))
    const commonNotesReduceTwo = commonNotesStorageTwo.reduce((p, c) => p.filter(e => c.includes(e)))   
    finalCommonNoteReductionArray.push(commonNotesReduceOne, commonNotesReduceTwo)
    const finalCommonNotes = finalCommonNoteReductionArray.reduce((p, c) => p.filter(e => c.includes(e)))
    console.log(finalCommonNotes)

    const listItems = finalCommonNotes.map((note) =>
        <li class="list-group-item">{note}</li>
    )
    return (
        <div>
            <ul class="list-group list-group-flush">{listItems}</ul>
        </div>
    )
}

export default CommonNotes  