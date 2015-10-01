import React from 'react';

class NavigationLink extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <a className="mdl-navigation__link" href={this.props.link}>{this.props.children}</a>
        );
    }
}

export default NavigationLink;