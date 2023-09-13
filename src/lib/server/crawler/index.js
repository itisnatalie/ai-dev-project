// Crawlee crawler logic
import { CheerioCrawler, Dataset } from 'crawlee';
// Import the Apify SDK into your project
import { Actor } from 'apify';
import { scrapAllData } from '../scrapper';
import { getConfig } from './config';

/**
 * Initiates the web crawler using CheerioCrawler.
 *
 * This function sets up and runs the CheerioCrawler to crawl website
 * from a given domain. It also uses Apify's actor system for managing
 * the request queue and dataset. For each crawled website it runs an
 * instance of the scrapper to retrieve page's data.
 * After processing, it stores the scraped data alongside the URL in the dataset.
 *
 * @param {string} domain - The starting URL/domain to crawl.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing scraped data and URLs.
 */
export async function initiateCrawler(domain) {
	// Get a config for the crawler
	let config = getConfig(domain);

	// Initialize the Apify actor
	await Actor.init();

	// Create new named queue and new named dataset
	const requestQueue = await Actor.openRequestQueue(config.queueName);
	const requestDataset = await Actor.openDataset(config.datasetName);

	// CheerioCrawler crawls the web using HTTP requests
	const crawler = new CheerioCrawler({
		requestQueue, // passing the new unique queue

		// Use the requestHandler to process each of the crawled pages.
		async requestHandler({ request, $, enqueueLinks }) {
			await requestDataset.pushData({ url: request.loadedUrl, data: scrapAllData($) });

			// Extract links from the current page and add them to the crawling queue if they match the pattern
			await enqueueLinks({ globs: config.domainPattern });
		}
	});

	// Add first URL to the queue and start the crawl.
	await crawler.run([domain]);

	// Finally return the list of urls
	return requestDataset.getData();
}
