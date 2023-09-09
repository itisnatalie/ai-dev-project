import { c as create_ssr_component, v as validate_store, s as subscribe } from "./ssr.js";
import { w as writable } from "./index3.js";
import { collection, onSnapshot } from "firebase/firestore";
import { g as getFirebaseContext } from "./sdk.js";
function collectionStore(firestore, ref, startWith = []) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3,
      ref: null
    };
  }
  if (!firestore) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe3 } = writable([]);
    return {
      subscribe: subscribe3,
      ref: null
    };
  }
  const colRef = typeof ref === "string" ? collection(firestore, ref) : ref;
  const { subscribe: subscribe2 } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((s) => {
        return { id: s.id, ref: s.ref, ...s.data() };
      });
      set(data);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2,
    ref: colRef
  };
}
const Collection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { ref } = $$props;
  let { startWith = void 0 } = $$props;
  const { firestore } = getFirebaseContext();
  let store = collectionStore(firestore, ref, startWith);
  validate_store(store, "store");
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.startWith === void 0 && $$bindings.startWith && startWith !== void 0)
    $$bindings.startWith(startWith);
  $$unsubscribe_store();
  return `${$store !== void 0 ? `${slots.default ? slots.default({
    data: $store,
    ref: store.ref,
    count: $store?.length ?? 0,
    firestore
  }) : ``}` : `${slots.loading ? slots.loading({}) : ``}`}`;
});
export {
  Collection as C
};
