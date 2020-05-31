import React from 'react'
import ComparisonKeyChooser from './ComparisonKeyChooser'
import RootKeyChooser from './RootKeyChooser'
import KeyCompare from './KeyCompare'

class Dashboard extends React.Component {
    state = {
        comparisonKeyChoice: "",
        rootKeyChoice: ""
    }

    handleRootKeyChoice = (rootKeyChoice) => {
        this.setState(() => ({ rootKeyChoice }))
    }

    handleComparisonKeyChoice = (comparisonKeyChoice) => {
        this.setState(() => ({ comparisonKeyChoice }))
    }

    render() {
        return (
            <div>
                <RootKeyChooser handleRootKeyChoice={this.handleRootKeyChoice} />
                <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoice} rootKeyChoice={this.state.rootKeyChoice} rootKeyChosen={this.state.rootKeyChosen}/>
                {this.state.comparisonKeyChoice && this.state.rootKeyChoice ? <KeyCompare rootKeyChoice={this.state.rootKeyChoice} comparisonKeyChoice={this.state.comparisonKeyChoice} /> : ""}
            </div>
        )
    }
}

export default Dashboard


