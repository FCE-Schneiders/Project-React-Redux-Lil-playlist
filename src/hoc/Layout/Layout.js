import React, { Component } from 'react';
import SongOverview from '../../containers/SongOverview/SongOverview';
import Aux from './../_Aux/_Aux';

class Layout extends Component {
    render (){
        return (
            <Aux>
            <div>
                <h1> Winc Lil'Liedjeslijst</h1>
            </div>
            <SongOverview />
            </Aux>
        )
    }
}

export default Layout;