import React from 'react';
import classnames from 'classnames';

import NavigationLink  from './NavigationLink';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let items = this.props.items;
        items = items.map(function(item, key) {
            return <NavigationLink link={item.link} key={key}>{item.title}</NavigationLink>;
        });
        
        let className = classnames('mdl-navigation', {
            'mdl-layout--large-screen-only' : this.props.largeScreensOnly
        });
        
        return (
            <nav className={className}>{items}</nav>
        );
    }
}

export default Navigation;