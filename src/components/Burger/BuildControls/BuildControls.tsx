import React, { FC, MouseEventHandler, ReactChild } from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

interface T {
	price: number;
	ingredientRemove: (type: string) => void;
	ingredinetAdded: (type: string) => void;
	disable: {};

	controls?: {
		label: string;
		key: number;
		type: number;

		added: () => void;
		onClick: MouseEventHandler<HTMLButtonElement>;
		removed: MouseEventHandler<HTMLButtonElement>;
	};
}

const buildControls: React.FC<T> = (props: T) => {
	return (
		<div className="BuildControls">
			<p>
				Current: Price: <strong>{props.price.toFixed(2)}</strong>
			</p>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredinetAdded(ctrl.type)}
					removed={() => props.ingredientRemove(ctrl.type)}
					disab={props.disable[ctrl.type]}
				/>
			))}
		</div>
	);
};

export default buildControls;
