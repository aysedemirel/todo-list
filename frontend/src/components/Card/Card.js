import React from "react";

import { CardWrapper,CardText } from "./Card.styles";

class Card extends React.Component {
    render() {
        return (
        <CardWrapper>
            <CardText>{this.props.text}</CardText>
            {this.props.header}
        </CardWrapper>)
    };
} 

export default Card;