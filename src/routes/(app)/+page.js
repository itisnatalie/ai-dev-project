import { firestore } from '$lib/firebase';
import {
	collection,
	query,
	orderBy,
	getDocs,
	limit,
	startAt,
	getCountFromServer
} from 'firebase/firestore';

export async function load({ url }) {
	const skip = url.searchParams.get('skip') || 0;
	let length = 10;
	let domainsRef = collection(firestore, '/domain');
	/* pagination with will load, which is not the best solution. This should be rewrited. I need to keep track of the last document that was loaded,
	 * after that previous and next can be implemented, however, we might lose the ability to skip multiple pages.
	 */
	const fullSnapshot = await getDocs(query(domainsRef, orderBy('status')));
	let skipSnapShot = fullSnapshot.docs[skip];
	// size which is not the best solution
	const size = (await getCountFromServer(domainsRef)).data().count;

	const dataQuery = query(domainsRef, orderBy('status'), startAt(skipSnapShot), limit(length));

	const data = await getDocs(dataQuery);

	return { domains: data, size };
}
