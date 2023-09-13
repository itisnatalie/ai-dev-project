import { initiateCrawler } from '../../lib/server/crawler';
import { evaluate } from '../../lib/server/evaluator';

export const actions = {
	default: async ({ request }) => {
		try {
			// get the form
			const formData = await request.formData();

			// get the specific field from form
			const domain = formData.get('domain');

			// call the server side function
			const response = await initiateCrawler(domain);

			// Test the evaluator logic
			const foundIssues = evaluate(response);
			// console.log('HELLO');
			// console.log(foundIssues);

			console.log(foundIssues);

			// Return the data back
			return { success: true, crawlResult: response, issues: foundIssues };
		} catch (err) {
			console.error('Error on server side:', err); 
			return { success: false, crawlResult: 'An unexpected error occurred. Please try again.' };
		}
	}
};
