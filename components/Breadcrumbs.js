import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/solid";

const convertBreadcrumb = (string) => {
	return string
		.replace(/-/g, " ")
		.replace(/_/g, " ")
		.replace(/oe/g, "ö")
		.replace(/ae/g, "ä")
		.replace(/ue/g, "ü");
};

const Breadcrumbs = () => {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState(null);

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split("/");
			linkPath.shift();

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: "/" + linkPath.slice(0, i + 1).join("/"),
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [router]);

	if (!breadcrumbs) {
		return null;
	}

	return (
		<nav aria-label="breadcrumbs">
			<ol className="hidden md:flex pl-10 pt-10 capitalize text-gray-500">
				<li className="pr-5">
					<Link href="/">
						<a>
							<HomeIcon className="h-5 w-5" />
						</a>
					</Link>
				</li>
				{breadcrumbs.map((breadcrumb, i) => {
					return (
						<>
							<div className="pr-5">
								<ChevronRightIcon className="h-5 w-5" />
							</div>
							<li key={breadcrumb.href} className="pr-5">
								<Link href={breadcrumb.href}>
									<a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
								</Link>
							</li>
						</>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
