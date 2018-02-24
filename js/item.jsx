import Axial from 'axial';
import React from 'react';

class Item extends Axial.Component {
	render ($) {
		const item = this.props.item;

		return (
			<li className={(item.completed ? 'completed' : '') + ($.edit === item ? ' editing' : '')}>
				<div className="view">
					<input className="toggle" type="checkbox" checked={item.completed} onChange={() => this.complete(item) } />
					<label onDoubleClick={e => this.ui.onItemDoubleClick(e, this.input, item)}>{item.label}</label>
					<button className="destroy" onClick={() => this.destroy(item)}></button>
				</div>
				<input ref={this.ref('input')} className="edit" defaultValue={item.label} onKeyUp={this.ui.onItemKeyUp} onBlur={this.ui.onItemBlur} />
			</li>
		);
	}
};

export default Item;