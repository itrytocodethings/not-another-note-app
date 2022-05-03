import { createContext, useState, useContext } from "react";
export const Context = createContext();

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: "demo",
      testArr: [],
      notes: [
        {
          id: 1,
          title: "🤔 Title me",
          body: `Hello 🌎`,
          plainText: `Hello 🌎`
        },
      ],
      showNav: false,
    },
    actions: {
      example: () => {
        console.log("hello");
      },
      addToArr: () => {
        let store = getStore();
        console.log(store);
      },
      setShowNav: () => {
        let store = getStore();
        setStore({showNav: store.showNav ? false : true});
      },
      editTitle: (noteIndex, updatedTitle) => {
        let notes = getStore().notes;
        notes[noteIndex].title = updatedTitle;
        setStore({notes: notes})
      },
      saveNote: (noteIndex, text, plainText=null) => {
        let notes = getStore().notes;
        notes[noteIndex].body = text;
        if (plainText) notes[noteIndex].plainText = plainText; //plain text of note body without html tags.
        setStore({notes: notes});
      },
      newNote: (title=`🤔 Title me`, body=`Hello 🌎`) => {
        let store = getStore();
        let notes = store.notes
        notes.push({
          id: notes.length + 1,
          title: title,
          body: body,
          plainText: body
        })
        setStore({notes: notes});
      }
    },
  };
};

export const ContextWrapper = (props) => {
  const [state, setState] = useState(
    getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) => {
        setState({
          store: Object.assign(state.store, updatedStore),
          actions: { ...state.actions },
        });
      },
    })
  );

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
