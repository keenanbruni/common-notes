import React from 'react'

export default class IntervalCompare extends React.Component {
    state = {
        parentKey: "",
        compareKeyArray: ""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            parentKey: nextProps.parentKey,
            compareKeyArray: nextProps.compareKeyArray
        }
    }
}