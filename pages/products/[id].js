import products from "../../products";
import Image from "next/image";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs";

export const getStaticPaths = () => {
	const paths = products.map((product) => ({
		params: { id: product.id },
	}));
	return { paths, fallback: "blocking" };
};

export const getStaticProps = ({ params }) => {
	const id = params.id;
	const product = products.find((product) => product.id === id) || {
		notfound: true,
	};
	return {
		props: { product },
	};
};

export default function Product({ product }) {
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState(null);

	function incrementQuantity(e) {
		setQuantity(quantity + 1);

		e.preventDefault();
	}
	function decrementQuantity(e) {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
		e.preventDefault();
	}

	return (
		<div>
			<Head>
				<title>{product.title} | Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Breadcrumbs />
			<div className="flex flex-col md:flex-row mt-12">
				<div className="w-full text-right md:mr-10">
					<Image
						className="bg-gray-100 rounded"
						src={product.image}
						alt={`Preview of ${product.title}`}
						width={700}
						height={700}
					/>
				</div>

				<div className="w-full flex justify-center md:justify-start">
					<div className="w-72 px-6 md:px-0 md:ml-10  flex flex-col justify-center">
						<div className="border-b-2 border-gray-100">
							<h1 className="text-3xl font-medium text-primaryGray pt-4 pb-8">
								{product.title}
							</h1>
							<h2 className="text-xl font-medium text-primaryGray pb-6">
								{product.description}
							</h2>
							<p className="text-lightGray text-lg pb-10">£{product.price}</p>
						</div>
						<form className="py-10 flex">
							<button onClick={decrementQuantity}>
								<MinusIcon className="w-5 h-5" />
							</button>
							<input
								className="w-10 quantityStyle text-center bg-white border-0"
								type="number"
								value={quantity}
								min="1"
								max="999"
								onChange={(e) => setQuantity(e.target.value)}
								disabled
							/>
							<button onClick={incrementQuantity}>
								<PlusIcon className="w-5 h-5" />
							</button>
						</form>
						{product.options ? (
							<div className="w-full pr-2 flex justify-between pb-10">
								{product.options.split("|").map((sizes, sizesIdx) => {
									return (
										<div className="cursor-pointer w-10 h-10" key={sizesIdx}>
											<input
												className="hidden sizeOptions"
												type="radio"
												value={sizes}
												id={sizes}
												name="sizes"
												onChange={(e) => setSize(e.target.value)}
											/>
											<label
												className="inline-block w-10 h-10 text-center py-1.5 cursor-pointer shadow border border-transparent text-base font-medium rounded-md text-primaryGray bg-white hover:bg-lightGray hover:text-white"
												htmlFor={sizes}
											>
												{sizes}
											</label>
										</div>
									);
								})}
							</div>
						) : (
							<h1 className="text-base font-medium text-lightGray pb-10">
								One Size
							</h1>
						)}

						<button
							className="snipcart-add-item w-full py-2 shadow border border-transparent text-base font-medium rounded-md text-white bg-primaryGray hover:bg-secondaryBlue transition duration-300 ease-in-out"
							data-item-id={product.id}
							data-item-image={product.image}
							data-item-name={product.title}
							data-item-url={`/products/${product.id}`}
							data-item-price={product.price}
							data-item-custom1-name={product.name}
							data-item-custom1-options={product.options}
							data-item-quantity={quantity}
							data-item-custom1-value={size}
						>
							Buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
