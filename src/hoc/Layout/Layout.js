import React, { Component } from 'react';
import SongOverview from '../../containers/SongOverview/SongOverview';
import Aux from './../_Aux/_Aux';

class Layout extends Component {
    render (){
        return (
            <Aux>
            <div>Tekst uit Layout.js</div>
            <SongOverview></SongOverview>
            </Aux>
        )
    }
}

export default Layout;