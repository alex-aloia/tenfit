import React from 'react';
import {connect} from 'react-redux';

// action creator
const hideMask = () => ({
    type: 'SET_MASK_VISIBILITY',
    visibility: 'HIDE'
});

const mapStateToProps = (state, ownProps) => ({
    visibility: state.maskVisibility
});

const mapDispatchToProps = {
    hideMask
};


const MaskComponent = ({visibility, hideMask}) => {
    console.log('visibility', visibility);
    
    // setTimeout(() => {
        hideMask();
        console.log('toggled viz ');
    // }, 3000);

    return (
        <a id="mask" className={visibility}>LOADING</a>
    )
};

const Mask = connect(
    mapStateToProps,
    mapDispatchToProps
)(MaskComponent);

export default Mask;