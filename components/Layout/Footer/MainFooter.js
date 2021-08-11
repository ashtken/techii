import { clothing, hats, more, callsToAction, recentPosts } from "../MenuItems";

export default function MainFooter() {
	return (
		<div className="flex justify-center bg-gray-900">
			<div className="flex flex-col md:flex-row justify-evenly max-w-7xl p-8">
				<div className="relative flex flex-col px-5 py-6">
					{clothing.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="-m-3 mb-3 p-3 flex items-start"
						>
							<div className="ml-4 w-full">
								<p className="text-base font-medium text-gray-400">
									{item.name}
								</p>
								<p className="mt-1 text-sm w-full text-gray-500">
									{item.description}
								</p>
							</div>
						</a>
					))}
				</div>
				<div className="relative flex flex-col px-5 py-6">
					{hats.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="-m-3 mb-3 p-3 flex items-start"
						>
							<div className="ml-4 w-full">
								<p className="text-base font-medium text-gray-400">
									{item.name}
								</p>
								<p className="mt-1 text-sm text-gray-500">{item.description}</p>
							</div>
						</a>
					))}
				</div>
				<div className="relative flex flex-col px-5 py-6">
					{more.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="-m-3 mb-3 p-3 flex items-start"
						>
							<item.icon
								className="flex-shrink-0 h-6 w-6 text-gray-500"
								aria-hidden="true"
							/>
							<div className="ml-4 w-full">
								<p className="text-base font-medium text-gray-400">
									{item.name}
								</p>
								<p className="mt-1 text-sm text-gray-500">{item.description}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
