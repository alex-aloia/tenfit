import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = (match, location) => {
    {
        console.log('match', match, location);
    }

    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

let NoArityRoute = ({component}) => (
    <Route
        children={({location}) => {
            let params = location.pathname.split('/');
            let first  = params[1];
            let rest   = params.slice(2);
            let path   = `/:${first}${rest.map(x => `/:${x}?`).join('')}`;
            return <Route path={path} component={component}/>;
        }}
    />
);



class Routing extends Component {

    render() {
        console.log('HISTORY', this.props);
        
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>


                    {/*<Route exact path="/" component={Home}/>*/}
                    {/*<Route path="/about" component={About}/>*/}
                    {/*<NoArityRoute*/}
                    {/*component={({ match }) => (*/}
                    {/*<div>params: {JSON.stringify(match.params)}</div>*/}
                    {/*)}*/}
                    {/*/>*/}
                    <Person match={{ params: { id: 0 }, url: '' }}/>
                    {/*<Route path="/:id/:cls" component={Child}/>*/}
                    {/*<Route component={Child}/>*/}
                </div>
            </Router>
        );
    }
};

// const Routing = () => (
//     <Router>
//         <div>
//             <h2>Accounts</h2>
//
//
//             {/*<Route exact path="/" component={Home}/>*/}
//             {/*<Route path="/about" component={About}/>*/}
//             {/*<NoArityRoute*/}
//             {/*component={({ match }) => (*/}
//             {/*<div>params: {JSON.stringify(match.params)}</div>*/}
//             {/*)}*/}
//             {/*/>*/}
//             {/*<Route path="/" component={Child}/>*/}
//         </div>
//     </Router>
// );

const Child = (match, location) => (
    <div>
        {console.log('match', match, location)}
        {/*<h3>ID: {match.params.id}</h3>*/}
    </div>
);

export default Routing;