import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			parentApiResponse: [],
			nestedObject: []
		};	

		this.getHeader = this.getHeader.bind(this);
		this.getRowsData = this.getRowsData.bind(this);
		this.getKeys = this.getKeys.bind(this);
	}


	componentDidMount() {
		fetch('http://localhost:8082/vin/validate/', {
			method: 'POST',
			body: JSON.stringify({
				vin: '1FAHP3K27CL106954'
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			return response.json()
		}).then(json => {
			this.setState({
				parentApiResponse: json
			});
			this.setState({ nestedObject: json.response });
		});
	}

	getKeys = function () {
		return this.state.parentApiResponse.statusMessage;
	}

	getHeader = function () {
		var keys = this.getKeys();
		return this.state.parentApiResponse.statusMessage;
	}

	getRowsData = function () {
		var items = this.props.data;
		var keys = this.getKeys();
		return <tr>{this.state.nestedObject.model}</tr>;
	}

	


	render() {

        return (
            <div className="App">
                <header className="App-header">
				</header>
				<p>Status : {this.state.parentApiResponse.status}</p>
				<p>StatusMessage : {this.state.parentApiResponse.statusMessage}</p>	
				<p>Response :
					<p> Make: {this.state.nestedObject.make} </p>
					<p> Model: {this.state.nestedObject.model} </p>
					<p> Year: {this.state.nestedObject.year} </p>
					<p> Plant Country: {this.state.nestedObject.plantCountry} </p>
					<p> Plant City: {this.state.nestedObject.plantCity} </p>
					<p> Plant Company Name: {this.state.nestedObject.plantCompanyName} </p>
					<p> Plant State: {this.state.nestedObject.plantState} </p>
					<p> Manufacturer Name: {this.state.nestedObject.manufacturerName} </p>
					<p> Vehicle Type: {this.state.nestedObject.vehicleType} </p>

				</p>

			

				<Table data={this.state.data} />
					<table>
						<thead>
							<tr>{this.getHeader()}</tr>
						</thead>
						<tbody>
							{this.getRowsData()}
						</tbody>
					</table>
			
				
           </div>
		);

		

       
	}


}

const RenderRow = (props) => {
	return this.state.nestedObject.plantState;
}

export default App;
