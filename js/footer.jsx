import Axial from 'axial';
import React from 'react';

class Footer extends Axial.Component {
	render () {
		return (
			<footer className="footer">
				<span className="todo-count"><strong>{this.uncompleted.length}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className={this.filter('all')} href="#/">All</a>
					</li>
					<li>
						<a className={this.filter('active')} href="#/active">Active</a>
					</li>
					<li>
						<a className={this.filter('completed')} href="#/completed">Completed</a>
					</li>
				</ul>
				{this.hasCompleted && <button className="clear-completed" onClick={() => this.clearCompleted()}>Clear completed</button>}
			</footer>
		);
	}
};

export default Footer;