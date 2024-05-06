export type ISubscribe<T> = {
    getState: () => T;
    setState: (value: Partial<T>) => void;
    subscribe: (callback: () => void) => () => void;
    };

export const subscription = <T>(initialValue: T): ISubscribe<T> => {
    const listeners = new Set<() => void>();
    let value = initialValue;

    const getState = () => value;

    const setState = (newValue: Partial<T>) => {
        value = { ...value, ...newValue };
        listeners.forEach((listener) => listener());
    };

    const subscribe = (callback: () => void) => {
        listeners.add(callback);
    
        return () => listeners.delete(callback);
    };

    return {
        getState,
        setState,
        subscribe,
    };
};