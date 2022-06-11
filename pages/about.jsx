import Header from "../components/header";
import Image from "next/image";

const About = () => {
	return (
		<div>
			<div className="flex flex-col justify-center leading-relaxed tracking-wider text-center">
				<Header name="Tentang Kami" image="/images/about-header.jpeg" />
				<div className="mx-auto my-10 container-none lg:container">
					<div className="mx-5 text-xl font-light text-justify md:mx-14 lg:mx-52">
						<p className="mb-10">
							PT. AGRINDO MERCU BUANA, adalah perusahaan yang bergerak di bidang Telekomunikasi, yang
							Berdomisili Di Bumi Serpong Damai dan didirikan pada tanggal 05 Agustus 2020, Perusahaan
							yang kami dirikan inimenyediakan Solusi lengkap bagi Perusahaan dan untuk perorangan bagi
							yang menggunakan jasa kami.
						</p>
						<p className="mb-10">
							AGRINDO MERCU BUANA terus menjaga komitmen untuk terus berusaha dan mengembangkan inovasi
							dalam bidang Pembagunan sarana dan prasarana Telekomunikasi di Indonesia. Hal ini
							mempertegas Agrindo Mercu Buana akanTerus meningkatkan kualitas dan layanan sebagai bentuk
							komintmen kami.
						</p>
					</div>
					<div className="mx-3 md:mx-14 lg:mx-52">
						<div className="mb-10">
							<div className="my-5 text-6xl font-bold tracking-wide text-emerald-600">VISI</div>
							<ul className="px-10 text-xl font-light text-left list-disc">
								<li>
									Menjadi Mitra yang stategis yang Kompetitif, Integritas, dan Terpercaya dalam Bidang
									layanan, Konstruksi dan jasa pembagunan infrastruktur Telekomunikasi di Indonesia.
								</li>
								<li>
									Menjadi Perusahaan Terbaik di Skala nasional dalam bidang Pertelekomunikasian Serta
									layanan publik di indonesia.
								</li>
							</ul>
						</div>
						<div className="mb-10">
							<div className="my-5 text-6xl font-semibold tracking-wide text-emerald-600">MISI</div>
							<ul className="px-10 text-xl font-light text-left list-disc">
								<li>Mengutamakan Keselamatan</li>
								<li>Memberikan Pelayanan Yang terbaik</li>
								<li>Membangun dan Memajukan Infrastruktur di Indonesia</li>
								<li>Mendukung pembagunan Perluasan Infrastruktur Skala Nasional</li>
								<li>Mengembangkan Bidang Komunikasi dan Prasarana di Indonesia</li>
								<li>Menjadikan Pelanggan Dan Mitra kerja sebagai Patner Perusahaan</li>
							</ul>
						</div>
						<div className="mb-10">
							<div className="my-5 text-4xl font-semibold tracking-wide lg:text-6xl text-emerald-600">
								Struktur Organisasi
							</div>
							<div className="px-10">
								<Image
									src="/images/struktur-organisasi.png"
									layout="responsive"
									width={650}
									height={500}
									alt="Struktur Organisasi"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
