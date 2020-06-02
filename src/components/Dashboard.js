import React from 'react'
import ComparisonKeyChooser from './ComparisonKeyChooser'
import Header from './Header'
import KeyCompare from './KeyCompare'
import RootKeyChooser from './RootKeyChooser'
import SharpFlatCheckbox from './SharpFlatCheckbox'

class Dashboard extends React.Component {
    state = {
        comparisonKeyChoice: "",
        joinSharpsAndFlats: false,
        rootKeyChoice: ""
    }

    handleRootKeyChoice = (rootKeyChoice) => {
        this.setState(() => ({ rootKeyChoice }))
    }

    handleComparisonKeyChoice = (comparisonKeyChoice) => {
        this.setState(() => ({ comparisonKeyChoice }))
    }

    handleSharpToggle = () => {
        this.setState(() => ({ joinSharpsAndFlats: !this.state.joinSharpsAndFlats }))
    }

    render() {
        return (
            <div>
                <Header />
                <RootKeyChooser handleRootKeyChoice={this.handleRootKeyChoice} />
                {this.state.rootKeyChoice ?
                    <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoice} rootKeyChoice={this.state.rootKeyChoice} />
                    : ""}
                {this.state.comparisonKeyChoice && this.state.rootKeyChoice ?
                    <KeyCompare
                        handleCommonNotes = {this.handleCommonNotes}
                        rootKeyChoice={this.state.rootKeyChoice}
                        comparisonKeyChoice={this.state.comparisonKeyChoice}
                    />
                    : ""}
                {this.state.comparisonKeyChoice && this.state.rootKeyChoice ?
                    <SharpFlatCheckbox
                        handleSharpToggle={this.handleSharpToggle}
                    />
                    : ""
                }
            </div>
        )
    }
}

export default Dashboard


