/*
* @Author: Administrator
* @Date:   2016-10-15 19:33:29
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 20:52:18
*/

(function (window) {

	var App = React.createClass({

		getInitialState: function () {

			var todos = [{text:'吃饭',completed:true},{text:'睡觉',completed:false},{text:'打豆豆',completed:false}];

			return {todos:todos}	
		},

		removeTodo: function (index) {

			var todos = this.state.todos;

			todos.splice(index, 1);

			this.setState({todos:todos});
		},
		addTodo:function (text) {
			var todos = this.state.todos;

			todos.push({text:text,completed:false});

			this.setState({todos:todos})
		},
		toggleTodo: function (index,status) {
			var todos = this.state.todos;

			var todo = todos[index];

			todo.completed = status;

			this.setState({todos:todos})
		},
		toggleAll: function (status) {

			var todos = this.state.todos.map(function (ele, index) {

				ele.completed = status;
				
				return ele;
			})
			this.setState({todos:todos})
		},
		render: function () {
			var left = this.state.todos.reduce(function (accum,todo) {
				
				return todo.completed ? accum : accum + 1;

			},0);

			return <div>
				<Header addTodo={this.addTodo}></Header>
				<List todos = {this.state.todos} hundleRemove={this.removeTodo} toggleAll={this.toggleAll} toggleTodo={this.toggleTodo}></List>
				<Footer leftCount={left}></Footer>
			</div>
		}
	})

	ReactDOM.render(<App></App>,document.getElementsByClassName('todoapp')[0]);

})(window);