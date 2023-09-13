import { isEmpty } from './isEmpty';

export function checkMetaData(data, url) {
	// console.log('checkMetaData: ' + data.meta);
	const metaData = Object.entries(data);
	// console.log('Meta.js: ' + metaData);

	let foundIssues = {};

	metaData.forEach(([key, value]) => {
		switch (key) {
			case 'title':
				if (!isEmpty(value)) {
					// check length (range) of the title
					// check duplicity amongst the other titles
					// (optional) check relevancy against the body content
					// console.log('Title exists: ' + value);
					foundIssues = {
						title: 'everything is fine'
					};
				} else {
					// log missing title error
					// console.log('Title is missing');
					foundIssues = {
						title: 'null'
					};
				}
				break;

			case 'description':
				if (!isEmpty(value)) {
					// check length (range) of the description
					// check duplicity amongst the other descriptions
					// (optional) check relevancy against the body content
					// console.log('Meta description is: ' + value);
				} else {
					// log missing description
					// console.log('Meta description is missing');
					foundIssues = {
						description: 'null'
					};
				}

				break;

			case 'canonical':
				// Check if exists
				if (isEmpty(value)) {
					// log missing cannonical tag
					// console.log('Canonnical tag is missing');
					foundIssues = {
						canonical: 'null'
					};
				} else {
					// console.log('Canonnical tag found: ' + value);
				}

				break;

			case 'alternates':
				if (!isEmpty(value)) {
					// Research what should be check for the values
					// console.log('Some alternate tags found');
				} else {
					// console.log('No alternates found');
					foundIssues = {
						alternates: 'null'
					};
				}
				break;

			default:
				console.warn('Unknown value passed to checkMetaData method: ' + key);
				break;
		}
	});

	return foundIssues;
}

// data:
//   ├── meta:
//   │   ├── title: "Sample Title of the Webpage"
//   │   ├── description: "This is the sample meta description of the webpage."
//   │   ├── canonical: "https://www.example.com/sample-page/"
//   │   └── alternates:
//   │       ├── - href: "https://www.example.com/fr/sample-page/"
//   │       │     hreflang: "fr"
//   │       └── - href: "https://www.example.com/es/sample-page/"
//   │             hreflang: "es"
