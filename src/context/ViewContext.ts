import React from 'react';

type Context = {
    pushBreadcrumb: Function,
    popBreadcrumb: Function,
    clearBreadcrumb: Function,
    changeView: Function,
}

const defaultValue: Context = {
    pushBreadcrumb: () => {},
    popBreadcrumb: () => {},
    clearBreadcrumb: () => {},
    changeView: () => {},
}

export default React.createContext(defaultValue)