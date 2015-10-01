import React from 'react';
import classnames from 'classnames';

import 'material-design-lite/src/mdlComponentHandler';
import 'material-design-lite/src/layout/layout';
import './Layout.css';

import LayoutHeader from './LayoutHeader';
import LayoutDrawer from './LayoutDrawer';
import LayoutContent from './LayoutContent';

const baseClass = {
    'mdl-layout': true, 
    'mdl-js-layout': true, 
    'mdl-layout--fixed-header': true
};

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let node = React.findDOMNode(this);
        componentHandler.upgradeElement(node);
    }

    componentWillUnmount() {
        let node = React.findDOMNode(this);
        componentHandler.downgradeElements(node);
    }

    render() {
        let items = [{ link : '#', title: 'Link 1'}, { link : '#', title: 'Link 2'}];
        return (
            <div className={classnames(baseClass)}>
                <LayoutHeader navItems={items} title="Layout" />
                <LayoutDrawer navItems={items} title="Layout" />
                <LayoutContent>{this.props.children}</LayoutContent>
            </div>
        );
    }
}

export default Layout;