import React from "react";

import "./Burger.css";
import burgerIngredient from "./BurgerIngredients/BurgerIngredients";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

interface T {
	salad: number;
	bacon: number;
	cheese: number;
	meat: number;
	[index: string]: number;
}
interface P {
	ingred: T;
}
const burger: React.FC<P> = (pop: P) => {
	let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(
		pop.ingred
	)
		.map((ingKey) => {
			return [...Array(pop.ingred[ingKey])].map((_, i) => {
				return <BurgerIngredient key={ingKey + i} type={ingKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	console.log(typeof BurgerIngredient);

	/* const burger = (props: P) => {
	let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(
		props.ingred
	).map((igKey, i) => <BurgerIngredient key={igKey + i} type={igKey} />).reduce((arr, el) => {
		return arr.concat(el);
	}, []);; */

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}

			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};
export default burger;
