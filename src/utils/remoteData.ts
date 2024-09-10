import { getFirestore, collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';
import { app } from 'boot/firebase';
import { ChartData } from 'pages/DashboardPage.vue';

const db = getFirestore(app);

export interface Filters {
  type: string;
  month?: string;
  product?: string;
}

export async function getDashboardData(filters: Filters) {
  const dataCollection = collection(db, 'dashboard/data/default');
  let q = query(dataCollection);

  q = query(q, where('type', '==', filters.type));

  if (filters.month) {
    q = query(q, where('month', '==', filters.month));
  }

  if (filters.product) {
    q = query(q, where('product', '==', filters.product));
  }


  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;

  return querySnapshot.docs[0].data() as ChartData;
}

export async function setDataDashboard(data: ChartData) {
  const dataCollection = collection(db, 'dashboard/data/default');
  const docRef = doc(dataCollection, data.id);
  await setDoc(docRef, data);
}
