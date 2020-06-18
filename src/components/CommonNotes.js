import React, { useState, useEffect } from 'react'

const CommonNotes = ({commonNotesOne, commonNotesTwo, commonNotesThree, handleCommonNotes}) => {
    const [finalCommonNotesArray, setFinalCommonNotes] = useState([])

    useEffect(() => {
        // Compares remaining 2 common notes arrays and sets finalCommonNotes array

        let commonNotesStorageOne = []
        let commonNotesStorageTwo = []
        let finalCommonNoteReductionArray = []

        commonNotesStorageOne.push(
            commonNotesOne,
            commonNotesTwo
        )
        commonNotesStorageTwo.push(
            commonNotesTwo,
            commonNotesThree
        )

        const commonNotesReduceOne = commonNotesStorageOne.reduce((parent, child) => parent.filter(instance => child.includes(instance)))
        const commonNotesReduceTwo = commonNotesStorageTwo.reduce((p, c) => p.filter(e => c.includes(e)))

        finalCommonNoteReductionArray.push(commonNotesReduceOne, commonNotesReduceTwo)
        const finalCommonNotes = finalCommonNoteReductionArray.reduce((p, c) => p.filter(e => c.includes(e)))
        setFinalCommonNotes(finalCommonNotes)
        handleCommonNotes(finalCommonNotes)

    }, [commonNotesOne, commonNotesTwo, commonNotesThree, handleCommonNotes])

    return (
        <div>
            {finalCommonNotesArray.map((note) => <li class="list-group-item border-0">{note}</li>)}
        </div>
    )
}

export default CommonNotes




















// export default class CommonNotes extends React.Component {
//     state = {
//         finalCommonNotes: ""
//     }

//     componentDidMount() {
//         let commonNotesStorageOne = []
//         let commonNotesStorageTwo = []
//         let finalCommonNoteReductionArray = []

//         commonNotesStorageOne.push(
//             this.props.commonNotesOne,
//             this.props.commonNotesTwo
//         )
//         commonNotesStorageTwo.push(
//             this.props.commonNotesTwo,
//             this.props.commonNotesThree
//         )

//         const commonNotesReduceOne = commonNotesStorageOne.reduce((parent, child) => parent.filter(instance => child.includes(instance)))
//         const commonNotesReduceTwo = commonNotesStorageTwo.reduce((p, c) => p.filter(e => c.includes(e)))

//         finalCommonNoteReductionArray.push(commonNotesReduceOne, commonNotesReduceTwo)
//         const finalCommonNotes = finalCommonNoteReductionArray.reduce((p, c) => p.filter(e => c.includes(e)))
//         this.setState({ finalCommonNotes })
//     }

//     componentDidUpdate(prevProps) {
//         // Fires handleCommonNotes on commonality update
//         if (this.props.commonNotesOne !== prevProps.commonNotesOne || this.props.commonNotesTwo !== prevProps.commonNotesTwo || this.props.commonNotesThree || prevProps.commonNotesThree) {

//             let commonNotesStorageOne = []
//             let commonNotesStorageTwo = []
//             let finalCommonNoteReductionArray = []

//             commonNotesStorageOne.push(
//                 this.props.commonNotesOne,
//                 this.props.commonNotesTwo
//             )
//             commonNotesStorageTwo.push(
//                 this.props.commonNotesTwo,
//                 this.props.commonNotesThree
//             )

//             const commonNotesReduceOne = commonNotesStorageOne.reduce((parent, child) => parent.filter(instance => child.includes(instance)))
//             const commonNotesReduceTwo = commonNotesStorageTwo.reduce((p, c) => p.filter(e => c.includes(e)))

//             finalCommonNoteReductionArray.push(commonNotesReduceOne, commonNotesReduceTwo)
//             const finalCommonNotes = finalCommonNoteReductionArray.reduce((p, c) => p.filter(e => c.includes(e)))
//             this.setState({ finalCommonNotes })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.finalCommonNotes.map((note) => <li class="list-group-item border-0">{note}</li>)}
//             </div>
//         )
//     }
// }



