// JavaScript source code
class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: [] };
	}

	componentDidMount() {
		fetch('http://localhost:8082/vin/validate/', {
			method: 'POST',
			body: JSON.stringify({
				vin: '1FAHP3K27CL106954';
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			return response.json()
		}).then(json => {
			this.setState({
				user: json
			});
		});
	}
	render() {
		return (
			<div>
				<p><b>New Resource created in the server as shown below</b></p>
			</div>
		)
	}
}

export default RestController;