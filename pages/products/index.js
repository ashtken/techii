import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import products from "../../products.json";

export const getStaticProps = () => {
	return {
		props: {
			product: products,
		},
	};
};

export default function index({ product }) {
	return (
		<div>
			<Head>
				<title>All Products | Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Breadcrumbs />
			<div className="container mx-auto mt-24">
				<div className="grid grid-flow-row grid-cols-1 grid-rows-3 gap-4 justify-items-center md:grid-cols-3">
					{product.map((p) => {
						return (
							<div key={p.id} className="mb-24">
								<Link href={`/products/${p.id}`}>
									<a>
										<Image
											className="bg-gray-100 rounded"
											src={p.image}
											alt={`Preview of ${p.title}`}
											width={300}
											height={300}
										/>
										<h3 className="text-center text-primaryGray font-semibold">
											{p.title}
										</h3>
										<p className="text-center text-primaryGray font-semibold">
											£{p.price}
										</p>
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
