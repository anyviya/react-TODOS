/*
* @Author: Administrator
* @Date:   2016-10-15 19:48:13
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 15:44:52
*/

(function () {

	

	var Header = React.createClass({
	getInitialState: function () {
		return {text:''}
	},

	hundleSubmit: function (event) {

		event.preventDefault();

		this.props.addTodo(this.state.text);

		this.setState({text:''});
	},

	hundleChange: function (event) {
		this.setState({text:event.target.value});
	},
	render: function () {
			return <header className="header">
					<h1>todos</h1>
					<form action="" onSubmit={this.hundleSubmit}>
						<input className ="new-todo" value={this.state.text} onChange={this.hundleChange} placeholder="What needs to be done?"  />
					</form>
					</header>
		}
	})

	window.Header = Header;
})()