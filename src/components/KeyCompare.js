import React from 'react'
import CommonNotes from './CommonNotes'
import { cMajor, cSharpMajor, dFlatMajor, dMajor, eFlatMajor, eMajor, fMajor, fSharpMajor, gFlatMajor, gMajor, aFlatMajor, aMajor, bFlatMajor, bMajor, cFlatMajor, cMinor, cSharpMinor, dMinor, eFlatMinor, eMinor, fMinor, fSharpMinor, gMinor, gSharpMinor, aMinor, bFlatMinor, bMinor } from './notes'

export default class KeyCompare extends React.Component {
    state = {
        rootKeyArray: [],
        commonNotes: [],
        comparisonKeyArray: [],
    }

    componentDidMount() {
        let rootKeyArrayStorage = []
        let comparisonKeyArrayStorage = []
        let commonNotesStorage = []

        const setRootKeyArray = () => {
            if (this.props.rootKeyChoice === "C") { rootKeyArrayStorage = cMajor }
            else if (this.props.rootKeyChoice === "C#") { rootKeyArrayStorage = cSharpMajor }
            else if (this.props.rootKeyChoice === "Db") { rootKeyArrayStorage = dFlatMajor }
            else if (this.props.rootKeyChoice === "D") { rootKeyArrayStorage = dMajor }
            else if (this.props.rootKeyChoice === "Eb") { rootKeyArrayStorage = eFlatMajor }
            else if (this.props.rootKeyChoice === "E") { rootKeyArrayStorage = eMajor }
            else if (this.props.rootKeyChoice === "F") { rootKeyArrayStorage = fMajor }
            else if (this.props.rootKeyChoice === "F#") { rootKeyArrayStorage = fSharpMajor }
            else if (this.props.rootKeyChoice === "Gb") { rootKeyArrayStorage = gFlatMajor }
            else if (this.props.rootKeyChoice === "G") { rootKeyArrayStorage = gMajor }
            else if (this.props.rootKeyChoice === "Ab") { rootKeyArrayStorage = aFlatMajor }
            else if (this.props.rootKeyChoice === "A") { rootKeyArrayStorage = aMajor }
            else if (this.props.rootKeyChoice === "Bb") { rootKeyArrayStorage = bFlatMajor }
            else if (this.props.rootKeyChoice === "B") { rootKeyArrayStorage = bMajor }
            else if (this.props.rootKeyChoice === "Cb") { rootKeyArrayStorage = cFlatMajor }
            else if (this.props.rootKeyChoice === "C minor") { rootKeyArrayStorage = cMinor }
            else if (this.props.rootKeyChoice === "C# minor") { rootKeyArrayStorage = cSharpMinor }
            else if (this.props.rootKeyChoice === "D minor") { rootKeyArrayStorage = dMinor }
            else if (this.props.rootKeyChoice === "Eb minor") { rootKeyArrayStorage = eFlatMinor }
            else if (this.props.rootKeyChoice === "E minor") { rootKeyArrayStorage = eMinor }
            else if (this.props.rootKeyChoice === "F minor") { rootKeyArrayStorage = fMinor }
            else if (this.props.rootKeyChoice === "F# minor") { rootKeyArrayStorage = fSharpMinor }
            else if (this.props.rootKeyChoice === "G minor") { rootKeyArrayStorage = gMinor }
            else if (this.props.rootKeyChoice === "G# minor") { rootKeyArrayStorage = gSharpMinor }
            else if (this.props.rootKeyChoice === "A minor") { rootKeyArrayStorage = aMinor }
            else if (this.props.rootKeyChoice === "Bb minor") { rootKeyArrayStorage = bFlatMinor }
            else if (this.props.rootKeyChoice === "B minor") { rootKeyArrayStorage = bMinor }
        }
        const setComparisonKeyArray = () => {
            if (this.props.comparisonKeyChoice === "C") { comparisonKeyArrayStorage = cMajor }
            else if (this.props.comparisonKeyChoice === "C#") { comparisonKeyArrayStorage = cSharpMajor }
            else if (this.props.comparisonKeyChoice === "Db") { comparisonKeyArrayStorage = dFlatMajor }
            else if (this.props.comparisonKeyChoice === "D") { comparisonKeyArrayStorage = dMajor }
            else if (this.props.comparisonKeyChoice === "Eb") { comparisonKeyArrayStorage = eFlatMajor }
            else if (this.props.comparisonKeyChoice === "E") { comparisonKeyArrayStorage = eMajor }
            else if (this.props.comparisonKeyChoice === "F") { comparisonKeyArrayStorage = fMajor }
            else if (this.props.comparisonKeyChoice === "F#") { comparisonKeyArrayStorage = fSharpMajor }
            else if (this.props.comparisonKeyChoice === "Gb") { comparisonKeyArrayStorage = gFlatMajor }
            else if (this.props.comparisonKeyChoice === "G") { comparisonKeyArrayStorage = gMajor }
            else if (this.props.comparisonKeyChoice === "Ab") { comparisonKeyArrayStorage = aFlatMajor }
            else if (this.props.comparisonKeyChoice === "A") { comparisonKeyArrayStorage = aMajor }
            else if (this.props.comparisonKeyChoice === "Bb") { comparisonKeyArrayStorage = bFlatMajor }
            else if (this.props.comparisonKeyChoice === "B") { comparisonKeyArrayStorage = bMajor }
            else if (this.props.comparisonKeyChoice === "Cb") { comparisonKeyArrayStorage = cFlatMajor }
            else if (this.props.comparisonKeyChoice === "C minor") { comparisonKeyArrayStorage = cMinor }
            else if (this.props.comparisonKeyChoice === "C# minor") { comparisonKeyArrayStorage = cSharpMinor }
            else if (this.props.comparisonKeyChoice === "D minor") { comparisonKeyArrayStorage = dMinor }
            else if (this.props.comparisonKeyChoice === "Eb minor") { comparisonKeyArrayStorage = eFlatMinor }
            else if (this.props.comparisonKeyChoice === "E minor") { comparisonKeyArrayStorage = eMinor }
            else if (this.props.comparisonKeyChoice === "F minor") { comparisonKeyArrayStorage = fMinor }
            else if (this.props.comparisonKeyChoice === "F# minor") { comparisonKeyArrayStorage = fSharpMinor }
            else if (this.props.comparisonKeyChoice === "G minor") { comparisonKeyArrayStorage = gMinor }
            else if (this.props.comparisonKeyChoice === "G# minor") { comparisonKeyArrayStorage = gSharpMinor }
            else if (this.props.comparisonKeyChoice === "A minor") { comparisonKeyArrayStorage = aMinor }
            else if (this.props.comparisonKeyChoice === "Bb minor") { comparisonKeyArrayStorage = bFlatMinor }
            else if (this.props.comparisonKeyChoice === "B minor") { comparisonKeyArrayStorage = bMinor }
        }
        const compareKeys = (parent) => {
            const keysToCompare = []
            keysToCompare.push(parent || rootKeyArrayStorage, comparisonKeyArrayStorage)
            const commonNotes = keysToCompare.reduce((p, c) => p.filter(e => c.includes(e)))
            commonNotesStorage = commonNotes
        }

        if (this.props.rootKeyChoice && this.props.comparisonKeyChoice) {
            setRootKeyArray()
            setComparisonKeyArray()
            compareKeys()
            this.props.handleInitialCommonNotes(commonNotesStorage)
            this.setState({ rootKeyArray: rootKeyArrayStorage, comparisonKeyArray: comparisonKeyArrayStorage, commonNotes: commonNotesStorage })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.comparisonKeyChoice !== prevProps.comparisonKeyChoice) {
            let comparisonKeyArrayStorage = []
            let commonNotesStorage = []

            const setComparisonKeyArray = () => {
                if (this.props.comparisonKeyChoice === "C") { comparisonKeyArrayStorage = cMajor }
                else if (this.props.comparisonKeyChoice === "C#") { comparisonKeyArrayStorage = cSharpMajor }
                else if (this.props.comparisonKeyChoice === "Db") { comparisonKeyArrayStorage = dFlatMajor }
                else if (this.props.comparisonKeyChoice === "D") { comparisonKeyArrayStorage = dMajor }
                else if (this.props.comparisonKeyChoice === "Eb") { comparisonKeyArrayStorage = eFlatMajor }
                else if (this.props.comparisonKeyChoice === "E") { comparisonKeyArrayStorage = eMajor }
                else if (this.props.comparisonKeyChoice === "F") { comparisonKeyArrayStorage = fMajor }
                else if (this.props.comparisonKeyChoice === "F#") { comparisonKeyArrayStorage = fSharpMajor }
                else if (this.props.comparisonKeyChoice === "Gb") { comparisonKeyArrayStorage = gFlatMajor }
                else if (this.props.comparisonKeyChoice === "G") { comparisonKeyArrayStorage = gMajor }
                else if (this.props.comparisonKeyChoice === "Ab") { comparisonKeyArrayStorage = aFlatMajor }
                else if (this.props.comparisonKeyChoice === "A") { comparisonKeyArrayStorage = aMajor }
                else if (this.props.comparisonKeyChoice === "Bb") { comparisonKeyArrayStorage = bFlatMajor }
                else if (this.props.comparisonKeyChoice === "B") { comparisonKeyArrayStorage = bMajor }
                else if (this.props.comparisonKeyChoice === "Cb") { comparisonKeyArrayStorage = cFlatMajor }
                else if (this.props.comparisonKeyChoice === "C minor") { comparisonKeyArrayStorage = cMinor }
                else if (this.props.comparisonKeyChoice === "C# minor") { comparisonKeyArrayStorage = cSharpMinor }
                else if (this.props.comparisonKeyChoice === "D minor") { comparisonKeyArrayStorage = dMinor }
                else if (this.props.comparisonKeyChoice === "Eb minor") { comparisonKeyArrayStorage = eFlatMinor }
                else if (this.props.comparisonKeyChoice === "E minor") { comparisonKeyArrayStorage = eMinor }
                else if (this.props.comparisonKeyChoice === "F minor") { comparisonKeyArrayStorage = fMinor }
                else if (this.props.comparisonKeyChoice === "F# minor") { comparisonKeyArrayStorage = fSharpMinor }
                else if (this.props.comparisonKeyChoice === "G minor") { comparisonKeyArrayStorage = gMinor }
                else if (this.props.comparisonKeyChoice === "G# minor") { comparisonKeyArrayStorage = gSharpMinor }
                else if (this.props.comparisonKeyChoice === "A minor") { comparisonKeyArrayStorage = aMinor }
                else if (this.props.comparisonKeyChoice === "Bb minor") { comparisonKeyArrayStorage = bFlatMinor }
                else if (this.props.comparisonKeyChoice === "B minor") { comparisonKeyArrayStorage = bMinor }
            }

            const compareKeys = (parent) => {
                const keysToCompare = []
                keysToCompare.push(parent, comparisonKeyArrayStorage)
                const commonNotes = keysToCompare.reduce((p, c) => p.filter(e => c.includes(e)))
                commonNotesStorage = commonNotes
            }

            if (this.props.currentCommonNotes) {
                const currentCommonNotes = this.props.currentCommonNotes
                setComparisonKeyArray()
                compareKeys(currentCommonNotes)
                this.setState({ comparisonKeyArray: comparisonKeyArrayStorage, commonNotes: commonNotesStorage })
                this.props.handleCommonNotes(commonNotesStorage)
            }
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.commonNotes ? <CommonNotes commonNotes={this.state.commonNotes} /> : "ANGUS"}</p>
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
