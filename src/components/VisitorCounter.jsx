import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterRef = doc(db, "visitors", "visitors");

    const initialize = async () => {
      try {
        const snap = await getDoc(counterRef);

        if (!snap.exists()) {
          await setDoc(counterRef, {
            count: 0,
          });
        }

        const counted = sessionStorage.getItem(
          "portfolio_visitor"
        );

        if (!counted) {
          await updateDoc(counterRef, {
            count: increment(1),
          });

          sessionStorage.setItem(
            "portfolio_visitor",
            "true"
          );
        }
      } catch (err) {
        console.error(err);
      }
    };

    initialize();

    const unsubscribe = onSnapshot(counterRef, (snapshot) => {
      if (snapshot.exists()) {
        setCount(snapshot.data().count);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="visitor">
      <span>👁</span>
      <p>{count.toLocaleString()}</p>
    </div>
  );
}

export default VisitorCounter;