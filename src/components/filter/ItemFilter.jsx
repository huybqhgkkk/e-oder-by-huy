import { Collapse } from "antd";
import React, { useState, useMemo } from "react";
import { LuChevronDown } from "react-icons/lu";

const FilterComponent = ({ handleFilterChange, categories, branches }) => {
  const [filters, setFilters] = useState({
    name: "",
    categories: [],
    branchId: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });

  const [branchSearch, setBranchSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visibleBranches, setVisibleBranches] = useState(10);
  const [visibleCategories, setVisibleCategories] = useState(10);

  // Filtered branch and category lists based on search
  const filteredBranches = useMemo(
    () =>
      branches.filter((branch) =>
        branch.name.toLowerCase().includes(branchSearch.toLowerCase())
      ),
    [branches, branchSearch]
  );

  const filteredCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.name.toLowerCase().includes(categorySearch.toLowerCase())
      ),
    [categories, categorySearch]
  );

  // Handle branch selection (single selection)
  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
    setFilters({
      ...filters,
      branchId: branch.id,
    });
  };

  // Handle category selection (multiple selections)
  const handleSelectCategory = (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedCategories);
    setFilters({
      ...filters,
      categories: updatedCategories,
    });
  };

  // Handle removing a selected category
  const handleRemoveCategory = (categoryId) => {
    setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
  };

  // Handle input change
  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    handleFilterChange(filters);
  };

  const handleClear = () => {
    setFilters({
      name: "",
      categories: [],
      branchId: "",
      status: "",
      minPrice: "",
      maxPrice: "",
    });
    setSelectedBranch(null);
    setSelectedCategories([]);
    setBranchSearch("");
    setCategorySearch("");
    handleFilterChange({});
  };

  // Function to handle "Load More" for branches
  const handleLoadMoreBranches = () => {
    setVisibleBranches((prev) => prev + 10);
  };

  // Function to handle "Load More" for categories
  const handleLoadMoreCategories = () => {
    setVisibleCategories((prev) => prev + 10);
  };

  const collapseItems = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <span>Filter</span>
          <LuChevronDown size={16} className="ms-2" />
        </div>
      ),
      children: (
        <div className="p-5">
          {/* Branch Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Branch</label>
            {!selectedBranch ? (
              <>
                <input
                  type="text"
                  value={branchSearch}
                  onChange={(e) => setBranchSearch(e.target.value)}
                  placeholder="Branch..."
                  className="w-full border rounded-lg px-3 py-2 mb-2"
                />
                <div className="max-h-40 overflow-y-auto border rounded-lg p-2">
                  {filteredBranches.slice(0, visibleBranches).map((branch) => (
                    <div
                      key={branch.id}
                      className={`cursor-pointer p-2 ${
                        selectedBranch?.id === branch.id
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => handleSelectBranch(branch)}
                    >
                      {branch.name}
                    </div>
                  ))}
                  {visibleBranches < filteredBranches.length && (
                    <button
                      className="mt-2 text-blue-600 w-full"
                      onClick={handleLoadMoreBranches}
                    >
                      Load More
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-gray-700 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm">
                  {selectedBranch.name}
                </span>
                <button
                  className="text-blue-600"
                  onClick={() => setSelectedBranch(null)}
                >
                  Thay đổi
                </button>
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              placeholder="Category..."
              className="w-full border rounded-lg px-3 py-2 mb-2"
            />
            <div className="max-h-40 overflow-y-auto border rounded-lg p-2">
              {filteredCategories
                .slice(0, visibleCategories)
                .map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleSelectCategory(category.id)}
                      className="form-checkbox h-5 w-5 text-primary"
                    />
                    <span>{category.name}</span>
                  </div>
                ))}
              {visibleCategories < filteredCategories.length && (
                <button
                  className="mt-2 text-blue-600 w-full"
                  onClick={handleLoadMoreCategories}
                >
                  Load More
                </button>
              )}
            </div>
          </div>

          {/* Display Selected Categories */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Selected Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((categoryId) => {
                const category = categories.find(
                  (category) => category.id === categoryId
                );
                return (
                  <button
                    key={categoryId}
                    onClick={() => handleRemoveCategory(categoryId)}
                    className="px-3 py-1 bg-primary text-white rounded-full"
                  >
                    {category?.name} &times;
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-1 gap-4">
            {/* Name */}
            <div className="lg:col-span-3 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={filters?.name || ""}
                onChange={handleInputChange}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>

            {/* Status Select */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={filters.status}
                onChange={handleInputChange}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              >
                <option value="">Select</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Min price
              </label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleInputChange}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Max price
              </label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleInputChange}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>

          {/* Search and Clear Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Clear
            </button>
            <button
              onClick={handleSearch}
              className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Search
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Collapse
      expandIconPosition="end"
      items={collapseItems}
      className="border rounded-lg"
    />
  );
};

export default FilterComponent;
