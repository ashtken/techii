export default function ProductHome({ titleOne, titleTwo, link, image }) {
	return (
		<div className="flex flex-col bg-gray-100 mx-10 my-10">
			<div className="flex flex-1 justify-center px-6 w-full py-6">
				<div className="flex flex-col justify-center">
					<h4 className="text-base font-bold text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl xl:text-2xl">
						{titleOne}
					</h4>
					<h1 className="text-4xl tracking-tight font-bold text-center text-gray-700 sm:text-4xl md:text-5xl xl:text-6xl">
						{titleTwo}
					</h1>
					<div className="mt-5 sm:mt-8 sm:flex justify-center">
						<div className="rounded-md shadow">{link}</div>
					</div>
				</div>
			</div>
			<div className="text-center flex-1">{image}</div>
		</div>
	);
}
