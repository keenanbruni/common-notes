import { cMajor, aMinor, dMinor, gMajor } from './notes'

// Finds common notes between 4 chords

let keysToCompare = []

keysToCompare.push(cMajor, aMinor, dMinor, gMajor)

const commonNotes = keysToCompare.reduce((p,c) => p.filter(e => c.includes(e)));

console.log(keysToCompare)

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

export default commonNotes