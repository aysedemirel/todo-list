import React, { useState, useEffect } from 'react';


import Card from "../Card/Card"
import { SummaryWrapper } from "./Summary.styles"

class Summary extends React.Component {
    render() {
        return (<SummaryWrapper>
            <Card text={this.props.planned} header={"Planned"} />
            <Card text={this.props.done} header={"Done"} />
        </SummaryWrapper>)
    };
}

export default Summary;