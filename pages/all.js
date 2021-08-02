import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import products from "../products";

export const getStaticProps = async () => {
	return {
		props: {
			product: products,
		},
	};
};

export default function All({ product }) {
	return (
		<div>
			<Head>
				<title>All Products | Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto">
				<div className="grid grid-flow-row grid-cols-1 grid-rows-3 gap-4 justify-items-center md:grid-cols-3">
					{products.map((p) => {
						return (
							<div key={p.id}>
								<Link href={`/products/${p.id}`}>
									<a>
										<Image
											src={p.image}
											alt={`Preview of ${p.title}`}
											width={150}
											height={150}
										/>
										<h3 className="text-center">{p.title}</h3>
										<p className="text-center">£{p.price}</p>
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
