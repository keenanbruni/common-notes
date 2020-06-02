import React from 'react'
import Form from 'react-bootstrap/Form'

export default class SharpFlatCheckbox extends React.Component{
    state = {
        checkboxChecked: false
    }

    handleChange = () => {
        this.setState({ checkboxChecked: !this.state.checkboxChecked })
        this.props.handleSharpToggle()
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Check
                        checked={this.state.checkboxChecked}
                        type="switch"
                        id="custom-switch"
                        label="Combine Sharps & Flats"
                        onChange={this.handleChange}
                    />
                </Form>
            </div>
        )
    }
}