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
          title: "Hello World",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
        },
        {
          id: 2,
          title: "Hello World",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
        },
        {
          id: 3,
          title: "Hello World",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
        },
        {
          id: 4,
          title: "Hello World",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
        },
        {
          id: 5,
          title: "Hello World",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
        },
        {
          id: 6,
          title: "Hello World",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
        },
      ],
      showNav: false,
      users: [
        {
          id: 1,
          username: 'Wayne',
          notes: [
            {
              id: 1,
              title: "Hello World",
              body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!
    
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
            },
            {
              id: 2,
              title: "Hello World",
              body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!
    
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
            },
            {
              id: 3,
              title: "Hello World",
              body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!
    
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
            },
            {
              id: 4,
              title: "Hello World",
              body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!
    
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
            },
            {
              id: 5,
              title: "Hello World",
              body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!
    
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
            },
            {
              id: 6,
              title: "Hello World",
              body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusantium voluptatem voluptates assumenda repudiandae laboriosam dolor, quam rerum doloribus. A, consequuntur. Quos facilis architecto, pariatur facere sunt ab ullam aliquam distinctio tempora autem a sequi rerum, officiis itaque. Est quia impedit minima deleniti ipsa fuga incidunt quisquam rem soluta quas.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea inventore officiis cupiditate totam quam a eveniet exercitationem molestias nam. Nemo, quod! Reiciendis cumque dolores, accusamus doloribus voluptas temporibus hic iure dolorum necessitatibus eveniet libero soluta repellendus fuga modi obcaecati repellat sit et molestiae dicta at fugiat adipisci porro eaque. Labore dolorum exercitationem necessitatibus esse, quibusdam obcaecati officia deserunt veritatis!
    
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ut doloremque quasi, nam perspiciatis sapiente delectus aut sit veniam molestiae impedit quidem, consequatur labore, eos nostrum nobis atque cum? Eligendi, corrupti. Repellendus odit aliquam illum dolorem temporibus fugit, nihil necessitatibus laborum impedit velit rerum est sed quasi labore distinctio maxime.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo officia, consequatur nam ullam eveniet aliquam dolorum sed tenetur ducimus dolorem rem magnam autem asperiores est molestiae sunt! Consectetur, non. Iste rem ad amet magni ratione totam placeat impedit quos perferendis ducimus, nostrum asperiores expedita distinctio? Doloremque, amet saepe. Recusandae harum aliquam earum repellat cupiditate placeat eveniet eum sed itaque quam ipsa dignissimos eaque molestiae corrupti, similique perspiciatis maxime deleniti omnis ad dolorem dolore. Ullam architecto natus nemo provident, blanditiis, in recusandae iure laudantium expedita dolor repellendus! Aliquid, incidunt eaque.`,
            },
          ],
        }
      ],
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
      newNote: (userID, title, body=`<b>Hello</b> World`) => {
        let notes = getStore().users.filter((user) => user.id == userID)[0].notes;
        notes.push({
          id: notes.length + 1,
          title: title,
          body: body
        })
        console.log(notes);
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
