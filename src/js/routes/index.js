import React from 'react'
import { Route, Switch } from 'react-router'

import Dashboard from './Dashboard'

import Landing from './process-site/Landing'
import Colors from './process-site/Colors'
import Typography from './process-site/Typography'
import Animation from './process-site/Animation'
import Prototypes from './process-site/Prototypes'
import Accessibility from './process-site/Accessibility'

import HomeNavPrototype from './prototypes/HomeNavPrototype'
import HomeArticlePrototype from './prototypes/HomeArticlePrototype'
import HomeLinksPrototype from './prototypes/HomeLinksPrototype'
import HomeProfileSetupPrototype from './prototypes/HomeProfileSetupPrototype'
import HomeSitemapPrototype from './prototypes/HomeSitemapPrototype'
import HomeLandingPrototype from './prototypes/HomeLandingPrototype'


const routes = (
	<div>
		<Dashboard/>
		<Switch>
			<Route exact path="/" component={Landing}/>
			<Route path="/colors" component={Colors}/>
			<Route path="/typography" component={Typography}/>
			<Route path="/animation" component={Animation}/>
			<Route path="/accessibility" component={Accessibility}/>
			<Route exact path="/prototypes" component={Prototypes}/>

			<Route path="/prototypes/home-nav" component={HomeNavPrototype}/>
			<Route path="/prototypes/home-article" component={HomeArticlePrototype}/>
			<Route path="/prototypes/home-links" component={HomeLinksPrototype}/>
			<Route path="/prototypes/home-profile-setup" component={HomeProfileSetupPrototype}/>
			<Route path="/prototypes/home-sitemap" component={HomeSitemapPrototype}/>
			<Route path="/prototypes/home-landing" component={HomeLandingPrototype}/>
		</Switch>
	</div>
)

export default routes