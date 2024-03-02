import { FaAngleRight, FaAngleDoubleRight, FaAngleLeft, FaAngleDoubleLeft } from 'react-icons/fa';

function Pagination({ totalPage, currentPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center mt-4 space-x-4">
      <button
        className={`w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 text-base font-medium cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-300 ${
          currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => paginate(1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft className="w-4 h-4" />
      </button>

      <button
        className={`w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 text-base font-medium cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-300 ${
          currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft className="w-4 h-4" />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 text-base font-medium cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-300 ${
            currentPage === number ? 'bg-gray-300' : 'hover:bg-gray-200'
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      <button
        className={`w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 text-base font-medium cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-300 ${
          currentPage === totalPage ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <FaAngleRight className="w-4 h-4" />
      </button>

      <button
        className={`w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 text-base font-medium cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-300 ${
          currentPage === totalPage ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => paginate(totalPage)}
        disabled={currentPage === totalPage}
      >
        <FaAngleDoubleRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

export default Pagination;
