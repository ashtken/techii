import Link from "next/link";

export default function BottomBar() {
	return (
		<div className="flex justify-around py-7 text-lightGray bg-gray-800">
			<h1>©2021 Techii</h1>
			<h1>
				Built by{" "}
				<span>
					<Link href={"https://github.com/ashtken"}>
						<a>Ash 🚀</a>
					</Link>
				</span>
			</h1>
		</div>
	);
}
