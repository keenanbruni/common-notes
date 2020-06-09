// import React from 'react'
// import ReactDOM from 'react-dom'

// // Keys Follow The Circle of Fifths, Major then Minor

// // Major Scales
// export const cMajor = ["C", "D", "E", "F", "G", "A", "B"]
// export const gMajor = ["G", "A", "B", "C", "D", "E", "F#"]
// export const dMajor = ["D", "E", "F#", "G", "A", "B", "C#"]
// export const aMajor = ["A", "B", "C#", "D", "E", "F#", "G#"]
// export const eMajor = ["E", "F#", "G#", "A", "B", "C#", "D#"]
// export const bMajor = ["B", "C#", "D#", "E", "F#", "G#", "A#"]
// export const cFlatMajor = ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"]
// export const gFlatMajor = ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"]
// export const fSharpMajor = ["F#", "G#", "A#", "B", "C#", "D#", "E#"]
// export const dFlatMajor = ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"]
// export const cSharpMajor = ["C#", "D#", "E#", "F#", "G#", "A#", "B#"]
// export const aFlatMajor = ["Ab", "Bb", "C", "Db", "Eb", "F", "G"]
// export const eFlatMajor = ["Eb", "F", "G", "Ab", "Bb", "C", "D"]
// export const bFlatMajor = ["Bb", "C", "D", "Eb", "F", "G", "A"]
// export const fMajor = ["F", "G", "A", "Bb", "C", "D", "E"]

// // Minor Scales
// export const aMinor = ["A", "B", "C", "D", "E", "F", "G"]
// export const eMinor = ["E", "F#", "G", "A", "B", "C", "D"]
// export const bMinor = ["B", "C#", "D", "E", "F#", "G", "A"]
// export const fSharpMinor = ["F#", "G#", "A", "B", "C#", "D", "E"]
// export const cSharpMinor = ["C#", "D#", "E", "F#", "G#", "A", "B"]
// export const gSharpMinor = ["G#", "A#", "B", "C#", "D#", "E", "F#"]
// export const eFlatMinor = ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"]
// export const bFlatMinor = ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"]
// export const fMinor = ["F", "G", "Ab", "Bb", "C", "Db", "Eb"]
// export const cMinor = ["C", "D", "Eb", "F", "G", "Ab", "Bb"]
// export const gMinor = ["G", "A", "Bb", "C", "D", "Eb", "F"]
// export const dMinor = ["D", "E", "F", "G", "A", "Bb", "C"]

// Major Scales (Flats and Sharps Joined - Could be a toggle option. Start with storage consts for each key, depending on props choice, containers will be filled with appropriate notes)
export const cMajor = ["C", "D", "E", "F", "G", "A", "B"]
export const gMajor = ["G", "A", "B", "C", "D", "E", "F#/Gb"]
export const dMajor = ["D", "E", "F#/Gb", "G", "A", "B", "C#/Db"]
export const aMajor = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"]
export const eMajor = ["E", "F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D#/Eb"]
export const bMajor = ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A#/Bb"]
export const cFlatMajor = ["B/Cb", "C#/Db", "D#/Eb", "E/Fb", "F#/Gb", "G#/Ab", "A#/Bb"]
export const gFlatMajor = ["F#/Gb", "G#/Ab", "A#/Bb", "B/Cb", "C#/Db", "D#/Eb", "F"]
export const fSharpMajor = ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "E#/F"]
export const dFlatMajor = ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "C"]
export const cSharpMajor = ["C#/Db", "D#/Eb", "E#/F", "F#/Gb", "G#/Ab", "A#/Bb", "B#/C"]
export const aFlatMajor = ["G#/Ab", "A#/Bb", "C", "Db", "D#/Eb", "F", "G"]
export const eFlatMajor = ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"]
export const bFlatMajor = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "A"]
export const fMajor = ["F", "G", "A", "A#/Bb", "C", "D", "E"]

// Minor Scales (Flats and Sharps Joined)
export const aMinor = ["A", "B", "C", "D", "E", "F", "G"]
export const eMinor = ["E", "F#/Gb", "G", "A", "B", "C", "D"]
export const bMinor = ["B", "C#/Db", "D", "E", "F#/Gb", "G", "A"]
export const fSharpMinor = ["F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D", "E"]
export const cSharpMinor = ["C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A", "B"]
export const gSharpMinor = ["G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "E", "F#/Gb"]
export const eFlatMinor = ["D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "B/Cb", "C#/Db"]
export const bFlatMinor = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"]
export const fMinor = ["F", "G", "G#/Ab", "A#/Bb", "C", "C#/Db", "D#/Eb"]
export const cMinor = ["C", "D", "D#/Eb", "F", "G", "G#/Ab", "A#/Bb"]
export const gMinor = ["G", "A", "A#/Bb", "C", "D", "D#/Eb", "F"]
export const dMinor = ["D", "E", "F", "G", "A", "Bb", "C"]

// Notes + Frequencies
export const noteFreqs = [
    { note:"C", frequency: 261.63 },
    { note:"C#", frequency: 277.18 }, 
    { note:"D", frequency: 293.67 },
    { note:"D#", frequency: 311.13 },
    { note:"E", frequency: 329.63 },
    { note:"F", frequency: 349.23 },
    { note:"F#", frequency: 369.99 },
    { note:"G", frequency: 392 },
    { note:"G#", frequency: 415.31 },
    { note:"A", frequency: 440 },
    { note:"A#", frequency: 466.16 },
    { note:"B", frequency: 493.88 }
  ]
