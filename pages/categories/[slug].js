import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import products from "../../products";

export const getStaticPaths = () => {
	const paths = products.map((product) => ({
		params: { slug: product.categories },
	}));
	return { paths, fallback: "blocking" };
};

export const getStaticProps = ({ params }) => {
	const category = params.slug;
	const product = products.filter(
		(product) => product.categories === category
	) || {
		notfound: true,
	};
	return {
		props: { product, category },
	};
};

export default function category({ product, category }) {
	return (
		<div>
			<Head>
				<title>{category} | Techii</title>
				<meta name="description" content="Techii Store" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Breadcrumbs />
			<div className="container mx-auto mt-24">
				<div className="grid grid-flow-row grid-cols-1 grid-rows-3 gap-4 justify-items-center md:grid-cols-3">
					{product.map((p) => (
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
					))}
				</div>
			</div>
		</div>
	);
}
