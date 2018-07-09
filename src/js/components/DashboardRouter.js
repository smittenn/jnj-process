import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import Home from './Home';
import Orders from './Orders';
import Transactions from './Transactions'
import Prototypes from './Prototypes'
import MdcNav from './MdcNav'


export default class DashboardRouter extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div>
                <Redirect from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/orders" component={Orders}/>
                <Route path="/prototypes" component={Prototypes}/>
                <Route path="/prototypes/mdc-nav" component={MdcNav}/>
                <Route path="/transactions" component={Transactions}/>
            </div>
        );
    }
}