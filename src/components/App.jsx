import React from 'react';
import Header from './Header';
import Body from './Body';

class App extends React.Component {
    state = {
        searchTerm: '',
    };

    onSearchHandler = (searchTerm) => {
        this.setState({ searchTerm });
    };

    render() {
        return (
            <>
                <Header onSearch={this.onSearchHandler} />
                <Body searchTerm={this.state.searchTerm} />
            </>
        );
    }
}

export default App;
