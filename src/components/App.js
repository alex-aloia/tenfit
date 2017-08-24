import React, {Component} from 'react';
import Mask from './Mask';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Menu';
// import {Menu, Anchor} from 'grommet';
import {connect} from 'react-redux';

import Menu from './Menu';
import PageTemplate from './PageTemplate';

const mapStateToProps = (state, ownProps) => ({
    items: state.mainMenu,
    // pageContent: state.pageContent
});

// import {Grommet, Header, Box, Menu, Search, Anchor, Actions} from 'grommet';
// import { Box, Grid, Grommet, Heading, Paragraph, RoutedButton, TextInput } from 'grommet';


class AppComponent extends Component {
    render() {
        return (
            <div>
                <Menu items={this.props.items} />
                <h1>TEST</h1>
                {/*<PageTemplate content={this.props.pageContent} />*/}
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


/*
[
                    {
                        "ID": 69,
                        "order": 0,
                        "parent": 0,
                        "title": "First Sample Page",
                        "url": "http://10.0.0.3:7777/sample-page/",
                        "attr": "",
                        "target": "",
                        "classes": "",
                        "xfn": "",
                        "description": "",
                        "object_id": 2,
                        "object": "page",
                        "type": "post_type",
                        "type_label": "Page",
                        "children": []
                    },
                    {
                        "ID": 4,
                        "order": 1,
                        "parent": 0,
                        "title": "Sample Page",
                        "url": "http://10.0.0.3:7777/sample-page/",
                        "attr": "",
                        "target": "",
                        "classes": "",
                        "xfn": "",
                        "description": "",
                        "object_id": 2,
                        "object": "page",
                        "type": "post_type",
                        "type_label": "Page",
                        "children": [
                            {
                                "ID": 7,
                                "order": 2,
                                "parent": 4,
                                "title": "Sample Sub Page",
                                "url": "http://10.0.0.3:7777/sample-page/sample-sub-page/",
                                "attr": "",
                                "target": "",
                                "classes": "",
                                "xfn": "",
                                "description": "",
                                "object_id": 5,
                                "object": "page",
                                "type": "post_type",
                                "type_label": "Page",
                                "children": [
                                    {
                                        "ID": 8,
                                        "order": 1,
                                        "parent": 4,
                                        "title": "Another Sample Sub Page",
                                        "url": "http://10.0.0.3:7777/sample-page/sample-sub-page/",
                                        "attr": "",
                                        "target": "",
                                        "classes": "",
                                        "xfn": "",
                                        "description": "",
                                        "object_id": 9,
                                        "object": "page",
                                        "type": "post_type",
                                        "type_label": "Page",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
 */