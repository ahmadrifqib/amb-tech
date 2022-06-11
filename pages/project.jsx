import Header from "../components/header";

const Project = () => {
	return (
		<div>
			<Header name="Pengalaman Kerja" image="/images/project-header.jpeg" />
			<div className="bg-stone-200">
				<div className="py-20">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">Tower</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/tower-1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/tower-2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/tower-3.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
				<div className="py-20">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">VSAT</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/vsat-1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
				<div className="py-20">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">Instalasi Fiber Optik</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/FO1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/FO2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/FO3.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/FO4.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>

						<img
							src="/images/project/FO5.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
				<div className="py-20">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">
						Instalasi PLTS / Solar Power System
					</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/PLTS1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/PLTS2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
