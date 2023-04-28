import React from "react";
import AboutMe from "./component/aboutme";
import Portfolio from "./component/portfolio";

import { aboutMe, skills, professionalData, portfolioData } from "../data/page-data";
import ProfessionalExperience from "./component/professional-experience";
const page = () => {
	return (
	
			<div>
			<AboutMe data={aboutMe} skills={skills} />		
			<ProfessionalExperience data={professionalData} />
			<Portfolio portfolio={portfolioData}/>

		</div>
	);
};

export default page;