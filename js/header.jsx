import Axial from 'axial';
import React from 'react';

class Header extends Axial.Component {
	render () {
		return (
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" onKeyUp={this.ui.onHeaderKeyUp}	autoFocus />
			</header>
		);
	}
};

export default Header;