import { clothing, hats, more, recentPosts } from "../MenuItems";

export default function MainFooter() {
	return (
		<div className="flex flex-col md:flex-row justify-evenly p-8 bg-gray-900 text-white">
			<div className="relative grid gap-4 px-5 py-6 sm:gap-8 sm:p-8">
				{clothing.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="-m-3 p-3 flex items-start rounded-lg h-24 hover:bg-gray-50"
					>
						<div className="ml-4 w-full">
							<p className="text-base font-medium w-full text-gray-700">
								{item.name}
							</p>
							<p className="mt-1 text-sm w-full text-gray-500">
								{item.description}
							</p>
						</div>
					</a>
				))}
			</div>
			<div className="relative grid gap-4 px-5 py-6 sm:gap-8 sm:p-8">
				{hats.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
					>
						<div className="ml-4 w-full">
							<p className="text-base font-medium text-gray-700">{item.name}</p>
							<p className="mt-1 text-sm text-gray-500">{item.description}</p>
						</div>
					</a>
				))}
			</div>
			<div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
				{more.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
					>
						<item.icon
							className="flex-shrink-0 h-6 w-6 text-gray-700"
							aria-hidden="true"
						/>
						<div className="ml-4">
							<p className="text-base font-medium text-gray-700">{item.name}</p>
							<p className="mt-1 text-sm text-gray-500">{item.description}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
