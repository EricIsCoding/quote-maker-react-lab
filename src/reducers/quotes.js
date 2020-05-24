export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      state = [...state, action.quote]
      return state;
    case "REMOVE_QUOTE":
      const index = state.findIndex(ele => ele.id === action.quoteId)
      state = [...state.slice(0,index), ...state.slice(index+1,state.length)]
      return state;
    case "UPVOTE_QUOTE":
      const upvoteIndex = state.findIndex(ele => ele.id === action.quoteId)
      return state.map((item, index) => {
        if(index === upvoteIndex) {
          item.votes += 1
          return item
        } else {
          return item
        }
      })
    case "DOWNVOTE_QUOTE":
      const downvoteIndex = state.findIndex(ele => ele.id === action.quoteId)
      debugger;
      if(state[downvoteIndex].votes > 0) {
        return state.map((item, index) => {
          if(index === downvoteIndex) {
            item.votes -=1
            return item
          } else {
            return item
          }
        })
      } else {
        return state;
      }
    default:
      return state;
  }
}
