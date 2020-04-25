export const SET_PAGINATION = "SET_PAGINATION";

export const setPagination = (page) => ({
  type: SET_PAGINATION,
  payload: { page },
});

export function setPage(page) {
  return (dispatch) => {
    dispatch(setPagination(page));
    return page;
  };
}
