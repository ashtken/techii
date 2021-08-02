import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://app.snipcart.com" />
					<link rel="preconnect" href="https://cdn.snipcart.com" />
					<link
						rel="stylesheet"
						href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<script
					async
					src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
				/>
				<div
					hidden
					id="snipcart"
					data-api-key="YThjODg0NDEtZGJiZi00NDZkLWE0YjAtOTY0NGI1MWUxOWI4NjM3NjA5NDgxMDk2NDc5NTk0"
					data-currency="gbp"
				/>
			</Html>
		);
	}
}

export default MyDocument;
