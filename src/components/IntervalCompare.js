import React from 'react'
import { getFreq } from './notes'

export default class IntervalCompare extends React.Component {
    state = {
        parentKey: "",
        compareKeyArray: "",
        freqArray: ""
    }

    componentDidMount () {
        const freqArray = this.props.commonNotes.map(note => getFreq(note))
        this.setState({ freqArray })
    }

    render() {
        return (
        <div>
            <p>{this.state.freqArray} </p>
        </div>         
        )
    }
}