import React from 'react'
import { cMajor, cSharpMajor, dFlatMajor, dMajor, eFlatMajor, eMajor, fMajor, fSharpMajor, gFlatMajor, gMajor, aFlatMajor, aMajor, bFlatMajor, bMajor, cFlatMajor, cMinor, cSharpMinor, dMinor, eFlatMinor, eMinor, fMinor, fSharpMinor, gMinor, gSharpMinor, aMinor, bFlatMinor, bMinor } from './notes'

export default class KeyCompare extends React.Component {
    state = {
        rootKeyArray: [],
        commonNotes: [],
        comparisonKeyArray: []
    }

    handleCommonNotes = (commonNotes) => {
        this.props.handleCommonNotes(commonNotes)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let rootKeyArrayStorage = []
        let comparisonKeyArrayStorage = []

        const setRootKeyArray = () => {
            if (nextProps.rootKeyChoice === "C") { rootKeyArrayStorage = cMajor }
            else if (nextProps.rootKeyChoice === "C#") { rootKeyArrayStorage = cSharpMajor  }
            else if (nextProps.rootKeyChoice === "Db") { rootKeyArrayStorage = dFlatMajor }
            else if (nextProps.rootKeyChoice === "D") { rootKeyArrayStorage = dMajor }
            else if (nextProps.rootKeyChoice === "Eb") { rootKeyArrayStorage = eFlatMajor }
            else if (nextProps.rootKeyChoice === "E") { rootKeyArrayStorage = eMajor }
            else if (nextProps.rootKeyChoice === "F") { rootKeyArrayStorage = fMajor }
            else if (nextProps.rootKeyChoice === "F#") { rootKeyArrayStorage = fSharpMajor }
            else if (nextProps.rootKeyChoice === "Gb") { rootKeyArrayStorage = gFlatMajor }
            else if (nextProps.rootKeyChoice === "G") { rootKeyArrayStorage = gMajor }
            else if (nextProps.rootKeyChoice === "Ab") { rootKeyArrayStorage = aFlatMajor }
            else if (nextProps.rootKeyChoice === "A") { rootKeyArrayStorage = aMajor }
            else if (nextProps.rootKeyChoice === "Bb") { rootKeyArrayStorage = bFlatMajor }
            else if (nextProps.rootKeyChoice === "B") { rootKeyArrayStorage = bMajor }
            else if (nextProps.rootKeyChoice === "Cb") { rootKeyArrayStorage = cFlatMajor }
            else if (nextProps.rootKeyChoice === "C minor") { rootKeyArrayStorage = cMinor }
            else if (nextProps.rootKeyChoice === "C# minor") { rootKeyArrayStorage = cSharpMinor }
            else if (nextProps.rootKeyChoice === "D minor") { rootKeyArrayStorage = dMinor }
            else if (nextProps.rootKeyChoice === "Eb minor") { rootKeyArrayStorage = eFlatMinor }
            else if (nextProps.rootKeyChoice === "E minor") { rootKeyArrayStorage = eMinor }
            else if (nextProps.rootKeyChoice === "F minor") { rootKeyArrayStorage = fMinor }
            else if (nextProps.rootKeyChoice === "F# minor") { rootKeyArrayStorage = fSharpMinor }
            else if (nextProps.rootKeyChoice === "G minor") { rootKeyArrayStorage = gMinor }
            else if (nextProps.rootKeyChoice === "G# minor") { rootKeyArrayStorage = gSharpMinor }
            else if (nextProps.rootKeyChoice === "A minor") { rootKeyArrayStorage = aMinor }
            else if (nextProps.rootKeyChoice === "Bb minor") { rootKeyArrayStorage = bFlatMinor }
            else if (nextProps.rootKeyChoice === "B minor") { rootKeyArrayStorage = bMinor }
        }
        const setComparisonKeyArray = () => {
            if (nextProps.comparisonKeyChoice === "C") { comparisonKeyArrayStorage = cMajor }
            else if (nextProps.comparisonKeyChoice === "C#") { comparisonKeyArrayStorage = cSharpMajor }
            else if (nextProps.comparisonKeyChoice === "Db") { comparisonKeyArrayStorage = dFlatMajor }
            else if (nextProps.comparisonKeyChoice === "D") { comparisonKeyArrayStorage = dMajor }
            else if (nextProps.comparisonKeyChoice === "Eb") { comparisonKeyArrayStorage = eFlatMajor }
            else if (nextProps.comparisonKeyChoice === "E") { comparisonKeyArrayStorage = eMajor }
            else if (nextProps.comparisonKeyChoice === "F") { comparisonKeyArrayStorage = fMajor }
            else if (nextProps.comparisonKeyChoice === "F#") { comparisonKeyArrayStorage = fSharpMajor }
            else if (nextProps.comparisonKeyChoice === "Gb") { comparisonKeyArrayStorage =   gFlatMajor }
            else if (nextProps.comparisonKeyChoice === "G") { comparisonKeyArrayStorage = gMajor }
            else if (nextProps.comparisonKeyChoice === "Ab") { comparisonKeyArrayStorage = aFlatMajor }
            else if (nextProps.comparisonKeyChoice === "A") { comparisonKeyArrayStorage = aMajor }
            else if (nextProps.comparisonKeyChoice === "Bb") { comparisonKeyArrayStorage = bFlatMajor }
            else if (nextProps.comparisonKeyChoice === "B") { comparisonKeyArrayStorage = bMajor }
            else if (nextProps.comparisonKeyChoice === "Cb") { comparisonKeyArrayStorage = cFlatMajor }
            else if (nextProps.comparisonKeyChoice === "C minor") { comparisonKeyArrayStorage = cMinor }
            else if (nextProps.comparisonKeyChoice === "C# minor") { comparisonKeyArrayStorage =  cSharpMinor }
            else if (nextProps.comparisonKeyChoice === "D minor") { comparisonKeyArrayStorage = dMinor }
            else if (nextProps.comparisonKeyChoice === "Eb minor") { comparisonKeyArrayStorage = eFlatMinor }
            else if (nextProps.comparisonKeyChoice === "E minor") { comparisonKeyArrayStorage = eMinor }
            else if (nextProps.comparisonKeyChoice === "F minor") { comparisonKeyArrayStorage = fMinor }
            else if (nextProps.comparisonKeyChoice === "F# minor") { comparisonKeyArrayStorage = fSharpMinor }
            else if (nextProps.comparisonKeyChoice === "G minor") { comparisonKeyArrayStorage = gMinor }
            else if (nextProps.comparisonKeyChoice === "G# minor") { comparisonKeyArrayStorage = gSharpMinor }
            else if (nextProps.comparisonKeyChoice === "A minor") { comparisonKeyArrayStorage = aMinor }
            else if (nextProps.comparisonKeyChoice === "Bb minor") { comparisonKeyArrayStorage = bFlatMinor }
            else if (nextProps.comparisonKeyChoice === "B minor") { comparisonKeyArrayStorage = bMinor }
        }

        if (nextProps.rootKeyChoice && nextProps.comparisonKeyChoice){
            setRootKeyArray()
            setComparisonKeyArray()
            return {
                rootKeyArray : rootKeyArrayStorage,
                comparisonKeyArray : comparisonKeyArrayStorage
            }
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.rootKeyChoice ? this.props.rootKeyChoice : "ANGUS"}</p>
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
