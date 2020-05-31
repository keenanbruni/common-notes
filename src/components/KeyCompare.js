import React from 'react'
import { cMajor, cSharpMajor, dFlatMajor, dMajor, eFlatMajor, eMajor, fMajor, fSharpMajor, gFlatMajor, gMajor, aFlatMajor, aMajor, bFlatMajor, bMajor, cFlatMajor, cMinor, cSharpMinor, dMinor, eFlatMinor, eMinor, fMinor, fSharpMinor, gMinor, gSharpMinor, aMinor, bFlatMinor, bMinor } from './notes'

export default class KeyCompare extends React.Component {
    state = {
        rootKeyArray: [],
        commonNotes: [],
        comparisonKeyArray: [],
        test: ""
    }

    handleCommonNotes = (commonNotes) => {
        this.props.handleCommonNotes(commonNotes)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.rootKeyChoice === "C") { return { rootKeyArray: cMajor } }
        else if (nextProps.rootKeyChoice === "C#") { return { rootKeyArray: cSharpMajor } }
        else if (nextProps.rootKeyChoice === "Db") { return { rootKeyArray: dFlatMajor } }
        else if (nextProps.rootKeyChoice === "D") { return { rootKeyArray: dMajor } }
        else if (nextProps.rootKeyChoice === "Eb") { return { rootKeyArray: eFlatMajor } }
        else if (nextProps.rootKeyChoice === "E") { return { rootKeyArray: eMajor } }
        else if (nextProps.rootKeyChoice === "F") { return { rootKeyArray: fMajor } }
        else if (nextProps.rootKeyChoice === "F#") { return { rootKeyArray: fSharpMajor } }
        else if (nextProps.rootKeyChoice === "Gb") { return { rootKeyArray: gFlatMajor } }
        else if (nextProps.rootKeyChoice === "G") { return { rootKeyArray: gMajor } }
        else if (nextProps.rootKeyChoice === "Ab") { return { rootKeyArray: aFlatMajor } }
        else if (nextProps.rootKeyChoice === "A") { return { rootKeyArray: aMajor } }
        else if (nextProps.rootKeyChoice === "Bb") { return { rootKeyArray: bFlatMajor } }
        else if (nextProps.rootKeyChoice === "B") { return { rootKeyArray: bMajor } }
        else if (nextProps.rootKeyChoice === "Cb") { return { rootKeyArray: cFlatMajor } }
        else if (nextProps.rootKeyChoice === "C minor") { return { rootKeyArray: cMinor } }
        else if (nextProps.rootKeyChoice === "C# minor") { return { rootKeyArray: cSharpMinor } }
        else if (nextProps.rootKeyChoice === "D minor") { return { rootKeyArray: dMinor } }
        else if (nextProps.rootKeyChoice === "Eb minor") { return { rootKeyArray: eFlatMinor } }
        else if (nextProps.rootKeyChoice === "E minor") { return { rootKeyArray: eMinor } }
        else if (nextProps.rootKeyChoice === "F minor") { return { rootKeyArray: fMinor } }
        else if (nextProps.rootKeyChoice === "F# minor") { return { rootKeyArray: fSharpMinor } }
        else if (nextProps.rootKeyChoice === "G minor") { return { rootKeyArray: gMinor } }
        else if (nextProps.rootKeyChoice === "G# minor") { return { rootKeyArray: gSharpMinor } }
        else if (nextProps.rootKeyChoice === "A minor") { return { rootKeyArray: aMinor } }
        else if (nextProps.rootKeyChoice === "Bb minor") { return { rootKeyArray: bFlatMinor } }
        else if (nextProps.rootKeyChoice === "B minor") { return { rootKeyArray: bMinor } }
        
        if (nextProps.comparisonKeyChoice === "C") { return { comparisonKeyArray: cMajor } }
        else if (nextProps.comparisonKeyChoice === "C#") { return { comparisonKeyArray: cSharpMajor } }
        else if (nextProps.comparisonKeyChoice === "Db") { return { comparisonKeyArray: dFlatMajor } }
        else if (nextProps.comparisonKeyChoice === "D") { return { comparisonKeyArray: dMajor } }
        else if (nextProps.comparisonKeyChoice === "Eb") { return { comparisonKeyArray: eFlatMajor } }
        else if (nextProps.comparisonKeyChoice === "E") { return { comparisonKeyArray: eMajor } }
        else if (nextProps.comparisonKeyChoice === "F") { return { comparisonKeyArray: fMajor } }
        else if (nextProps.comparisonKeyChoice === "F#") { return { comparisonKeyArray: fSharpMajor } }
        else if (nextProps.comparisonKeyChoice === "Gb") { return { comparisonKeyArray: gFlatMajor } }
        else if (nextProps.comparisonKeyChoice === "G") { return { comparisonKeyArray: gMajor } }
        else if (nextProps.comparisonKeyChoice === "Ab") { return { comparisonKeyArray: aFlatMajor } }
        else if (nextProps.comparisonKeyChoice === "A") { return { comparisonKeyArray: aMajor } }
        else if (nextProps.comparisonKeyChoice === "Bb") { return { comparisonKeyArray: bFlatMajor } }
        else if (nextProps.comparisonKeyChoice === "B") { return { comparisonKeyArray: bMajor } }
        else if (nextProps.comparisonKeyChoice === "Cb") { return { comparisonKeyArray: cFlatMajor } }
        else if (nextProps.comparisonKeyChoice === "C minor") { return { comparisonKeyArray: cMinor } }
        else if (nextProps.comparisonKeyChoice === "C# minor") { return { comparisonKeyArray: cSharpMinor } }
        else if (nextProps.comparisonKeyChoice === "D minor") { return { comparisonKeyArray: dMinor } }
        else if (nextProps.comparisonKeyChoice === "Eb minor") { return { comparisonKeyArray: eFlatMinor } }
        else if (nextProps.comparisonKeyChoice === "E minor") { return { comparisonKeyArray: eMinor } }
        else if (nextProps.comparisonKeyChoice === "F minor") { return { comparisonKeyArray: fMinor } }
        else if (nextProps.comparisonKeyChoice === "F# minor") { return { comparisonKeyArray: fSharpMinor } }
        else if (nextProps.comparisonKeyChoice === "G minor") { return { comparisonKeyArray: gMinor } }
        else if (nextProps.comparisonKeyChoice === "G# minor") { return { comparisonKeyArray: gSharpMinor } }
        else if (nextProps.comparisonKeyChoice === "A minor") { return { comparisonKeyArray: aMinor } }
        else if (nextProps.comparisonKeyChoice === "Bb minor") { return { comparisonKeyArray: bFlatMinor } }
        else if (nextProps.comparisonKeyChoice === "B minor") { return { comparisonKeyArray: bMinor } }
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
