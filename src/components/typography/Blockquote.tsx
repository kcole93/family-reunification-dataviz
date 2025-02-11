type BlockquoteProps = {
	text: string;
	author: string;
	className?: string;
	containerClassName?: string;
};

export const Blockquote: React.FC<BlockquoteProps> = ({
	text,
	author,
	className = "",
	containerClassName = "",
}) => {
	return (
		<div className={`p-6 ${containerClassName}`}>
			<blockquote
				className={`relative py-8 px-8 bg-slate-100 rounded-lg shadow-sm ${className}`}
			>
				{/* Decorative quote mark */}
				<div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
					<div className="text-slate-300 text-6xl lg:text-6xl font-serif">
						"
					</div>
				</div>

				<p className="relative lg:max-w-[40ch] text-pretty text-xl italic font-semibold text-gray-800 leading-relaxed">
					{text}
				</p>

				<footer className="mt-6">
					<cite className="block text-right text-gray-600 font-medium">
						— {author}
					</cite>
				</footer>
			</blockquote>
		</div>
	);
};
