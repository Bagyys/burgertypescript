import { ReactNode } from "react";

type ChildrenProps = {
	children: ReactNode;
};

const aux = (props: ChildrenProps) => {
	return <>{props.children}</>;
};
export default aux;
