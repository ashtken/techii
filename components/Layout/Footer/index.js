import BottomBar from "./BottomBar";
import MainFooter from "./MainFooter";
import Social from "./Social";

export default function Footer() {
	return (
		<div className="mt-32">
			<Social />
			<MainFooter />
			<BottomBar />
		</div>
	);
}
