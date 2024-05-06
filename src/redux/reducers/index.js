const initialState = {
  jobs: {
    content: [],
  },
  query: {
    content: '',
  },
  favouriteJob: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE_JOB':
      return {
        ...state,
        favouriteJob: {
          ...state.favouriteJob,
          content: [...state.favouriteJob.content, action.payload],
        },
      }

    default:
      return state
  }
}

export default mainReducer
