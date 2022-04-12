import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import products from "../products";
import Button from "../components/Button";

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
				<title>Home | Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<div className="flex flex-col lg:flex-row">
					<div className="flex flex-1 justify-center lg:justify-end lg:mr-10 xl:mr-20 px-6 w-full py-6">
						<div className="flex flex-col justify-center">
							<h4 className="text-base font-bold text-center text-lightGray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
								Techii
							</h4>
							<h1 className="text-4xl tracking-tight font-bold text-center text-primaryGray sm:text-4xl md:text-5xl xl:text-6xl">
								Upgrade to the latest
							</h1>
							<h1 className="text-4xl tracking-tight font-bold text-center text-lightGray sm:text-4xl md:text-5xl xl:text-6xl">
								Hats today
							</h1>
							<div className="mt-5 sm:mt-8 sm:flex justify-center">
								<div className="rounded-md shadow">
									<Link href="/categories/Beanies" passHref>
										<Button name={"Shop Hats"} />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center lg:text-left xl:ml-10 flex-1">
						<Image
							src="/images/techii-cap-black-side.png"
							alt="Preview image of a hat from Techii"
							width={700}
							height={700}
						/>
					</div>
				</div>
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
										<h3 className="text-center text-primaryGray font-semibold">
											{product.title}
										</h3>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col lg:flex-row">
					<div className="flex flex-1 justify-center lg:justify-end lg:mr-10 xl:mr-20 px-6 w-full py-6">
						<div className="flex flex-col justify-center">
							<h4 className="text-base font-bold text-center text-lightGray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
								T-Shirts with Techii
							</h4>
							<h1 className="text-4xl tracking-tight font-bold text-center text-primaryGray sm:text-4xl md:text-5xl xl:text-6xl">
								T-Shirts you will love
							</h1>
							<h1 className="text-4xl tracking-tight font-bold text-center text-lightGray sm:text-4xl md:text-5xl xl:text-6xl">
								In one place
							</h1>
							<div className="mt-5 sm:mt-8 sm:flex justify-center">
								<div className="rounded-md shadow">
									<Link href="/categories/tshirts" passHref>
										<Button name={"Shop T-shirts"} />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center lg:text-left xl:ml-10 flex-1">
						<Image
							src="/images/techii-tshirt-black-front.png"
							alt="Preview image of a T-Shirt from Techii"
							width={500}
							height={500}
						/>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-center mt-32">
					<div className="flex flex-col bg-gray-100 mx-10 my-10">
						<div className="flex flex-1 justify-center px-6 w-full py-6">
							<div className="flex flex-col justify-center">
								<h4 className="text-base font-bold text-center text-lightGray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
									The next gen
								</h4>
								<h1 className="text-4xl tracking-tight font-bold text-center text-primaryGray sm:text-4xl md:text-5xl xl:text-6xl">
									Techii Socks
								</h1>
								<div className="mt-5 sm:mt-8 sm:flex justify-center">
									<div className="rounded-md shadow">
										<Link href="/categories/tshirts" passHref>
											<Button name={"Shop Socks"} />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center flex-1">
							<Image
								src="/images/techii-socks-front.png"
								alt="Preview image of socks from Techii"
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div className="flex flex-col bg-gray-100 mx-10 my-10">
						<div className="flex flex-1 justify-center px-6 w-full py-6">
							<div className="flex flex-col justify-center">
								<h4 className="text-base font-bold text-center text-lightGray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
									The next gen
								</h4>
								<h1 className="text-4xl tracking-tight font-bold text-center text-primaryGray sm:text-4xl md:text-5xl xl:text-6xl">
									Techii Hoodies
								</h1>
								<div className="mt-5 sm:mt-8 sm:flex justify-center">
									<div className="rounded-md shadow">
										<Link href="/categories/Hoodies" passHref>
											<Button name={"Shop Hoodies"} />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center flex-1">
							<Image
								src="/images/techii-hoodie-black-front.png"
								alt="Preview image of a Hoodie from Techii"
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
