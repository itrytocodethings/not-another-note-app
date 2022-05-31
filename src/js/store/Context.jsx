import { createContext, useState, useContext, useEffect } from "react";
export const Context = createContext();

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: null,
      isLoggedIn: false,
      showNav: false,
    },
    actions: {
      setShowNav: () => {
        let store = getStore();
        setStore({ showNav: store.showNav ? false : true });
      },
      login: async (formData) => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        })
          .then((resp) => {
            if (resp.ok) return resp.json();
            else throw new Error();
          })
          .then((resp) => {
            localStorage.setItem("token", JSON.stringify(resp["token"]));
            localStorage.setItem("userID", JSON.stringify(resp["user_id"]));
            console.log(resp["user"]);
            setStore({ user: resp["user"] });
          });
      },
      logout: () => {
        localStorage.clear();
      },
      register: async (formData) => {
        let response = null;
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(formData)
        }).then((resp) => {
          if (!resp.ok) {
            //if response not okay, set response var with response from server/api.
            //and throw a new error with statusText. 
            response = resp.json();
            throw Error(resp.statusText)
          }
          else return resp.json()
        })
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error))

        //will return response, if null registration was successful, not null, issue.
        return response;
      },
      getUser: async (userID) => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/u`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        })
          .then((resp) => (resp.ok ? resp.json() : console.log(resp)))
          .then((resp) => {
            setStore({user: resp})
          });
      },
      editNote: (noteID, editedFields) => {
        // accepets a noteID and an object of edited fields
        // ex {note_title: 'new note title'}
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note/${noteID}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          },
          body: JSON.stringify({...editedFields})
        })
        .then((resp) => {
          if (resp.ok) return resp.json()
          else throw Error('help')
        })
        .then((resp) => {
          let store = getStore()
          // setStore({user:{notes: resp}})
          setStore({user:{...store.user, notes: resp}})
        })
      },
      deleteNote: (noteIndex) => {
        let notes = getStore().notes.filter(
          (note, index) => index != noteIndex
        );
        setStore({ notes: notes });
      },
      newNote: (title = `🤔 Title me`, body = `Hello 🌎`, plainText='Hello 🌎') => {
        let store = getStore();
        let notes = store.user.notes;
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          },
          body: JSON.stringify({
            note_title: title,
            note_body: body,
            plain_text: plainText
          })
        })
        .then((resp) => {
          if (resp.ok) return resp.json()
          else throw Error("help")
        })
        .then((resp) => {
          setStore({user:{notes: resp}});
        })
      },
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
  useEffect(() => {
    if (localStorage.getItem("userID")) {
      let id = localStorage.getItem("userID");
      state.actions.getUser(parseInt(id));
    }
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
