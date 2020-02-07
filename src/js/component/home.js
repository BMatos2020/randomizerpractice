import React from "react";
import { Nav } from "./nav";
import { Jumbo } from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Nav />
			<Jumbo />
		</>
	);
}
