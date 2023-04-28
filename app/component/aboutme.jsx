import React, { useId } from "react";
// import Skills from "./skills";

const AboutMe = ({ data }) => {
	const { title, body } = data;
	const id = useId();
	return (
		<section>
			<h2 className='mb-8 font-extrabold text-turquoise '> {title}</h2>
			{body?.map((el, i) => (
				<p key={`${id}_${i}`} className='mb-6 text-bold'>
					{el}
				</p>
			))}
			{/* <Skills data={skills} /> */}
		</section>
	
	);
};

export default AboutMe;