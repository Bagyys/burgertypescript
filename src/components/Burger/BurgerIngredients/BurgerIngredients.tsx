import "./BurgerIngredients.css";

type BurgerIngredinet = {
	type: string;
};
/* type Ing = {
	ingredient: JSX.Element | null; //how to pass to let ingredient
}; */

const burgerIngredient = (props: BurgerIngredinet) => {
	let ingredient: JSX.Element | null = null;

	switch (props.type) {
		case "bread-bottom":
			ingredient = <div className="BreadBottom"></div>;
			break;
		case "bread-top":
			ingredient = (
				<div className="BreadTop">
					<div className="Seeds1"></div>
					<div className="Seeds2"></div>
				</div>
			);
			break;
		case "meat":
			ingredient = <div className="Meat"></div>;
			break;
		case "cheese":
			ingredient = <div className="Cheese"></div>;
			break;
		case "bacon":
			ingredient = <div className="Bacon"></div>;
			break;
		case "salad":
			ingredient = <div className="Salad"></div>;
			break;
		default:
			ingredient = null;
	}
	return ingredient;
};
export default burgerIngredient;
