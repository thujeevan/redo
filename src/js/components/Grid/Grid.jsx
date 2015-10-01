import React from 'react';
import classnames from 'classnames';

const baseClass = {
    'mdl-grid': true
};

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={classnames(baseClass)}>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;