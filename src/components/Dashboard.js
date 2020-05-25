import React from 'react'
import KeyChooser from './KeyChooser'
import KeyDisplay from './KeyDisplay'
import commonNotes from './KeyCompare'

class Dashboard extends React.Component {
    state = {
        keyChoice: ""
    }

    handleKeyChoice = (keyChoice) => {
        this.setState(() => ({ keyChoice }))
        console.log(this.state.keyChoice, "is in the state")
    }

    render() {
        return (
            <div>
                <KeyChooser handleKeyChoice={this.handleKeyChoice} />
                <KeyDisplay keyChoice={this.state.keyChoice} />
                {commonNotes}
            </div>
        )
    }
}

export default Dashboard


