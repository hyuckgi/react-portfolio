import React from 'react';
import Counter from '../../components/counter';
import Buttons from '../../components/Button';
import Option from '../../components/Option';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }

}

export default App;
