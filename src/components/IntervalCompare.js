import React, { useState, useEffect } from 'react'
import { getFreq, getIntervalFromRatio } from './notes'

const IntervalCompare = ({ commonNotes, parentKeyChoice }) => {
    const [freqArray, setFreqArray] = useState([])

    useEffect(() => {
        let freqArrayStorage = ""
        let freqRatioStorage = []
        let intervalStorage = ""

        // Gets frequencies for each common note
        if (commonNotes) {freqArrayStorage = commonNotes.map(note => getFreq(note))}

        // Gets ratios for each common note freq divided by the root freq
        if (freqArrayStorage) { freqRatioStorage =
             freqArrayStorage.map(function(noteFreq) {
                let ratio = null

                 if ( noteFreq/(getFreq(parentKeyChoice)) > 1 ) {ratio = noteFreq/getFreq(parentKeyChoice)}
                 else if ( noteFreq/(getFreq(parentKeyChoice)) < 1 ) {ratio = 1/(noteFreq/getFreq(parentKeyChoice))}
                 else if ( noteFreq/(getFreq(parentKeyChoice)) === 1 ) {ratio = 1}
                
                 return parseFloat(ratio.toFixed(2))
             })
        }

        // Gets interval from ratio
        intervalStorage = freqRatioStorage.map(ratio => getIntervalFromRatio(ratio))

        // Sends JSX List to state for rendering
        if (commonNotes) {setFreqArray(intervalStorage.map((note) => <li class="list-group-item border-0">{note}</li>))}

    }, [commonNotes, parentKeyChoice])

    return (
        <div>
            {freqArray}
        </div>
    )
}

export default IntervalCompare

