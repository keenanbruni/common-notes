import React from 'react'
import ComparisonKeyChooser from './ComparisonKeyChooser'
import Header from './Header'
import KeyCompare from './KeyCompare'
import RootKeyChooser from './RootKeyChooser'
import SharpFlatCheckbox from './SharpFlatCheckbox'

class Dashboard extends React.Component {
    state = {
        comparisonKeyChoice: "",
        comparisonKeyChoiceTwo: "",
        comparisonKeyChoiceThree: "",
        currentCommonNotes: [],
        joinSharpsAndFlats: true,
        rootKeyChoice: ""
    }

    handleRootKeyChoice = (rootKeyChoice) => {
        this.setState(() => ({ rootKeyChoice }))
    }

    handleComparisonKeyChoice = (comparisonKeyChoice) => {
        this.setState(() => ({ comparisonKeyChoice }))
    }

    handleComparisonKeyChoiceTwo = (comparisonKeyChoiceTwo) => {
        this.setState(() => ({ comparisonKeyChoiceTwo }))
    }

    handleComparisonKeyChoiceThree = (comparisonKeyChoiceThree) => {
        this.setState(() => ({ comparisonKeyChoiceThree }))
    }

    handleInitialCommonNotes = (commonNotes) => {
        this.setState(() => ({ currentCommonNotes: commonNotes }))
    }

    handleCommonNotes = (commonNotes) => {
        this.setState(() => ({ currentCommonNotes: commonNotes }))
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

                {this.state.comparisonKeyChoice ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoiceTwo} /> : ""}

                {this.state.comparisonKeyChoiceTwo ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoiceThree} /> : ""}

                {this.state.comparisonKeyChoiceThree
                    ? <KeyCompare
                        handleCommonNotes={this.handleCommonNotes}
                        comparisonKeyChoice={this.state.comparisonKeyChoiceThree}
                        currentCommonNotes={this.state.currentCommonNotes}
                        rootKeyChoice={this.state.rootKeyChoice} />
                    : this.state.comparisonKeyChoiceTwo
                        ? <KeyCompare
                            handleCommonNotes={this.handleCommonNotes}
                            comparisonKeyChoice={this.state.comparisonKeyChoiceTwo}
                            currentCommonNotes={this.state.currentCommonNotes}
                            rootKeyChoice={this.state.rootKeyChoice}
                        />
                        
                        : this.state.comparisonKeyChoice
                            ? <KeyCompare
                                comparisonKeyChoice={this.state.comparisonKeyChoice}
                                handleInitialCommonNotes={this.handleInitialCommonNotes}
                                rootKeyChoice={this.state.rootKeyChoice}
                            /> : ""
                }

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


