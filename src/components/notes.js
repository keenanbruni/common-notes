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
const cMajor = ["C", "D", "E", "F", "G", "A", "B"]
const gMajor = ["G", "A", "B", "C", "D", "E", "F#/Gb"]
const dMajor = ["D", "E", "F#/Gb", "G", "A", "B", "C#/Db"]
const aMajor = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"]
const eMajor = ["E", "F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D#/Eb"]
const bMajor = ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A#/Bb"]
const cFlatMajor = ["B/Cb", "C#/Db", "D#/Eb", "E/Fb", "F#/Gb", "G#/Ab", "A#/Bb"]
const gFlatMajor = ["F#/Gb", "G#/Ab", "A#/Bb", "B/Cb", "C#/Db", "D#/Eb", "F"]
const fSharpMajor = ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "E#/F"]
const dFlatMajor = ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "C"]
const cSharpMajor = ["C#/Db", "D#/Eb", "E#/F", "F#/Gb", "G#/Ab", "A#/Bb", "B#/C"]
const aFlatMajor = ["G#/Ab", "A#/Bb", "C", "Db", "D#/Eb", "F", "G"]
const eFlatMajor = ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"]
const bFlatMajor = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "A"]
const fMajor = ["F", "G", "A", "A#/Bb", "C", "D", "E"]

// Minor Scales (Flats and Sharps Joined)
const aMinor = ["A", "B", "C", "D", "E", "F", "G"]
const eMinor = ["E", "F#/Gb", "G", "A", "B", "C", "D"]
const bMinor = ["B", "C#/Db", "D", "E", "F#/Gb", "G", "A"]
const fSharpMinor = ["F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D", "E"]
const cSharpMinor = ["C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A", "B"]
const gSharpMinor = ["G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "E", "F#/Gb"]
const eFlatMinor = ["D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "B/Cb", "C#/Db"]
const bFlatMinor = ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab"]
const fMinor = ["F", "G", "G#/Ab", "A#/Bb", "C", "C#/Db", "D#/Eb"]
const cMinor = ["C", "D", "D#/Eb", "F", "G", "G#/Ab", "A#/Bb"]
const gMinor = ["G", "A", "A#/Bb", "C", "D", "D#/Eb", "F"]
const dMinor = ["D", "E", "F", "G", "A", "Bb", "C"]

// getNotes Function
export const getNotes = (keyChoice) => {
  if (keyChoice === "C") { return cMajor }
  else if (keyChoice === "C#") { return cSharpMajor }
  else if (keyChoice === "Db") { return dFlatMajor }
  else if (keyChoice === "D") { return dMajor }
  else if (keyChoice === "Eb") { return eFlatMajor }
  else if (keyChoice === "E") { return eMajor }
  else if (keyChoice === "F") { return fMajor }
  else if (keyChoice === "F#") { return fSharpMajor }
  else if (keyChoice === "Gb") { return gFlatMajor }
  else if (keyChoice === "G") { return gMajor }
  else if (keyChoice === "Ab") { return aFlatMajor }
  else if (keyChoice === "A") { return aMajor }
  else if (keyChoice === "Bb") { return bFlatMajor }
  else if (keyChoice === "B") { return bMajor }
  else if (keyChoice === "Cb") { return cFlatMajor }
  else if (keyChoice === "C minor") { return cMinor }
  else if (keyChoice === "C# minor") { return cSharpMinor }
  else if (keyChoice === "D minor") { return dMinor }
  else if (keyChoice === "Eb minor") { return eFlatMinor }
  else if (keyChoice === "E minor") { return eMinor }
  else if (keyChoice === "F minor") { return fMinor }
  else if (keyChoice === "F# minor") { return fSharpMinor }
  else if (keyChoice === "G minor") { return gMinor }
  else if (keyChoice === "G# minor") { return gSharpMinor }
  else if (keyChoice === "A minor") { return aMinor }
  else if (keyChoice === "Bb minor") { return bFlatMinor }
  else if (keyChoice === "B minor") { return bMinor }
}

// getFrequencies Function
export const getFreq = (keyChoice) => {
  if (keyChoice === "C" || keyChoice === "C minor") { return 261.63 }
  else if (keyChoice === "C#/Db" || keyChoice === "C#" || keyChoice === "Db" || keyChoice === "C# minor") { return 277.18 }
  else if (keyChoice === "D" || keyChoice === "D minor") { return 293.67 }
  else if (keyChoice === "D#/Eb" || keyChoice === "D#" || keyChoice === "Eb" || keyChoice === "Eb minor") { return 311.13 }
  else if (keyChoice === "E" || keyChoice === "E minor") { return 329.63 }
  else if (keyChoice === "F" || keyChoice === "F minor") { return 349.23 }
  else if (keyChoice === "F#/Gb" || keyChoice === "F#" || keyChoice === "Gb" || keyChoice === "F# minor") { return 369.99 }
  else if (keyChoice === "G" || keyChoice === "G minor") { return 392 }
  else if (keyChoice === "G#/Ab" || keyChoice === "G#" || keyChoice === "Ab" || keyChoice === "G# minor") { return 415.31 }
  else if (keyChoice === "A" || keyChoice === "A minor") { return 440 }
  else if (keyChoice === "A#/Bb" || keyChoice === "A#" || keyChoice === "Bb" || keyChoice === "Bb minor") { return 466.16 }
  else if (keyChoice === "B/Cb" || keyChoice === "B" || keyChoice === "Cb" || keyChoice === "B minor") { return 493.88 }
}

// getIntervalFromFreq Function
export const getIntervalFromRatio = (ratio) => {
  if ((ratio === 1) || (ratio === 2) || (ratio === 0.5)) { return "I" }
  else if ((ratio === 1.06) || (ratio === 0.94)) { return "minor II" }
  else if ((ratio === 1.12) || (ratio === 0.89)) { return "major II" }
  else if ((ratio === 1.19) || (ratio === 0.84)) { return "minor III" }
  else if ((ratio === 1.26) || (ratio === 0.79)) { return "major III" }
  else if ((ratio === 1.33) || (ratio === 0.75)) { return "perfect IV" }
  else if ((ratio === 1.41) || (ratio === 0.71)) { return "tritone" }
  else if ((ratio === 1.5) || (ratio === 0.67)) { return "perfect V" }
  else if ((ratio === 1.59) || (ratio === 0.63)) { return "minor VI" }
  else if ((ratio === 1.68) || (ratio === 0.59)) { return "major VI" }
  else if ((ratio === 1.78) || (ratio === 0.56)) { return "minor VII" }
  else if ((ratio === 1.89) || (ratio === 0.53)) { return "major VII" }
}