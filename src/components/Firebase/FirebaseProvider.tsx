import {
  useState,
  useContext,
  createContext,
  useMemo,
  useCallback,
  useEffect,
  PropsWithChildren,
} from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import {
  getAuth,
  User,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  update,
  get,
  child,
  onValue,
} from "firebase/database";
import { useSetRecoilState } from "recoil";
import { importHashState, remoteDataState } from "../../State";
import QueryString from "qs";

interface Data {
  signOut: () => void;
  exportData: (configHash: string) => void;
  user: User | undefined;
};

const FirebaseContext = createContext<Data | undefined>(undefined);

export function useFirebase() {
  const result = useContext(FirebaseContext);
  if (!result) {
    throw Error("whoops");
  }
  return result;
}

const { Provider } = FirebaseContext;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getDatabase(app);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ display: 'popup', prompt: 'select_account' });


interface Props {
}

export const FirebaseProvider = ({ children }: PropsWithChildren<Props>) => {
  const [user, setUser] = useState<User | undefined>();

  const signOut = useCallback(() => {
    firebaseSignOut(auth);
  }, []);

  const exportData = useCallback(
    (configHash: string) => {
      if (!user) {
        console.error(new Error("No firebase or auth user"));
        return;
      }
      try {
        const updates = {
          [`spoilerFilter/${user.uid}`]: { configHash },
        };
        update(ref(db), updates);
      } catch (e) {
        console.error(e)
      }
    },
    [user]
  );

  const setRemoteData = useSetRecoilState(remoteDataState);
  const setImportHash = useSetRecoilState(importHashState);

  const updateRemoteData = useCallback(
    (snapshot: any) => {
      if (snapshot.val()) {
        setRemoteData(snapshot.val()["configHash"]);
      }
    },
    [setRemoteData]
  );

  useEffect(() => {
    if (!auth) return;
    onAuthStateChanged(auth, (authUser) => {
      setUser(authUser || undefined);
      if (authUser) {
        get(child(ref(db), `spoilerFilter/${authUser.uid}`)).then(
          updateRemoteData
        );
      } else {
        setRemoteData(undefined);
      }
    });
  }, [setRemoteData, updateRemoteData]);

  useEffect(() => {
    const urlParams = QueryString.parse(window.location.search.substr(1));
    const importUserId = urlParams["importFrom"] as string;
    if (!importUserId) {
      return;
    }

    onValue(ref(db, `spoilerFilter/${importUserId}`), (snapshot) => {
      if (snapshot.val()) {
        setImportHash(snapshot.val()["configHash"]);
      }
      return;
    });
  }, [setImportHash, user]);

  useEffect(() => {
    if (!user) {
      return;
    }
    onValue(ref(db, `spoilerFilter/${user.uid}`), updateRemoteData);
  }, [user, updateRemoteData]);

  const value = useMemo(
    () => ({
      signOut,
      exportData,
      user,
    }),
    [
      signOut,
      exportData,
      user
    ]
  );

  return <Provider value={value}>{children}</Provider>;
};
