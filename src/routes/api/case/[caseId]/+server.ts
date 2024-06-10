import { json, error } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '$lib/firebase';

export const GET = async ({ params }) => {
	const docRef = doc(db, 'case', params.caseId);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return json({ ...docSnap.data(), id: docSnap.id });
	}
	throw error(404, `Policy #${params.caseId} not found.`);
};
