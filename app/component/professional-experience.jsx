import React from "react";

const ProfessionalExperience = ({ data, portfolio }) => {
	const { title, experiences } = data;
	return (
		<section>
			<h2 className='mb-6'> {title}</h2>
			<div className='flex flex-col gap-6'>
				{experiences.map(({ role, description, current }) => (
					<div key={role} className='flex flex-col rounded-lg'>
						<span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
						<div className='bg-grey-light p-6 drop-shadow-md'>
							<h3>{role}</h3>
							<p className='mt-2'>{description}</p>
						</div>
					</div>
				))}
			</div>
			{portfolio && (
				<div className='mt-8'>
					<h2 className='mb-6'>Portfolio</h2>
					<div className='flex flex-col gap-6'>
						{portfolio.map(({ name, description, image }) => (
							<div key={name} className='flex flex-col rounded-lg'>
								<img src={image} alt={name} className='rounded-t-lg' />
								<div className='bg-grey-light p-6 drop-shadow-md rounded-b-lg'>
									<h3>{name}</h3>
									<p className='mt-2'>{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default ProfessionalExperience;
