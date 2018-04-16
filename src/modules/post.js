import { postService } from '../Services'

export const GET_POSTS_REQUESTED = 'post/GET_POSTS_REQUESTED';
export const GET_POSTS = 'post/GET_POSTS';

const initialState = {
  posts: [],
  page: 1,
  per_page: 6,
  isLoading: false,
  hasMore: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };

    case GET_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.payload.data),
        page: state.page + 1,
        hasMore: action.payload.hasMore,
        isLoading: !state.isLoading
      };

    default:
      return state;
  }
};


export const getPosts = (page, page_size) => {
  return dispatch => {
    dispatch({
      type: GET_POSTS_REQUESTED
    });
    postService.getPosts({
      per_page: page_size || initialState.per_page,
      page: page || initialState.page
    }, res => {
      let _hasMore = true
      if (res.length < initialState.per_page) {
        _hasMore = false
      }
      dispatch({
        type: GET_POSTS,
        payload: {
          data: res,
          hasMore: _hasMore
        }
      });
    })

    
  };
};











