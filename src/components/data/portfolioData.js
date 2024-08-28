/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
// export const portafolioData = [
// 	{
// 		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
// 		title: 'Restaurant',
// 		skills: ['React', 'StyledComponents'],
// 		descripcion:
// 			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
// 		demoURL: '',
// 		repoURL: '',
// 		anim: 'fade-right',
// 	},
// 	{
// 		imgSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299377097/original/7eb7dcebe244fcf5ad75d92b0969fc116946bd57/create-professional-amd-responsive-wordpress-website.jpg',
// 		title: 'E-commerce',
// 		skills: ['JavaScript', 'Bootstrap'],
// 		descripcion:
// 			' Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
// 		demoURL: '',
// 		repoURL: '',
// 		anim: 'fade-up',
// 		averageBrightness: 0.1,
// 	},
// 	{
// 		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
// 		title: 'Coffe Store',
// 		skills: ['React', 'CSS'],
// 		descripcion:
// 			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
// 		demoURL: '',
// 		repoURL: '',
// 		anim: 'fade-left',
// 	},
// 	{
// 		imgSrc: 'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
// 		title: 'Coffe Store',
// 		skills: ['React', 'CSS'],
// 		descripcion:
// 			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
// 		demoURL: '',
// 		repoURL: '',
// 		anim: 'fade-left',
// 	},
// 	{
// 		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
// 		title: 'Coffe Store',
// 		skills: ['React', 'CSS'],
// 		descripcion:
// 			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
// 		demoURL: '',
// 		repoURL: '',
// 		anim: 'fade-left',
// 	},
// 	{
// 		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
// 		title: 'Restaurant',
// 		skills: ['React', 'StyledComponents'],
// 		descripcion:
// 			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
// 		demoURL: '',
// 		repoURL: '',
// 		anim: 'fade-right',
// 	},
// ];

const portafolioData = [
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Globant, Sistemas Colombia SAS',
		skills: [
			'.NET Core 6',
			'C#',
			'MVC.NET',
			'SQL Server',
			'Angular',
			'TypeScript',
			'JavaScript',
			'Scrum',
			'Azure DevOps',
		],
		descripcion:
			'At Globant, I contributed to the development of a skincare product marketplace app. I implemented user-friendly features, developed RESTful microservices using .NET Core 6, and enhanced application performance and scalability. I worked closely with front-end technologies like Angular and TypeScript, ensuring a seamless user experience. Additionally, I collaborated within a Scrum framework and managed project workflows using Azure DevOps.',
		demoURL: '',
		repoURL: 'https://github.com/cnlopez',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Asesoftware SAS',
		skills: [
			'C#',
			'ASP.NET',
			'MVC.NET',
			'Blazor',
			'Razor',
			'SQL Server',
			'JavaScript',
			'jQuery',
			'Azure',
		],
		descripcion:
			'While at Asesoftware SAS, I developed user-friendly modules for a construction project management app and pioneered a reporting feature that provided real-time insights. My work enhanced project management processes and improved functionality. Additionally, I revitalized a credit card information control app by improving data accuracy and processing speed through innovative reporting systems and ETL processes.',
		demoURL: '',
		repoURL: 'https://github.com/cnlopez',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Megalinea SA',
		skills: [
			'C#',
			'ASP.NET',
			'SQL Server',
			'WCF Web Services',
			'ETL',
			'Team Foundation Server',
			'SOAP Services',
		],
		descripcion:
			'At Megalinea SA, I transformed the Call Center operations by developing an application that streamlined data capture and reduced errors during customer calls. I also implemented precise validations to enhance data reliability and improve overall communication efficiency. My role involved developing web applications using C#, ASP.NET, and SQL Server, as well as handling ETL processes and SOAP services.',
		demoURL: '',
		repoURL: 'https://github.com/cnlopez',
		anim: 'fade-right',
	},
];

export const skillIcons = {
	//JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
