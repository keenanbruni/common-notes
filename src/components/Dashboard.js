import React from 'react'
import ComparisonKeyChooser from './ComparisonKeyChooser'
import Header from './Header'
import KeyCompare from './KeyCompare'
import RootKeyChooser from './RootKeyChooser'
import SharpFlatCheckbox from './SharpFlatCheckbox'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Dashboard extends React.Component {
    state = {
        comparisonKeyChoice: "",
        comparisonKeyChoiceTwo: "",
        comparisonKeyChoiceThree: "",
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

    handleSharpToggle = () => {
        this.setState(() => ({ joinSharpsAndFlats: !this.state.joinSharpsAndFlats }))
    }

    render() {
        return (
            <div>
                <Header />

                <Container>
                    <Row>
                        <Col> <RootKeyChooser handleRootKeyChoice={this.handleRootKeyChoice} /> </Col>
                        <Col>{this.state.rootKeyChoice ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoice} rootKeyChoice={this.state.rootKeyChoice} />: ""} </Col>
                        <Col>{this.state.comparisonKeyChoice ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoiceTwo} /> : ""}</Col>
                        <Col>{this.state.comparisonKeyChoiceTwo ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoiceThree} /> : ""}</Col>
                    </Row>
                </Container>

                {this.state.comparisonKeyChoiceThree
                    ? <KeyCompare
                        comparisonKeyChoice={this.state.comparisonKeyChoice}
                        comparisonKeyChoiceTwo={this.state.comparisonKeyChoiceTwo}
                        comparisonKeyChoiceThree={this.state.comparisonKeyChoiceThree}
                        rootKeyChoice={this.state.rootKeyChoice} />
                    : this.state.comparisonKeyChoiceTwo
                        ? <KeyCompare
                            comparisonKeyChoice={this.state.comparisonKeyChoice}
                            comparisonKeyChoiceTwo={this.state.comparisonKeyChoiceTwo}
                            rootKeyChoice={this.state.rootKeyChoice}
                        />

                        : this.state.comparisonKeyChoice
                            ? <KeyCompare
                                comparisonKeyChoice={this.state.comparisonKeyChoice}
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


