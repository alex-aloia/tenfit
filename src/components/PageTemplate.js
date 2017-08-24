import React, {Component} from 'react';

class PageTemplate extends Component {
    componentDidMount() {}

    componentDidUpdate() {}

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
        );
    }
}

export default PageTemplate;
