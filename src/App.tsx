import React, { Component } from "react";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";
import Aux from "../src/hoc/Aaux";
import Layout from "../src/components/Layout/Layout";
class App extends Component {
	render() {
		return (
			<>
				<Aux>
					<Layout>
						<BurgerBuilder />
					</Layout>
				</Aux>
			</>
		);
	}
}

export default App;
