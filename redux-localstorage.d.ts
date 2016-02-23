declare module 'redux-localstorage' {
    interface Config {
        key: string;
        slicer: (paths?: string|string[]) => (state: any) => any;
        serialize: (subset: any) => string;
        deserialize: (serializedData: string) => any;
        merge: (initialState: any, persistedState: any) => any;
    }

    function persistState(paths?: string|string[], config?: Config): any;

    namespace persistState {}

    export = persistState
}
