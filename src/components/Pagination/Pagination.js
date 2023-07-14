import ReactPaginate from "react-paginate";

export const Pagination = ({
  totalPage,
  currentPage,
  setCurrentPage,
  fetchData,
}) => {
  const handlePageChange = selectedPage => {
    const pageNumber = selectedPage.selected + 1;
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
    fetchData(pageNumber);
  };

  return (
    <ReactPaginate
      className="pagination justify-content-center my-5 gap-3"
      pageCount={totalPage}
      previousLabel="Oldingi"
      nextLabel="Keyingi"
      previousLinkClassName={
        currentPage === 1 ? "btn btn-primary disabled" : "btn btn-primary"
      }
      nextLinkClassName={
        currentPage === totalPage
          ? "btn btn-primary disabled"
          : "btn btn-primary"
      }
      pageClassName="page-item"
      onPageChange={handlePageChange}
      pageLinkClassName="page-link"
      activeClassName="active"
    />
  );
};
