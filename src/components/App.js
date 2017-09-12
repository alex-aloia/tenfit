import React, {Component} from 'react';
import Mask from './Mask';
import {connect} from 'react-redux';

import {
    Route,
    Link
} from 'react-router';
// import Routing from './Routing';
import Menu from './Menu';
import PageTemplate from './PageTemplate';

const mapStateToProps = (state, ownProps) => ({
    menuItems  : state.mainMenu,
    pageContent: state.pageContent
    // ownProps
});

// const Person = ({match, history}) => {
//     console.log('MATCH', match);
//
//     return (
//         <div>
//             {/*<Route path={`${match.url}/:id`} component={Person}/>*/}
//             <Route path={`${match.url}/:id`} />
//         </div>
//     );
// };
//
// const App = ({match}) => {
//     console.log('PROPS!!!!!!l', {match});
//
//     return (
//         <div>
//             <Person match={{ params: { id: 0 }, url: '' }}/>
//         </div>
//     );
// };

class App extends Component {
    constructor() {
        super();
        console.log('PROPs', this.props);
        console.log('OWN PROPs', this.ownProps);
        console.log('MATCH', this.match);
    }

    render() {
        return (
            <div>
                <Menu items={this.props.menuItems}/>
                <h1>{this.ownProps}</h1>
                <PageTemplate content={this.props.pageContent}/>
                <Mask/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(App);

