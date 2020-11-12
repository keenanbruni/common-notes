import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default class ComparisonKeyChooser extends React.Component {
    state = {
        keyChoice: ""
    }

    onKeyChoice = (e) => {
        e.preventDefault()
        const keyChoice = e.target.innerHTML
        this.setState(() => ({ keyChoice }))
        this.props.handleComparisonKeyChoice(keyChoice)
    }

    render() {
        return (
            <div>
                <DropdownButton renderMenuOnMount={true} variant="secondary" id="dropdown-item-button" title={this.state.keyChoice ? this.state.keyChoice : "Select Key"}>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>C</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>C#</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Db</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>D</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Eb</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>E</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>F</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>F#</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Gb</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>G</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Ab</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>A</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Bb</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>B</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Cb</Dropdown.Item>

                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>C minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>C# minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>D minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Eb minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>E minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>F minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>F# minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>G minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>G# minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>A minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>Bb minor</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>B minor</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}