import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import products from "../products";

export const getStaticProps = async () => {
	return {
		props: {
			products: products,
		},
	};
};

export default function Home({ products }) {
	return (
		<div>
			<Head>
				<title>Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<div className="flex justify-center align-middle flex-col xl:flex-row">
					<div className="max-w-7xl mt-20 px-6">
						<div className="text-center">
							<p className="text-base font-bold text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
								Techii
							</p>
							<h1 className="text-4xl tracking-tight font-bold text-gray-700 sm:text-5xl md:text-6xl">
								<span className="block">Upgrade to the latest</span>
								<span className="block text-gray-500">Hats today</span>
							</h1>

							<div className="mt-5 sm:mt-8 sm:flex justify-center">
								<div className="rounded-md shadow">
									<Link href="/categories/beanies">
										<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 md:py-4 md:text-lg md:px-10">
											Shop Hats
										</a>
									</Link>
								</div>
								{/* <div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
									>
										Shop All
									</a>
								</div> */}
							</div>
						</div>
					</div>
					<div className="text-center">
						<Image
							src="/images/mockup-test-hat.png"
							alt="Preview of a hat"
							width={700}
							height={700}
						/>
					</div>
				</div>

				<div className="flex whitespace-nowrap overflow-x-auto scrollbar py-5">
					{products.map((product) => {
						return (
							<div key={product.id} className="min-w-max px-10">
								<Link href={`/products/${product.id}`}>
									<a>
										<Image
											src={product.image}
											alt={`Preview of ${product.title}`}
											width={150}
											height={150}
										/>
										<h3 className="text-center">{product.title}</h3>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
