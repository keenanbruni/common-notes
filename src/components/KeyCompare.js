import React from 'react'
import CommonNotes from './CommonNotes'
import { getNotes } from './notes'

export default class KeyCompare extends React.Component {
    state = {
        commonNotesOne: [],
        commonNotesTwo: [],
        commonNotesThree: []
    }

    componentDidMount() {
        // Sets initial commonNotesOne array
        let commonNotesStorage = []

        const compareKeys = (parent) => {
            const keysToCompare = []
            keysToCompare.push(parent || getNotes(this.props.rootKeyChoice), getNotes(this.props.comparisonKeyChoice))
            const commonNotes = keysToCompare.reduce((p, c) => p.filter(e => c.includes(e)))
            commonNotesStorage = commonNotes
        }

        if (this.props.rootKeyChoice && this.props.comparisonKeyChoice) {
            compareKeys()
            // this.props.handleInitialCommonNotes(commonNotesStorage)
            this.setState({ commonNotesOne: commonNotesStorage })
        }

    }

    componentDidUpdate(prevProps, prevState) {
        // Updates commonNotesOne array
        if (this.props.comparisonKeyChoice !== prevProps.comparisonKeyChoice || this.props.rootKeyChoice !== prevProps.rootKeyChoice) {
            let commonNotesStorage = []

            const compareKeys = (parent) => {
                const keysToCompare = []
                keysToCompare.push(parent || getNotes(this.props.rootKeyChoice), getNotes(this.props.comparisonKeyChoice))
                const commonNotes = keysToCompare.reduce((p, c) => p.filter(e => c.includes(e)))
                commonNotesStorage = commonNotes
            }

            if (this.state.commonNotesOne) {
                compareKeys()
                this.setState({ commonNotesOne: commonNotesStorage })
            }
        }

        // Populates commonNotesTwo array
        if (this.props.comparisonKeyChoiceTwo !== prevProps.comparisonKeyChoiceTwo || this.props.comparisonKeyChoice !== prevProps.comparisonKeyChoice) {
            let commonNotesStorage = []

            const compareKeys = () => {
                const keysToCompare = []
                keysToCompare.push(getNotes(this.props.comparisonKeyChoice), getNotes(this.props.comparisonKeyChoiceTwo))
                const commonNotes = keysToCompare.reduce((p, c) => p.filter(e => c.includes(e)))
                commonNotesStorage = commonNotes
            }

            compareKeys()
            this.setState({ commonNotesTwo: commonNotesStorage })
        }

        // Populates commonNotesThree array
        if (this.props.comparisonKeyChoiceThree !== prevProps.comparisonKeyChoiceThree || (this.props.comparisonKeyChoiceTwo !== prevProps.comparisonKeyChoiceTwo && this.props.comparisonKeyChoiceThree)) {
            let commonNotesStorage = []

            const compareKeys = () => {
                const keysToCompare = []
                keysToCompare.push(getNotes(this.props.comparisonKeyChoiceTwo), getNotes(this.props.comparisonKeyChoiceThree))
                const commonNotes = keysToCompare.reduce((p, c) => p.filter(e => c.includes(e)))
                commonNotesStorage = commonNotes
            }

            compareKeys()
            this.setState({ commonNotesThree: commonNotesStorage })
        }
    }

    render() {
        return (
            <div>
                <p>
                    <CommonNotes
                        commonNotesOne={this.state.commonNotesOne}
                        commonNotesTwo={this.state.commonNotesTwo}
                        commonNotesThree={this.state.commonNotesThree}
                    />
                </p>
            </div>
        )
    }

}

// Finds common notes between 4 chords

// let keysToCompare = []

// keysToCompare.push(cMajor, aMinor, dMinor, gMajor)

// const commonNotes = keysToCompare.reduce((p,c) => p.filter(e => c.includes(e)));

// Identifies which interval each note is in reference to chord being played
// C Major: C (I), D, (II), E (III), G (V), A (VI)
// A Minor: C (III), D (IV), E (V), G (VII), A (I)
// D Minor: C (VII), D (I), E (II), G (IV), A (V)
// G Major: C (IV), D (V), E (VI), G (I), A (II)

// Reduces answers down to the one, third, fifth, and seventh, if applicable. Note that not even C hits this criteria all the way through, because C is only a IV for G Major.
// C Major: C (I), E (III), G (V)
// A Minor: A (I), C (III), E (V), G (VII)
// D Minor: D (I), A (V), C (VII)
// G Major: G (I), D (V)
