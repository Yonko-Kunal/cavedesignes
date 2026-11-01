import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={twMerge(
					"container mx-auto px-2 py-2 xl:max-w-screen 2xl:max-w-400",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Container.displayName = "Container";

export default Container;
