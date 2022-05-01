import { createContext, useState, useContext } from "react";
export const Context = createContext();

const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      demo: 'demo',
      testArr: []
    },
    actions: {
      example: () => {
        console.log('hello')
      },
      addToArr: () => {
        let store = getStore();
        console.log(store);
      }
    }
  }
}

export const ContextWrapper = (props) => {
  const [state, setState] = useState(getState({
    getStore: () => state.store,
    getActions: () => state.actions,
    setStore: updatedStore => {
      setState({
        store: Object.assign(state.store, updatedStore),
        actions: {...state.actions}
      })
    }
  }))
  
  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  )
}

