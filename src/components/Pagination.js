import * as React from "react";
import uniquid from "uniqid";
import { connect } from "react-redux";
import { setPagination } from "../actions/paginationActions";
import { searchPaginateResults } from "../actions/searchActions";

class Pagination extends React.Component {
  setPage = (page) => {
    this.props.setPage(page);
    this.props.searchPaginateResults(this.props.input, page);
  };

  render() {
    const { page, count } = this.props;

    const pages = Math.ceil(count / 10);

    const pagination = [];
    for (let i = 1; i <= pages; i++) {
      pagination.push(
        <PaginateEl
          key={uniquid()}
          number={i}
          setPage={this.setPage}
          page={page}
        />
      );
    }

    return <ul className="pagination">{pagination}</ul>;
  }
}

const mapStateToProps = (state) => {
  const { searchReducer, paginationReducer } = state;
  return {
    input: searchReducer.input,
    count: searchReducer.count,
    page: paginationReducer.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(setPagination(page)),
  searchPaginateResults: (name, page) =>
    dispatch(searchPaginateResults(name, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

const PaginateEl = ({ number, setPage, page }) => (
  <li
    key={uniquid()}
    onClick={() => {
      setPage(number);
    }}
    className={page === number ? "active" : "no-active"}
  >
    {number}
  </li>
);
