import React, { Component, ReactNode } from "react";
import Aux from "../../hoc/Aaux";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuildControls/BuildControls";
import { type } from "os";

//Global variable

const INGREDIENT_PRICES: { [type: string]: number } = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

type StateProp = {
	key?: boolean;
	ingredients: {
		salad: number;
		bacon: number;
		cheese: number;
		meat: number;
		[index: number]: number;
	};
	totalPrice: number;
};

class BurgerBuilder extends Component {
	/* 	constructor(props) {
		super(props);
		this.state = {};
	} */
	state: StateProp = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
	};

	addIngredientHandler = (type: string): void => {
		console.log(type);

		const oldCount = this.state.ingredients[type];
		console.log(this.state.ingredients[type]);

		const updateCount = oldCount + 1;
		const updateIngredients = {
			...this.state.ingredients,
		};
		updateIngredients[type] = updateCount;
		const priceAddition = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;
		console.log(priceAddition);

		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
		console.log(this.state.ingredients[type]);
	};

	removeIngredientHandler = (type: string) => {
		const oldCount: number = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		console.log(this.state.ingredients[type]);

		const updateCount = oldCount - 1;
		const updateIngredients = {
			...this.state.ingredients,
		};
		updateIngredients[type] = updateCount;
		const priceDeduction = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;
		console.log(priceDeduction);

		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
		console.log(this.state.ingredients[type]);
	};

	render() {
		const disableInfo: { [key: string]: number | boolean } = {
			...this.state.ingredients,
		};
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0;
		}
		return (
			<Aux>
				<Burger ingred={this.state.ingredients} />

				<BuildControls
					ingredinetAdded={this.addIngredientHandler}
					ingredientRemove={this.removeIngredientHandler}
					disable={disableInfo}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}
export default BurgerBuilder;
