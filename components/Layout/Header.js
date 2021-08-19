import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { clothing, hats, callsToAction, more, recentPosts } from "./MenuItems";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	return (
		<Popover className="relative bg-white">
			{({ open }) => (
				<>
					<div className="max-w- mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							<div className="flex justify-start lg:w-0 lg:flex-1">
								<Link href="/">
									<a>
										<span className="sr-only">Workflow</span>
										<Image
											className="h-8 w-auto sm:h-10"
											src="/vercel.svg"
											alt="Techii Logo"
											width={75}
											height={50}
										/>
									</a>
								</Link>
							</div>
							<div className="-mr-2 my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
									<span className="sr-only">Open menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>

							<Popover.Group as="nav" className="hidden md:flex space-x-10">
								<Link href="/products">
									<a className="text-base font-medium text-gray-500 hover:text-gray-900">
										All
									</a>
								</Link>
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
												)}
											>
												<span>Clothing</span>
												<ChevronDownIcon
													className={classNames(
														open ? "text-gray-600" : "text-gray-400",
														"ml-2 h-5 w-5 group-hover:text-gray-500"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel
													static
													className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
												>
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-4 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{clothing.map((item) => (
																<a
																	key={item.name}
																	href={item.href}
																	className="-m-3 p-3 flex items-start rounded-lg h-24 hover:bg-gray-50"
																>
																	<div
																		className="w-20 h-full rounded-b-lg bg-cover bg-center"
																		style={{
																			backgroundImage: `url(${item.image})`,
																		}}
																	></div>
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
														<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
															{callsToAction.map((item) => (
																<div key={item.name} className="flow-root">
																	<a
																		href={item.href}
																		className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
																	>
																		<item.icon
																			className="flex-shrink-0 h-6 w-6 text-gray-400"
																			aria-hidden="true"
																		/>
																		<span className="ml-3">{item.name}</span>
																	</a>
																</div>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
												)}
											>
												<span>Hats</span>
												<ChevronDownIcon
													className={classNames(
														open ? "text-gray-600" : "text-gray-400",
														"ml-2 h-5 w-5 group-hover:text-gray-500"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel
													static
													className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
												>
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{hats.map((item) => (
																<a
																	key={item.name}
																	href={item.href}
																	className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
																>
																	<div
																		className="w-20 h-full rounded-b-lg bg-cover bg-center"
																		style={{
																			backgroundImage: `url(${item.image})`,
																		}}
																	></div>
																	<div className="ml-4 w-full">
																		<p className="text-base font-medium text-gray-700">
																			{item.name}
																		</p>
																		<p className="mt-1 text-sm text-gray-500">
																			{item.description}
																		</p>
																	</div>
																</a>
															))}
														</div>
														<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
															{callsToAction.map((item) => (
																<div key={item.name} className="flow-root">
																	<a
																		href={item.href}
																		className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
																	>
																		<item.icon
																			className="flex-shrink-0 h-6 w-6 text-gray-400"
																			aria-hidden="true"
																		/>
																		<span className="ml-3">{item.name}</span>
																	</a>
																</div>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
												)}
											>
												<span>More</span>
												<ChevronDownIcon
													className={classNames(
														open ? "text-gray-600" : "text-gray-400",
														"ml-2 h-5 w-5 group-hover:text-gray-500"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel
													static
													className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
												>
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
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
																		<p className="text-base font-medium text-gray-700">
																			{item.name}
																		</p>
																		<p className="mt-1 text-sm text-gray-500">
																			{item.description}
																		</p>
																	</div>
																</a>
															))}
														</div>
														<div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
															<div>
																<h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
																	Recent Posts
																</h3>
																<ul className="mt-4 space-y-4">
																	{recentPosts.map((post) => (
																		<li
																			key={post.id}
																			className="text-base truncate"
																		>
																			<a
																				href={post.href}
																				className="font-medium text-gray-700 hover:text-gray-700"
																			>
																				{post.name}
																			</a>
																		</li>
																	))}
																</ul>
															</div>
															<div className="mt-5 text-sm">
																<a
																	href="#"
																	className="font-medium text-gray-900 hover:text-gray-700"
																>
																	View all posts
																	<span aria-hidden="true">&rarr;</span>
																</a>
															</div>
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>
							</Popover.Group>
							<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
								<button className="snipcart-customer-signin">
									<a
										href="#"
										className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											/>
										</svg>
									</a>
								</button>
								<a
									href="#/cart"
									className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium text-gray-500 hover:text-gray-900"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-40 md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										<div>
											<Image
												className="h-8 w-auto sm:h-10"
												src="/vercel.svg"
												alt=""
												width={75}
												height={50}
											/>
										</div>
										<div className="-mr-2">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6">
										<nav className="grid gap-y-8">
											<Link href="/products">
												<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
													<span className="ml-3 text-base font-medium text-gray-900">
														All
													</span>
												</a>
											</Link>
											{clothing.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
												>
													<span className="ml-3 text-base font-medium text-gray-900">
														{item.name}
													</span>
												</a>
											))}
											{hats.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
												>
													<span className="ml-3 text-base font-medium text-gray-900">
														{item.name}
													</span>
												</a>
											))}
										</nav>
									</div>
								</div>
								<div className="py-6 px-5 space-y-6">
									<div className="grid grid-cols-2 gap-y-4 gap-x-8">
										<Popover.Button
											href="#"
											className="snipcart-customer-signin text-base text-left font-medium text-gray-900 hover:text-gray-700"
										>
											My Account
										</Popover.Button>
										<Popover.Button className="text-left">
											<a
												href="#/cart"
												className="text-base font-medium text-gray-900 hover:text-gray-700"
											>
												Cart
											</a>
										</Popover.Button>
										{more.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="text-base font-medium text-gray-900 hover:text-gray-700"
											>
												{item.name}
											</a>
										))}
									</div>
									<div>
										<Popover.Button
											href="#"
											className="snipcart-customer-register w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-500"
										>
											Sign up
										</Popover.Button>
										<p className="mt-6 text-center text-base font-medium text-gray-500">
											Existing customer?
											<Popover.Button
												href="#"
												className="snipcart-customer-signin ml-2 font-bold text-gray-500 hover:text-gray-400"
											>
												Sign in
											</Popover.Button>
										</p>
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}
