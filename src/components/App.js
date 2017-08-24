import React, {Component} from 'react';
import Mask from './Mask';
import {connect} from 'react-redux';

import Menu from './Menu';
import PageTemplate from './PageTemplate';

const mapStateToProps = (state, ownProps) => ({
    menuItems: state.mainMenu,
    pageContent: state.pageContent
});

class AppComponent extends Component {
    render() {
        return (
            <div>
                <Menu items={this.props.menuItems} />
                <PageTemplate content={this.props.pageContent} />
                <Mask/>
            </div>
        );
    }
}

const App = connect(
    mapStateToProps,
    // mapDispatchToProps
)(AppComponent);

export default App;

