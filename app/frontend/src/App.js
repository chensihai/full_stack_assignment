// import Component from the react module
import React, { Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MAP from "./components/Map";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
			taskList: []
		};
	}

	// Add componentDidMount()
	componentDidMount() {
		// this.refreshList();
	}


	// refreshList = () => {
	// 	axios //Axios to send and receive HTTP requests
	// 	.get("http://localhost:8088/api/people/")
	// 	.then(res => this.setState({ taskList: res.data }))
	// 	.catch(err => console.log(err));
	//   debugger;
	// };

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
										<h2>WELCOME</h2>
									</TabPanel>
									<TabPanel>
										<MAP/>
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
