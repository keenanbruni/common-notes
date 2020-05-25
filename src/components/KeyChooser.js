import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


export default class KeyChooser extends React.Component {
    constructor() {
        super()
        this.state = {
            key: ""
        }
    }

    onKeyChoice = (e) => {
        e.preventDefault()
        const key = e.target.innerHTML
        this.setState(() => ({ key }))

        console.log(key)
    }

    render() {
        return (
            <div>
                <DropdownButton id="dropdown-item-button" title="Select A Key">
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>C</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>C#/Db</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>D</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>D#/Eb</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>E</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>F</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>F#/Gb</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>G</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>G#/Ab</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>A</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>A#/Bb</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.onKeyChoice}>B</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}