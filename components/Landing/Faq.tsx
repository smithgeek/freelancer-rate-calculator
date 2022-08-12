import { ReactNode } from "react"

function QuestionAnswer({ question, children }: { question: string, children: ReactNode }) {
	return <details className="mb-4">
		<summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-gray-700 cursor-pointer">
			{question}
		</summary>
		{children}
	</details>
}
export const Faq = () => {
	return <div>
		<section>
			<div className="container px-5 py-24 mx-auto">
				<div className="text-center mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
						Frequently Asked Question
					</h1>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					<div className="w-full lg:w-1/2 px-4 py-2">
						<QuestionAnswer question="What questions do your customers have?">
							<span>
								Answer them here
							</span>
						</QuestionAnswer>
					</div>
					<div className="w-full lg:w-1/2 px-4 py-2">
						<QuestionAnswer question="What are you waiting for?">
							<span>
								Nothing
							</span>
						</QuestionAnswer>
					</div>
				</div>
			</div>
		</section>
	</div>

}