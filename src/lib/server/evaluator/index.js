import { isEmpty } from './isEmpty';
import { checkMetaData } from './meta';
import { checkBodyData } from './body';
import { checkSocialData } from './social';
import { checkSchemaData } from './schema';

export function evaluate(dataForEvaluate) {
	let foundIssues = {};

	// const dataset = dataForEvaluate.items.map((item) => {

	//     foundIssues = checkMetaData(item.data.meta, item.url);
	// });

	dataForEvaluate.items.forEach((item) => {
		foundIssues.meta = {
			[item.url]: checkMetaData(item.data.meta, item.url)
		};

		// add BODY logic
		// add SOCIAL logic
		// add SCHEMA data

		// Finally return all found issues
	});

	// console.log('Howdy from index.js: ');
	// console.log(foundIssues.meta);
	return foundIssues;
}
