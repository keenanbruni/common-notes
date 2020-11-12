import React from 'react'
import ComparisonKeyChooser from './ComparisonKeyChooser'
import Header from './Header'
import KeyCompare from './KeyCompare'
import RootKeyChooser from './RootKeyChooser'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IntervalCompare from './IntervalCompare'

class Dashboard extends React.Component {
    state = {
        comparisonKeyChoice: "",
        comparisonKeyChoiceTwo: "",
        comparisonKeyChoiceThree: "",
        commonNotes: "",
        joinSharpsAndFlats: true,
        rootKeyChoice: ""
    }

    handleCommonNotes = (commonNotes) => {
        this.setState(() => ({ commonNotes }))
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

    handleRootKeyChoice = (rootKeyChoice) => {
        this.setState(() => ({ rootKeyChoice }))
    }

    handleSharpToggle = () => {
        this.setState(() => ({ joinSharpsAndFlats: !this.state.joinSharpsAndFlats }))
    }

    render() {
        return (
            <div>
                <Header />
                <div class="grid-container">
                    <Container fluid>
                        <Row>
                            <Col></Col>
                            <Col><RootKeyChooser handleRootKeyChoice={this.handleRootKeyChoice} /></Col>
                            <Col>{this.state.rootKeyChoice ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoice} rootKeyChoice={this.state.rootKeyChoice} /> : ""} </Col>
                            <Col>{this.state.comparisonKeyChoice ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoiceTwo} /> : ""}</Col>
                            <Col>{this.state.comparisonKeyChoiceTwo ? <ComparisonKeyChooser handleComparisonKeyChoice={this.handleComparisonKeyChoiceThree} /> : ""}</Col>
                        </Row>
                        <Row>
                            <Col>
                                {this.state.comparisonKeyChoiceThree
                                    ? <KeyCompare
                                        comparisonKeyChoice={this.state.comparisonKeyChoice}
                                        comparisonKeyChoiceTwo={this.state.comparisonKeyChoiceTwo}
                                        comparisonKeyChoiceThree={this.state.comparisonKeyChoiceThree}
                                        handleCommonNotes={this.handleCommonNotes}
                                        rootKeyChoice={this.state.rootKeyChoice} />
                                    : this.state.comparisonKeyChoiceTwo
                                        ? <KeyCompare
                                            comparisonKeyChoice={this.state.comparisonKeyChoice}
                                            comparisonKeyChoiceTwo={this.state.comparisonKeyChoiceTwo}
                                            handleCommonNotes={this.handleCommonNotes}
                                            rootKeyChoice={this.state.rootKeyChoice}
                                        />

                                        : this.state.comparisonKeyChoice
                                            ? <KeyCompare
                                                comparisonKeyChoice={this.state.comparisonKeyChoice}
                                                handleCommonNotes={this.handleCommonNotes}
                                                rootKeyChoice={this.state.rootKeyChoice}
                                            /> : ""
                                }
                            </Col>
                            <Col>
                                {this.state.commonNotes
                                    ? <IntervalCompare
                                        commonNotes={this.state.commonNotes}
                                        parentKeyChoice={this.state.rootKeyChoice} />
                                    : ""}
                            </Col>
                            <Col>
                                {this.state.comparisonKeyChoice
                                    ? <IntervalCompare
                                        commonNotes={this.state.commonNotes}
                                        parentKeyChoice={this.state.comparisonKeyChoice} />
                                    : ""}
                            </Col>  
                            <Col>
                                {this.state.comparisonKeyChoiceTwo
                                    ? <IntervalCompare
                                        commonNotes={this.state.commonNotes}
                                        parentKeyChoice={this.state.comparisonKeyChoiceTwo} />
                                    : ""}
                            </Col>    
                            <Col>
                                {this.state.comparisonKeyChoiceThree
                                    ? <IntervalCompare
                                        commonNotes={this.state.commonNotes}
                                        parentKeyChoice={this.state.comparisonKeyChoiceThree} />
                                    : ""}
                            </Col>                    
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Dashboard


