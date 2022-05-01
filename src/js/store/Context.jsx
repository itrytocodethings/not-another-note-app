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

  console.log(state)
  // const [store, setStore] = useState({
  //   default: 'hello world',
  //   maybeanArray: [1, 2,3, 4, 5],
  //   users: [{name: 'Wayne'}, {name: 'John'}]
  // });
  // const [actions, setActions] = useState({
  //   getAction: () => console.log('hello world'),
  //   addUser: (userName) => {
  //   }
  // });
  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  )
}

