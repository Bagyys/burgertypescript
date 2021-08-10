import React from "react";
import Aux from "../../hoc/Aaux";
import "./Layout.css";

const layout = (props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => {
	return (
		<Aux>
			<div>Toolbar,SideDrawer,Backdrop</div>
			<main className="Content">{props.children}</main>
		</Aux>
	);
};

export default layout;
