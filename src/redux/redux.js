import { createStore, defaults, createHook } from "react-sweet-state"


const initial_state = {
  experience: 0,
  hobbies: 0,
  next_page: false,
  allow_transitions: false,
  dimensions: [0, 0],
  user_is_changing_page: false
}

const actions = {
  setExperienceTab: (tab) => ({ setState })=> {
    setState({ experience: tab })
  },
  setHobbiesTab: (tab) => ({ setState })=> {
    setState({ hobbies: tab })
  },
  setDimensions: (array) => ({ setState })=> {
    setState({ dimensions: array })
  },
  changePage: (boolean) => ({ setState })=> {
    setState({ user_is_changing_page: boolean })
  },
  setTransitions: (boolean) => ({ setState })=> {
    setState({ allow_transitions: boolean })
  },
  setNextPage: (value) => ({ setState })=> {
    setState({ next_page: value })
  },
}

const Store = createStore({initialState: initial_state, actions});

export const useStore = createHook(Store)

