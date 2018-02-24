import Axial from 'axial';
import React from 'react';
import Header from './header.jsx';
import List from './list.jsx';
import Footer from './footer.jsx';

class TodoApp extends Axial.Component {
	render () {
		return (
			<section className="todoapp">
				<Header />
				{this.has('items') && (
					<section className="main">
						<input id="toggle-all" ref={this.ref('input')} className="toggle-all" type="checkbox" checked={this.isAllCompleted} onChange={() => {}} />
						<label htmlFor="toggle-all" onClick={e => this.toggleAll(!this.input.checked)}>Mark all as complete</label>
						<List />
					</section>
				)}
				{this.has('items') && <Footer />}
			</section>
		);
	}
};

export default TodoApp;