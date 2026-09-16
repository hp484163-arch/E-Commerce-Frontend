import { useState, useEffect } from "react";

export const DrinkDashboard = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form State
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // 1. Fetch drinks inside useEffect safely
  useEffect(() => {
    let isMounted = true;

    const loadDrinks = async () => {
      try {
        const response = await fetch("http://localhost:3001/drinks");
        if (!response.ok) throw new Error("Failed to fetch drinks");
        const data = await response.json();
        
        if (isMounted) {
          setDrinks(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadDrinks();

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Image to Base64 conversion
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 3. Submit new drink
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const newDrink = {
      name,
      price: parseFloat(price),
      category,
      image,
    };

    try {
      const response = await fetch("http://localhost:3001/drinks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDrink),
      });

      if (response.ok) {
        const addedDrink = await response.json();
        setDrinks((prev) => [...prev, addedDrink]);

        // Reset Form
        setName("");
        setPrice("");
        setCategory("");
        setImage(null);
        e.target.reset();
      } else {
        alert("Failed to save drink.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Could not connect to json-server.");
    } finally {
      setSubmitting(false);
    }
  };

  // 4. Delete drink
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this drink?")) return;

    try {
      const response = await fetch(`http://localhost:3001/drinks/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDrinks((prev) => prev.filter((drink) => drink.id !== id));
      } else {
        alert("Failed to delete drink.");
      }
    } catch (err) {
      console.error("Error deleting drink:", err);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Drink Menu Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your menu items in real-time</p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-4 lg:sticky lg:top-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800">Add Drink</h2>
              <p className="text-xs text-gray-500">Fill out details to update data.json</p>
            </div>

            {/* Drink Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-700">Drink Name</label>
              <input
                type="text"
                placeholder="Enter drink name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-700">Price ($)</label>
              <input
                type="number"
                step="0.01"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-700">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="">Select category</option>
                <option value="Coffee">Coffee</option>
                <option value="Tea">Tea</option>
                <option value="Smoothie">Smoothie</option>
                <option value="Juice">Juice</option>
                <option value="Milk">Milk</option>
              </select>
            </div>

            {/* Image */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-700">Drink Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="block w-full text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer"
              />
            </div>

            {/* Image Preview */}
            {image && (
              <div className="mt-2">
                <img
                  src={image}
                  alt="Preview"
                  className="h-32 w-full object-cover rounded-lg border border-gray-200"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm text-sm transition-colors disabled:opacity-50 mt-2"
            >
              {submitting ? "Saving..." : "+ Add Drink"}
            </button>
          </form>
        </div>

        {/* Right Column: Drink List Grid */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Current Items</h2>
            <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full">
              {drinks.length} items
            </span>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-400 animate-pulse">
              Loading menu items...
            </div>
          ) : error ? (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 text-sm">
              {error} — Ensure <code>json-server</code> is running on port 5000.
            </div>
          ) : drinks.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-sm">No drinks added yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {drinks.map((drink) => (
                <div
                  key={drink.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 w-full bg-gray-100">
                      {drink.image ? (
                        <img
                          src={drink.image}
                          alt={drink.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-xs text-gray-400">
                          No Image
                        </div>
                      )}
                      <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-md shadow-sm">
                        {drink.category}
                      </span>
                    </div>

                    <div className="p-4 flex justify-between items-start">
                      <h3 className="font-bold text-gray-800 text-base truncate">
                        {drink.name}
                      </h3>
                      <span className="font-extrabold text-amber-600 text-base ml-2">
                        ${typeof drink.price === "number" ? drink.price.toFixed(2) : drink.price}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 pb-3 pt-2 border-t border-gray-50 flex justify-end">
                    <button
                      onClick={() => handleDelete(drink.id)}
                      className="text-xs font-medium text-red-600 hover:text-red-800 hover:bg-red-50 px-2 py-1 rounded transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};