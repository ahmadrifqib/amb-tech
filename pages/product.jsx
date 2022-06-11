import Header from "../components/header";

const Product = () => {
	return (
		<div>
			<Header name="Produk Layanan" image="/images/product-header.jpeg" />
			<div className="bg-stone-200">
				<div className="py-10">
					<div className="relative grid items-center justify-center grid-cols-1 gap-4 p-4 mx-5 my-10 overflow-auto bg-white lg:mx-20 md:mx-10 md:grid-cols-2 hover:shadow-lg rounded-xl">
						<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded lg:text-5xl bg-emerald-600">
							Pembangunan Tower
						</div>
						<img src="/images/paving/segienam.jpeg" className="object-cover object-center w-full h-96" />
						<p className="text-3xl leading-tight lg:text-5xl text-stone-700/90">
							Jasa Pembagunan Tower Telekomunikasi jenis GM, SST, Triangle, SST Four Legs.
						</p>
					</div>
				</div>
				<div className="py-10">
					<div className="relative grid items-center justify-center grid-cols-1 gap-4 p-4 mx-5 my-10 overflow-auto bg-white lg:mx-20 md:mx-10 md:grid-cols-2 hover:shadow-lg rounded-xl">
						<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded lg:text-5xl bg-emerald-600">
							Point to Point Radio Link
						</div>
						<img src="/images/paving/segienam.jpeg" className="object-cover object-center w-full h-96" />
						<p className="text-xl leading-tight lg:text-3xl text-stone-700/90">
							Point to Point dengan system radiolink antara satu tempat dengan tempat lainnya untuk
							mendapatkan access internet menjadikan cara ini cocok bagi anda yang tinggal jauh dari
							perkotaan, atau lokasi yang terhalang oleh bukit, dengan system radio link anda bisa lebih
							menghemat anggaran anda untuk system ini.
						</p>
					</div>
				</div>
				<div className="py-10">
					<div className="relative grid items-center justify-center grid-cols-1 gap-4 p-4 mx-5 my-10 overflow-auto bg-white lg:mx-20 md:mx-10 md:grid-cols-2 hover:shadow-lg rounded-xl">
						<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded lg:text-5xl bg-emerald-600">
							Instalasi Jaringan Fiber Optic
						</div>
						<img src="/images/paving/segienam.jpeg" className="object-cover object-center w-full h-96" />
						<p className="text-3xl leading-tight lg:text-5xl text-stone-700/90">
							Jasa pengadaan dan instalasi jaringan fiber optic baik di skala perkantoran maupun skala
							besar.
						</p>
					</div>
				</div>
				<div className="py-10">
					<div className="relative grid items-center justify-center grid-cols-1 gap-4 p-4 mx-5 my-10 overflow-auto bg-white lg:mx-20 md:mx-10 md:grid-cols-2 hover:shadow-lg rounded-xl">
						<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded lg:text-5xl bg-emerald-600">
							Survey & SITAC
						</div>
						<img src="/images/paving/segienam.jpeg" className="object-cover object-center w-full h-96" />
						<p className="text-3xl leading-tight lg:text-5xl text-stone-700/90">
							Jasa survey persiapan dan <i>STE Acquisition</i> untuk persiapan proyek telekomunikasi dan
							sipil.
						</p>
					</div>
				</div>
				<div className="py-10">
					<div className="relative grid items-center justify-center grid-cols-1 gap-4 p-4 mx-5 my-10 overflow-auto bg-white lg:mx-20 md:mx-10 md:grid-cols-2 hover:shadow-lg rounded-xl">
						<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded lg:text-5xl bg-emerald-600">
							Instalasi dan Maintenance Service CCTV
						</div>
						<img src="/images/paving/segienam.jpeg" className="object-cover object-center w-full h-96" />
						<p className="text-3xl leading-tight lg:text-5xl text-stone-700/90">
							Layanan jasa pemansangan CCTV baru serta perbaikan, serta untuk monitoring jarak jauh.
						</p>
					</div>
				</div>
				<div className="py-10">
					<div className="relative grid items-center justify-center grid-cols-1 gap-4 p-4 mx-5 my-10 overflow-auto bg-white lg:mx-20 md:mx-10 md:grid-cols-2 hover:shadow-lg rounded-xl">
						<div className="absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white rounded lg:text-5xl bg-emerald-600">
							Instalasi PLTS / Solar Power System
						</div>
						<img src="/images/paving/segienam.jpeg" className="object-cover object-center w-full h-96" />
						<p className="text-2xl leading-tight lg:text-4xl text-stone-700/90">
							Jasa untuk pemasangan baru <i>Solar Panel</i>, pemeliharaan, dan perakitan power serta di
							dukung oleh <i>Team Man Power</i> yang berpengalaman di bidangnya.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
