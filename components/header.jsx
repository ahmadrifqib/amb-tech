import React from "react";

const Header = ({ name, image }) => {
	return (
		<div>
			<div className="flex items-center justify-center w-auto h-auto tracking-wide ">
				<img
					src={image}
					className="object-cover object-center w-screen brightness-50 drop-shadow-xl h-60"
					// style={{ filter: "grayscale(60%)" }}
				/>

				<div className="absolute font-bold text-white underline text-7xl underline-offset-4 decoration-emerald-600">
					{name}
				</div>
			</div>
		</div>
	);
};

export default Header;
