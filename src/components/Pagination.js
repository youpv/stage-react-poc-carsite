const Pagination = ({
  carsPerPage,
  totalCars,
  currentPage,
  currentPageUrl,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxButtons = 5;
  const firstPage = Math.max(1, currentPage - 2);
  const lastPage = Math.min(firstPage + maxButtons - 1, pageNumbers.length);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            onClick={() => paginate(1)}
            href="#"
            className="page-link text-danger"
          >
            &laquo;
          </button>
        </li>
        {pageNumbers
          .filter((number) => number >= firstPage && number <= lastPage)
          .map((number) => (
            <li
              key={number}
              className={`page-item${
                number === parseInt(currentPageUrl) ? " active" : ""
              }`}
            >
              <button
                onClick={() => paginate(number)}
                href="#"
                className="page-link text-danger"
              >
                {number}
              </button>
            </li>
          ))}
        <li className="page-item">
          <button
            onClick={() => paginate(pageNumbers.length)}
            href="#"
            className="page-link text-danger"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
