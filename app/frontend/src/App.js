// import Component from the react module
import React, { Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MAP from "./components/Map";
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store'


// create a class that extends the component
class App extends Component {

	// add a constructor to take props
	constructor(props) {
		super(props);

		// add the props here
		this.state = {
			viewCompleted: false,
			activeItem: {
				title: "",
				description: "",
				completed: false
			},

			// this list stores all the completed tasks
			people: []
		};
	}

	// Add componentDidMount()
	componentDidMount() {
		 this.refreshList();
	}


	async refreshList(){
		const axios = require('axios').default;
		const res = await axios('http://localhost:8088/api/people/');
		this.state.people=JSON.parse(res.data.people);
		// this.state.people=res.data.people;
		sessionStorage.setItem('people', res.data.people)
		console.log(res);

		// debugger;
	};

	// this arrow function takes status as a parameter
	// and changes the status of viewCompleted to true
	// if the status is true, else changes it to false
	// displayCompleted = status => {
	// 	if (status) {
	// 	return this.setState({ viewCompleted: true });
	// 	}
	// 	return this.setState({ viewCompleted: false });
	// };

	// this array function renders two spans that help control
	// the set of items to be displayed(ie, completed or incomplete)
	// renderTabList = () => {
	// 	return (

	// );
	// };

	// Start by visual effects to viewer
	render() {
		debugger;
		return (
			<main className="content">
				<h1 className="text-success text-uppercase text-center my-4">
					Full Stack Assignment
				</h1>
				<div className="row">
					<div className="col-md-6 col-sm-10 mx-auto p-0">
						<div className="card p-3">

							<div className="my-5 tab-list">
								<Tabs>
									<TabList>
										<Tab>Home</Tab>
										<Tab>MAP</Tab>
									</TabList>

									<TabPanel>
										<h1>Welcome</h1>
									</TabPanel>
									<TabPanel>
										{/* <Provider people={this.state.people} > */}
										<MAP people={this.state.people} />
										{/* </Provider> */}
									</TabPanel>
								</Tabs>
							</div>
							<ul className="list-group list-group-flush">
							</ul>
						</div>
					</div>
				</div>

			</main>
		);
	}
}
export default App;
