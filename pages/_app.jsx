import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>AMB Technology</title>
				<meta
					name="description"
					content="PT Agrindo Mercu Buana adalah perusahaan yang bergerak di bidang telekomunikasi, kami menyediakan solusi lengkap bagi perusahaan dan perorangan."
				/>
				<meta name="author" content="PT AGRINDO MERCU BUANA" />
				<meta
					name="keywords"
					content="Wireless Internet Access, Wiring Office, Point to Point Radio Link, Very Small Aperturen Terminal (VSAT), Fiber Optic Instalation, CCTV and CCTVIP Instalation, Server Maintenance, Tower Construction, Survei, Sitac, New Site CME"
				/>
				{/* Open Graph Protocol */}
				<meta property="og:title" content="PT AGRINDO MERCU BUANA" />
				<meta property="og:site_name" content="PT AGRINDO MERCU BUANA" />
				<meta
					property="og:description"
					content="PT Agrindo Mercu Buana adalah perusahaan yang bergerak di bidang telekomunikasi, kami menyediakan solusi lengkap bagi perusahaan dan perorangan."
				/>
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="" /> */}
				{/* Twitter Property */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="PT AGRINDO MERCU BUANA" />
				<meta
					name="twitter:description"
					content="PT Agrindo Mercu Buana adalah perusahaan yang bergerak di bidang telekomunikasi, kami menyediakan solusi lengkap bagi perusahaan dan perorangan."
				/>

				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="w-full h-full px-8 py-4 transition-all duration-500 bg-white border-box linear lg:px-24 md:px-20">
				<div className="navbar-1-1">
					<div className="container flex flex-row flex-wrap items-center justify-between mx-auto">
						<Link href="/">
							<a className="flex items-center font-medium">
								<Image src="/images/logo.png" width={100} height={65} />
							</a>
						</Link>
						<label htmlFor="menu-toggle" className="block cursor-pointer lg:hidden">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="#092A33"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
						<input className="hidden" type="checkbox" id="menu-toggle" />
						<div
							className="flex-wrap items-center justify-center hidden w-full text-base lg:flex lg:items-center lg:w-auto lg:ml-12 lg:mr-auto"
							id="menu"
						>
							<nav className="items-center justify-between pt-8 space-x-0 space-y-6 text-2xl lg:space-x-12 lg:flex lg:pt-0 lg:space-y-0">
								<Link href="/">
									<a className="block nav-link">Beranda</a>
								</Link>
								<Link href="/product">
									<a className="block nav-link">Produk</a>
								</Link>
								<Link href="/project">
									<a className="block nav-link">Proyek</a>
								</Link>
								<Link href="/about">
									<a className="block nav-link">Tentang</a>
								</Link>
							</nav>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Component {...pageProps} />
			</section>
			<section className="footer font-display">
				<footer className="bg-sky-600">
					<div className="px-4 mx-auto max-w-screen-2xl py-14 lg:px-24">
						<div>
							<Image src="/images/logo.png" width={100} height={65} />
						</div>
						<div className="flex flex-col space-y-8 lg:items-center lg:flex-row lg:justify-between">
							<div className="lg:w-2/5 md:w-2/3">
								<div className="flex flex-col space-y-6 text-white mt-14">
									<div className="text-xl font-normal ">PT AGRINDO MERCU BUANA</div>
									<div>
										Central Business District Bidex Blok C No. 11-12 Jl. Pahlawan Seribu BSD City
										Serpong, Kelurahan Lengkong Gudang, Kecamatan Serpong, Kota Tangerang Selatan,
										Banten.
									</div>
									<div>
										<tr>
											<td>Email</td>
											<td>:</td>
											<td>
												<a href="mailto:ibrahim.saleh@ambindonesia.co.id">
													ibrahim.saleh@ambindonesia.co.id
												</a>
											</td>
										</tr>
										<tr>
											<td>Telp</td>
											<td>:</td>
											<td>
												<a href="tel:+622153164777">021 5316 4777</a>
											</td>
										</tr>
									</div>
								</div>
							</div>

							<div className="flex flex-col space-y-2 text-xl lg:space-y-4 lg:w-2/5 md:w-2/3">
								{/* <div className="mb-4 font-bold text-light-3">Our Company</div> */}
								<div>
									<Link href="/">
										<a className="font-normal text-light-3">Beranda</a>
									</Link>
								</div>
								<div>
									<Link href="/product">
										<a className="font-normal text-light-3">Produk</a>
									</Link>
								</div>
								<div>
									<Link href="/project">
										<a className="font-normal text-light-3">Proyek</a>
									</Link>
								</div>
								<div>
									<Link href="/about">
										<a className="font-normal text-light-3">Tentang Kami</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mt-10 text-base font-normal text-center text-light-3">
							&copy; {new Date().getFullYear()} PT. AGRINDO MERCU BUANA. All rights reserved.
						</div>
					</div>
				</footer>
			</section>
		</div>
	);
}

export default MyApp;
