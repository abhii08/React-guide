import React, {useState} from 'react'

const Pagination = () => {
    const items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
    "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
  ];

  const [page, setPage] = useState(1);  // Current page
  const itemsPerPage = 3;               // Show 3 items per page

  // Find start and end indexes
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items to show only what belongs to this page
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Pagination Example</h2>

      {/* Display items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div>
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination