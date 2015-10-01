import React from 'react';
import Navigation  from 'components/Navigation/Navigation';

class LayoutDrawer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{this.props.title}</span>
                <Navigation items={this.props.navItems} />
            </div>
        );
    }
}

export default LayoutDrawer;