import React, {useEffect, useState} from "react";

import Display from "./display.jsx";

const Home = () => {
	

	return (
		<div className="text-center">
			<h1 className="mt-3 text-success">Your Dictionary</h1>
			<Display />	
		</div>
	);
};

export default Home;
