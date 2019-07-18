import * as React from 'react'
import {
	ALIGN,
	HeaderNavigation,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList
} from 'baseui/header-navigation'
import { StyledLink as Link } from 'baseui/link'
import { Button } from 'baseui/button'
import history from '../../history'

export const Header = () => {

	const handleDashboard = () => history.push('/')

	return <div style={ { marginLeft: 'auto', marginRight: 'auto', maxWidth: '900px' } }>
		<HeaderNavigation overrides={ { Root: { style: { borderBottom: 'none' } } } }>
			<NavigationList $align={ ALIGN.left }>
				<NavigationItem>
					<h4>Cannyx</h4>
				</NavigationItem>
			</NavigationList>
			<NavigationList $align={ ALIGN.center }/>
			<NavigationList $align={ ALIGN.right }>
				<NavigationItem>
					<Link href="#">Changelog</Link>
				</NavigationItem>
				<NavigationItem>
					<Link href="#">People</Link>
				</NavigationItem>
			</NavigationList>
			<NavigationList $align={ ALIGN.right }>
				<NavigationItem>
					<Button onClick={ handleDashboard }>Dashboard</Button>
				</NavigationItem>
			</NavigationList>
		</HeaderNavigation>
	</div>
}