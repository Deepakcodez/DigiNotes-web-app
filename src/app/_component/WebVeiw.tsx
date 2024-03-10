import { useState } from "react";

const WebView = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Encode the search query to ensure it's safe for URLs
    const encodedQuery = encodeURIComponent(searchQuery);
    // Set the source URL for the iframe to the Google search results page
    // Replace 'YOUR_API_KEY' with your actual Google Custom Search API key
    const googleSearchUrl = `https://www.google.com/search?q=${encodedQuery}&key=YOUR_API_KEY`;
    // Set the iframe source to the Google search URL
    document.getElementById("searchResults").src = googleSearchUrl;
  };

  return (
    <div className="w-full bg-slate-900 p-4">
      <h1 className="text-white text-2xl font-bold mb-4">Web View</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search on Google"
          className="flex-grow border rounded px-4 py-2 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* Display the search results in an iframe */}
      <iframe
        id="searchResults"
        title="Search Results"
        className="mt-4 w-full h-screen border-none"
      ></iframe>
    </div>
  );
};

export default WebView;
