import React from 'react';
import { Icon, ListWrapper,ItemText,ItemLink } from './ListItem.styles';



class ListItem extends React.Component {
    render() {
        return (
            <ListWrapper>
                <Icon src={this.props.image} />
                <ItemLink href={this.props.address}>{this.props.title}</ItemLink>
                <ItemText>{this.props.number}</ItemText>
            </ListWrapper>
        );
    }
}

export default ListItem;