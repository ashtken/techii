import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductHero from "../components/ProductHero";
import ProductHome from "../components/ProductHome";
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
				<ProductHero
					titleOne="Techii"
					titleTwo="Upgrade to the latest"
					titleThree="Hats today"
					link={
						<Link href="/categories/beanies">
							<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 md:py-4 md:text-lg md:px-10">
								Shop Hats
							</a>
						</Link>
					}
					image={
						<Image
							src="/images/mockup-test-hat.png"
							alt="Preview image of a hat from Techii"
							width={700}
							height={700}
						/>
					}
				/>
				<div className="flex whitespace-nowrap overflow-x-auto scrollbar py-5 mb-32">
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
				<ProductHero
					titleOne="T-Shirts with Techii"
					titleTwo="T-Shirts you will love"
					titleThree="In one place"
					link={
						<Link href="/categories/tshirts">
							<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 md:py-4 md:text-lg md:px-10">
								Shop T-Shirts
							</a>
						</Link>
					}
					image={
						<Image
							src="/images/mockup-test-tshirt.png"
							alt="Preview image of a T-Shirt from Techii"
							width={700}
							height={700}
						/>
					}
				/>
				<div className="flex flex-col lg:flex-row justify-center mt-32">
					<div>
						<ProductHome
							titleOne="Hi"
							titleTwo="Hello"
							link={
								<Link href="/categories/tshirts">
									<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 md:py-4 md:text-lg md:px-10">
										Shop T-Shirts
									</a>
								</Link>
							}
							image={
								<Image
									src="/images/mockup-test-tshirt.png"
									alt="Preview image of a T-Shirt from Techii"
									width={700}
									height={700}
								/>
							}
						/>
					</div>
					<div>
						<ProductHome
							titleOne="Hi"
							titleTwo="Hello"
							link={
								<Link href="/categories/tshirts">
									<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 md:py-4 md:text-lg md:px-10">
										Shop T-Shirts
									</a>
								</Link>
							}
							image={
								<Image
									src="/images/mockup-test-tshirt.png"
									alt="Preview image of a T-Shirt from Techii"
									width={700}
									height={700}
								/>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
