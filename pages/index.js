import Head from "next/head";
import Image from "next/image";
import products from "../products.json";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Snipcart Test</h1>
				<p>
					<a
						className="snipcart-checkout snipcart-summary"
						href="#"
						style={{ textDecoration: "none" }}
					>
						<strong>Cart:</strong>{" "}
						<span className="snipcart-total-price">$0.00</span>
					</a>
				</p>
				<div>
					{products.map((product) => {
						return (
							<div key={product.id}>
								<Image
									src={product.image}
									alt={`Preview of ${product.title}`}
									width={500}
									height={500}
								/>
								<h3>{product.title}</h3>
								<p>{product.description}</p>
								<p>${product.price}</p>
								<p>
									<button
										className="snipcart-add-item"
										data-item-id={product.id}
										data-item-image={product.image}
										data-item-name={product.title}
										data-item-url="/"
										data-item-price={product.price}
									>
										Add to Cart
									</button>
								</p>
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
}
