/*
* @Author: Administrator
* @Date:   2016-10-15 19:52:45
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 20:31:57
*/

(function () {
	var List = React.createClass({

		hundleClick: function (index) {

			this.props.hundleRemove(index);
		},
		hundleChange: function (index,event){
			this.props.toggleTodo(index,event.target.checked);
		},
		toggleAll: function (event) {
			this.props.toggleAll(event.target.checked);
		},
		render: function () {

			var lis = this.props.todos.map(function (elem, index) {

				var isCompleted = elem.completed ? 'completed' : '';
				return <li className={isCompleted} key={index}>
							<div className="view">
								<input  className="toggle" type="checkbox" onChange={this.hundleChange.bind(this,index)} checked={elem.completed} />
								<label>{elem.text}</label>
								<button className = "destroy" onClick={this.hundleClick.bind(this,index)}></button>
							</div>
							<input className ="edit" defaultValue="Create a TodoMVC template" />
						</li>
			}.bind(this))

			return <section className ="main">
					<input onChange={this.toggleAll} className ="toggle-all" type="checkbox" />
					<label htmlFor="toggle-all">Mark all as complete</label>
					<ul className ="todo-list">
					{lis}
					</ul>
				</section>
		}
	})

	window.List = List;
})()