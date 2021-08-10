import React, { MouseEventHandler, ReactChild } from "react";
import "./BuildControl.css";

type T = {
	label?: string;

	key?: string;
	// disabled: boolean;
	disab: boolean;

	// added: (type: number) => void;
	// onClick: MouseEventHandler<HTMLButtonElement>;
	added: MouseEventHandler<HTMLButtonElement>;
	removed: MouseEventHandler<HTMLButtonElement>;
};

const buildControl = (props: T) => {
	return (
		<div className="BuildControl">
			<div className="Label">{props.label}</div>
			<button className="Less" onClick={props.removed} disabled={props.disab}>
				Less
			</button>
			<button className="More" onClick={props.added}>
				More
			</button>
		</div>
	);
};
export default buildControl;
