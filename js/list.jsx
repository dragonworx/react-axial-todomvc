import Axial from 'axial';
import React from 'react';
import Item from './item.jsx';

class List extends Axial.Component {
	render () {
		return (
			<ul className="todo-list">
				{
					this.filteredItems.map(item => <Item key={item.id} item={item}></Item>)
				}
			</ul>
		);
	}
};

export default List;