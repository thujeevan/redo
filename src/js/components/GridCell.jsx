import React from 'react';
import classnames from 'classnames';

const baseClass = {
    'mdl-cell': true
};

class GridCell extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let { 
            column, 
            tablet, 
            phone, 
            noSpacing, 
            hideDesktop, 
            hideTablet, 
            hidePhone, 
            stretch, 
            top, 
            middle, 
            bottom
        } = this.props;
        
        let desktop = column ? `mdl-cell--${column}-col-desktop` : null;
        column = column ? `mdl-cell--${column}-col` : null;
        tablet = tablet ? `mdl-cell--${tablet}-col-tablet` : null;
        phone = phone ? `mdl-cell--${phone}-col-phone` : null;
        
        let combined = classnames(baseClass, column, desktop, tablet, phone, {
            "mdl-grid--no-spacing": noSpacing,
            "mdl-cell--hide-desktop": hideDesktop,
            "mdl-cell--hide-tablet": hideTablet,
            "mdl-cell--hide-phone": hidePhone,
            "mdl-cell--stretch": stretch,
            "mdl-cell--top": top,
            "mdl-cell--middle": middle,
            "mdl-cell--bottom": bottom
        });
        
        return (
            <div className={combined}>
                {this.props.children}
            </div>
        );
    }
}

export default GridCell;