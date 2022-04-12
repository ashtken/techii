import Button from "../../components/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { clothing, hats } from "../../components/Layout/MenuItems";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function index() {
	return (
		<div>
			<Head>
				<title>Categories | Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Breadcrumbs />
			<h1 className="mt-10 mb-16 text-primaryGray text-center text-6xl md:text-8xl font-semibold">
				Choose a <span className="text-secondaryBlue">Category.</span>
			</h1>
			<h2 className="mb-10 ml-3 md:ml-14 text-primaryGray text-xl font-semibold">
				Clothing
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mx-10">
				{clothing.map((clothing) => (
					<Link key={clothing.href} href={clothing.href}>
						<a>
							<div className="flex flex-col bg-gray-100">
								<div className="flex flex-1 justify-center px-6 w-full py-6">
									<div className="flex flex-col justify-center">
										<h4 className="text-base font-bold text-center text-lightGray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
											{clothing.name}
										</h4>
									</div>
								</div>
								<div className="text-center flex-1">
									<Image
										src={clothing.image}
										alt={`Preview image of ${clothing.name} for the category ${clothing.name}`}
										width={500}
										height={500}
									/>
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>
			<h2 className="mb-10 mt-16 ml-3 md:ml-14 text-primaryGray text-xl font-semibold">
				Hats
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mx-10">
				{hats.map((hat) => (
					<Link key={hat.href} href={hat.href}>
						<a>
							<div className="flex flex-col bg-gray-100">
								<div className="flex flex-1 justify-center px-6 w-full py-6">
									<div className="flex flex-col justify-center">
										<h4 className="text-base font-bold text-center text-lightGray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
											{hat.name}
										</h4>
									</div>
								</div>
								<div className="text-center flex-1">
									<Image
										src={hat.image}
										alt={`Preview image of ${hat.name} for the category ${hat.name}`}
										width={500}
										height={500}
									/>
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}
