"use client";

type Props = {
	lines?: number;
	className?: string;
};

export default function Skeleton({ lines = 3, className = "" }: Props) {
	return (
		<div className={`space-y-3 ${className}`}>
			{Array.from({ length: lines }).map((_, i) => (
				<div
					key={i}
					className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"
				/>
			))}
		</div>
	);
}

