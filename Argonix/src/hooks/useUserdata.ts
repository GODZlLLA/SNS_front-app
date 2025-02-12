import { db } from '@/constants/firebaseConfig';
import { Userdata } from '@/types/userdata';
import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useUserdata = () => {
  const [userdata, setUserdata] = useState<Userdata | null>(null);
  const auth = getAuth();

  useEffect(() => {
    if (!auth.currentUser) return;

    const userId = auth.currentUser?.uid;

    if (!userId) {
      console.error('ユーザーが認証されていません。');
      return; // ユーザーが認証されていない場合は処理を中断
    }

    const userDocRef = doc(db, 'users', userId);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setUserdata({ ...docSnap.data() } as Userdata);
      } else {
        console.log('ユーザードキュメントが見つかりません。');
      }
    });

    return () => unsubscribe();
  }, [auth.currentUser]);

  return userdata;
};

export { useUserdata };
