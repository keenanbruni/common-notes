import React from 'react'
import KeyChooser from './KeyChooser'
import commonNotes from './KeyCompare'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            key: ""
        }
    }

    render() {
        return (
            <div>
                <KeyChooser />
                {commonNotes}
            </div>
        )
    }
}

export default Dashboard


