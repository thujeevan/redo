import React from 'react';
import Navigation from 'components/Navigation/Navigation';

class LayoutHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout-icon"></div>
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">{this.props.title}</span>
                    <div className="mdl-layout-spacer"></div>
                    <Navigation items={this.props.navItems} largeScreensOnly={true}/>
                </div>
            </header>
        );
    }
}

export default LayoutHeader;