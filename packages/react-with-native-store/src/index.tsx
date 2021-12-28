import * as React from "react";
import { useEffect, useState } from "react";
import { setItem, getItem } from "./storage";

export type StoreConfig<T extends object> = {
  initialValues: T;
  baseKey?: string;
};

type Keys<T> = Extract<keyof T, string>;

const getKey = (key: string, baseKey: string) => `${baseKey}.${key}`;
const contextKey = (key: string) => `${key}Context`;

export type UseStoreType<TStore> = <K extends Keys<TStore>>(
  key: K
) => [TStore[K], (value: TStore[K]) => Promise<void>];

const StoreContextProvider = <TStore extends object, K extends Keys<TStore>>({
  DynamicContext,
  children,
  config,
  storeKey,
}: {
  DynamicContext: React.Context<any>;
  children: any;
  config: StoreConfig<TStore>;
  storeKey: K;
}) => {
  const [store, setStore] = useState<TStore[K]>(
    config?.initialValues[storeKey]
  ); //null or some object or string or whatever
  const baseKey = config?.baseKey || "useStore";

  // On mount, get the current value from storage
  useEffect(() => {
    const fullKey = getKey(storeKey, baseKey);
    getItem(fullKey).then((value) => {
      console.log("Initialized storevalue for ", storeKey);
      setStore(value);
    });
  }, []);

  const initialValues = config?.initialValues;

  const useStoreHook: UseStoreType<TStore> = <K2 extends Keys<TStore>>(
    key: K2
  ) => {
    const fullKey = getKey(key, baseKey);

    const defaultValue = initialValues[key];
    // @ts-ignore
    const value: TStore[K2] =
      store !== undefined
        ? store
        : defaultValue !== undefined
        ? defaultValue
        : null;

    const dispatch: (value: TStore[K2]) => Promise<void> = async (value) => {
      //should do a deep equal here, and only set the store and item if the value actually has changed
      //@ts-ignore
      setStore(value);
      await setItem(fullKey, value);
    };

    return [value, dispatch];
  };

  return (
    <DynamicContext.Provider value={useStoreHook}>
      {children}
    </DynamicContext.Provider>
  );
};

let contexts: { [key: string]: React.Context<any> } = {};

export const createStoreProvider =
  <TStore extends object>(config: StoreConfig<TStore>) =>
  ({ children }: { children: any }) => {
    const keys = Object.keys(config.initialValues) as Keys<TStore>[];

    contexts = keys.reduce((acc, key) => {
      const Context = React.createContext(null);
      return {
        ...acc,
        [contextKey(key)]: Context,
      };
    }, {});

    return keys.reduce((acc, key) => {
      const context = contexts[contextKey(key)];
      return (
        <StoreContextProvider
          config={config}
          storeKey={key}
          DynamicContext={context}
        >
          {acc}
        </StoreContextProvider>
      );
    }, children);
  };

const getContext = (key: string) => contexts[contextKey(key)];

export const createUseStore = <TState extends object>(
  initialValues: TState
) => {
  const useStore = <K extends Keys<TState>>(key: K) => {
    if (!Object.keys(initialValues).includes(key)) {
      throw new Error(`Using undefined key in useStore: ${key}`);
    }
    const context = getContext(key);
    if (!context) {
      throw new Error(
        `Failed loading the context with key: ${key}. Did you wrap your component/app with a StoreContextProvider?`
      );
    }
    const useStoreHook = React.useContext<UseStoreType<TState>>(context);
    return useStoreHook(key);
  };
  return useStore;
};