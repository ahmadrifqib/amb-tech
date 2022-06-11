// Import Swiper React components
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="relative flex items-center content-center justify-center w-auto h-full">
				<Swiper
					style={{
						"--swiper-navigation-color": "#DFE0DF",
						"--swiper-pagination-color": "#DFE0DF",
						"--swiper-navigation-size": "50px",
						height: "40rem",
					}}
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 10000,
						disableOnInteraction: false,
					}}
					effect={"fade"}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[EffectFade, Autoplay, Navigation]}
					className="z-0 items-center content-center w-full mx-10 text-center shadow-2xl mySwiper"
				>
					<SwiperSlide>
						<img
							className="object-cover object-center w-screen h-screen"
							src="/images/slider/slider1.jpeg"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="object-cover object-center w-screen h-screen"
							src="/images/slider/slider2.jpeg"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="flex flex-col-reverse items-stretch justify-center w-auto py-20 space-x-4 tracking-wide md:py-24 lg:py-36 lg:flex-row">
				<div className="grid content-center gap-5 p-5 mx-6 lg:mx-0 lg:w-3/5">
					<div className="text-6xl font-semibold tracking-normal capitalize text-stone-800">
						tentang PT AMB Multi Teknik
					</div>
					<hr className="h-2 rounded-full bg-emerald-600 text-emerald-600 w-96" />
					<div className="text-4xl leading-tight text-stone-700/90">
						PT. AGRINDO MERCU BUANA adalah perusahaan yang bergerak di bidang Telekomunikasi yang
						berdomisili di bumi serpong damai dan didirikan pada tanggal 05 Agustus 2020.
					</div>
					<div className="mt-10">
						<Link href="/about">
							<a className="p-5 text-xl font-medium leading-tight tracking-widest transition rounded-lg bg-stone-300/90 text-stone-800/90 hover:bg-stone-400/80 duration-0 hover:duration-300">
								Selengkapnya
							</a>
						</Link>
					</div>
				</div>
				<div className="hidden w-auto lg:block">
					<Image
						src="/images/panel.jpeg"
						alt="Instalasi Panel"
						width="380"
						height="500"
						className="object-cover object-center rounded-lg shadow-lg h-96"
						layout="fixed"
						objectFit="cover"
					/>
				</div>
			</div>
			<div className="pt-10">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="text-4xl font-light tracking-wider uppercase text-stone-800">Lokasi</div>
					<div className="py-2 pb-10">
						<hr className="w-48 h-2 rounded-full text-emerald-600 bg-emerald-600" />
					</div>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.118838154223!2d106.6608989!3d-6.2926568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb190df66887%3A0x924f69b85a70e581!2sAgrindo%20Mercu%20Buana!5e0!3m2!1sid!2sid!4v1654358804988!5m2!1sid!2sid"
					className="w-full border-none"
					style={{ height: "32rem" }}
					allowFullScreen={true}
					loading={"lazy"}
				></iframe>
			</div>
		</div>
	);
}
