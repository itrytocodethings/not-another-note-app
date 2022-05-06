import { createContext, useState, useContext } from "react";
export const Context = createContext();

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      notes: [
        {
          id: 1,
          title: "🤔 Title me",
          body: `Hello 🌎 `,
          plainText: `Hello 🌎`
        },
      ],
      showNav: false,
    },
    actions: {
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
      deleteNote: (noteIndex) => {
        let notes = getStore().notes.filter((note, index) => index != noteIndex);
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
