import React, { useState, useEffect } from 'react';

// API endpoint for categories data
const API_URL = 'https://api.example.com/menu'; // Replace with your actual API endpoint

const Menu = () => {
  const [sortedCategories, setSortedCategories] = useState([]);  // State for sorted categories
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });  // Sorting state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Data not found');
        }
        const data = await response.json();
        setSortedCategories(data);
      } catch (err) {
        setError(err.message);
        // If API data not found, show static categories
        setSortedCategories([
          { name: 'Classic Burger', description: 'Juicy beef patty with lettuce, tomato, and cheese.', price: 12.99 },
          { name: 'Pepperoni Pizza', description: 'A cheesy delight topped with pepperoni slices.', price: 9.99 },
          { name: 'Caesar Salad', description: 'Crispy romaine with Caesar dressing and croutons.', price: 7.99 },
          { name: 'Grilled Chicken', description: 'Tender grilled chicken with a side of vegetables.', price: 14.99 },
          { name: 'Spaghetti Bolognese', description: 'Pasta with rich Bolognese sauce and parmesan.', price: 13.99 },
          { name: 'Sushi Platter', description: 'Fresh sushi rolls with a variety of fillings.', price: 19.99 },
          { name: 'Chocolate Cake', description: 'Decadent chocolate cake with a rich frosting.', price: 6.99 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Sort categories function
  const sortCategories = (key) => {
    let sortedData = [...sortedCategories];
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      sortedData.sort((a, b) => (a[key] < b[key] ? -1 : 1)); // Corrected sorting logic
      setSortConfig({ key, direction: 'descending' });
    } else {
      sortedData.sort((a, b) => (a[key] > b[key] ? -1 : 1)); // Corrected sorting logic
      setSortConfig({ key, direction: 'ascending' });
    }
    setSortedCategories(sortedData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    // Show static categories in case of error
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-950/60 overflow-y-auto py-20'>
        <img 
          src="https://cdn.pixabay.com/photo/2023/06/20/10/05/tacos-8076612_1280.jpg" 
          alt="Food Background" 
          className='fixed top-0 left-0 w-full h-full object-cover z-[-5]' 
        />
        <div className='relative min-w-[60vw] z-10 py-10 px-5 bg-white rounded-2xl shadow-lg'>
          <h1 className='text-center text-5xl font-bold mb-5'>Restaurant Menu</h1>
          <h2 className='text-center text-xl font-medium mb-5'>Total Dishes Available: 7</h2>

          <table className='table-auto w-full text-left border-collapse'>
            <thead>
              <tr className='bg-black/20'>
                <th className='px-4 py-2 border cursor-pointer' onClick={() => sortCategories('name')}>
                  Dish Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                </th>
                <th className='px-4 py-2 border'>Description</th>
                <th className='px-4 py-2 border cursor-pointer' onClick={() => sortCategories('price')}>
                  Price {sortConfig.key === 'price' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Classic Burger', description: 'Juicy beef patty with lettuce, tomato, and cheese.', price: 12.99 },
                { name: 'Pepperoni Pizza', description: 'A cheesy delight topped with pepperoni slices.', price: 9.99 },
                { name: 'Caesar Salad', description: 'Crispy romaine with Caesar dressing and croutons.', price: 7.99 },
                { name: 'Grilled Chicken', description: 'Tender grilled chicken with a side of vegetables.', price: 14.99 },
                { name: 'Spaghetti Bolognese', description: 'Pasta with rich Bolognese sauce and parmesan.', price: 13.99 },
                { name: 'Sushi Platter', description: 'Fresh sushi rolls with a variety of fillings.', price: 19.99 },
                { name: 'Chocolate Cake', description: 'Decadent chocolate cake with a rich frosting.', price: 6.99 },
              ].map(({ name, description, price }, index) => (
                <tr key={index} className='hover:bg-gray-100'>
                  <td className='px-4 py-2 border'>{name}</td>
                  <td className='px-4 py-2 border'>{description}</td>
                  <td className='px-4 py-2 border'>${price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-950/60 overflow-y-auto py-20'>
      <img 
        src="https://cdn.pixabay.com/photo/2023/06/20/10/05/tacos-8076612_1280.jpg" 
        alt="Food Background" 
        className='fixed top-0 left-0 w-full h-full object-cover z-[-5]' 
      />
      <div className='relative min-w-[60vw] z-10 py-10 px-5 bg-white rounded-2xl shadow-lg'>
        <h1 className='text-center text-5xl font-bold mb-5'>Restaurant Menu</h1>
        <h2 className='text-center text-xl font-medium mb-5'>Total Dishes Available: {sortedCategories.length}</h2>

        <table className='table-auto w-full text-left border-collapse'>
          <thead>
            <tr className='bg-black/20'>
              <th className='px-4 py-2 border cursor-pointer' onClick={() => sortCategories('name')}>
                Dish Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th className='px-4 py-2 border'>Description</th>
              <th className='px-4 py-2 border cursor-pointer' onClick={() => sortCategories('price')}>
                Price {sortConfig.key === 'price' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCategories.map(({ name, description, price }, index) => (
              <tr key={index} className='hover:bg-gray-100'>
                <td className='px-4 py-2 border'>{name}</td>
                <td className='px-4 py-2 border'>{description}</td>
                <td className='px-4 py-2 border'>${price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Menu;
