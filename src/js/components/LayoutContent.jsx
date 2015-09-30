import React from 'react';
import classnames from 'classnames';

const baseClass = {
  'mdl-layout__content': true
};

class LayoutContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main className={classnames(baseClass)}>
                {this.props.children}
            </main>
        );
    }
}

export default LayoutContent;