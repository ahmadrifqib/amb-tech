import Header from "../components/header";

const Product = () => {
	return (
		<div>
			<Header name="Produk Layanan" image="/images/product-header.jpeg" />
			<div className="bg-stone-200">
				<div className="py-10">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">
						Wireless Internet Access / Wiring Office (UTP)
					</div>
					<div className="grid justify-center grid-cols-1 gap-4 mx-5 lg:mx-20 md:mx-10 md:grid-cols-2">
						<div className="relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl">
							<img
								src="/images/paving/segienam.jpeg"
								className="object-cover object-center w-full h-96"
							/>
							<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded bg-emerald-600">
								AMB Tech
							</div>
						</div>
						<div className="relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl">
							<img
								src="/images/paving/concrete.jpeg"
								className="object-cover object-center w-full h-96"
							/>
							<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded bg-emerald-600">
								AMB Tech
							</div>
						</div>
					</div>
				</div>
				<div className="py-10">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">
						Point to Point radio link
					</div>
					<div className="grid justify-center grid-cols-1 gap-4 mx-5 lg:mx-20 md:mx-10 md:grid-cols-2">
						<div className="relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl">
							<img
								src="/images/paving/segienam.jpeg"
								className="object-cover object-center w-full h-96"
							/>
							<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded bg-emerald-600">
								AMB Tech
							</div>
						</div>
						<div className="relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl">
							<img
								src="/images/paving/concrete.jpeg"
								className="object-cover object-center w-full h-96"
							/>
							<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded bg-emerald-600">
								AMB Tech
							</div>
						</div>
					</div>
				</div>
				<div className="py-10">
					<div className="p-10 text-5xl font-bold text-center text-emerald-600">
						Very Small Aperturen Terminal ( VSAT )
					</div>
					<div className="grid justify-center grid-cols-1 gap-4 mx-5 lg:mx-20 md:mx-10 md:grid-cols-2">
						<div className="relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl">
							<img
								src="/images/paving/segienam.jpeg"
								className="object-cover object-center w-full h-96"
							/>
							<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded bg-emerald-600">
								AMB Tech
							</div>
						</div>
						<div className="relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl">
							<img
								src="/images/paving/concrete.jpeg"
								className="object-cover object-center w-full h-96"
							/>
							<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded bg-emerald-600">
								AMB Tech
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
