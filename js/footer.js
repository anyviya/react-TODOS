/*
* @Author: Administrator
* @Date:   2016-10-15 20:00:27
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 20:46:46
*/

(function () {
	var Footer = React.createClass({
		render: function () {
			return <footer className ="footer">
				<span className="todo-count"><strong>{this.props.leftCount}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
		}
	})
	window.Footer = Footer;
})()