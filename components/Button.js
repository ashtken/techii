import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Button = forwardRef(({ href, name }, ref) => {
	return (
		<a
			href={href}
			ref={ref}
			className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryGray transition duration-300 ease-in-out hover:bg-secondaryBlue md:py-4 md:text-lg md:px-10"
		>
			{name}
		</a>
	);
});

export default Button;
