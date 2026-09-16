import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const categories = [
    "Electronics",
    "Accessories",
    "Wearables",
    "Furniture",
    "Clothing",
    "Other",
  ];

  // Convert uploaded local file to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit (localStorage max is ~5MB total)
    if (file.size > 1.5 * 1024 * 1024) {
      setError("Please choose an image under 1.5 MB to avoid storage limits.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price) {
      setError("Please fill in all required fields.");
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setError("Please enter a valid price greater than 0.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: parsedPrice,
      category,
      image: image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    };

    let currentProducts = [];
    try {
      const savedProducts = localStorage.getItem("store_products");
      if (savedProducts) {
        currentProducts = JSON.parse(savedProducts);
      }
    } catch (err) {
      console.error("Error reading localStorage:", err);
    }

    const updatedProducts = [newProduct, ...currentProducts];
    
    try {
      localStorage.setItem("store_products", JSON.stringify(updatedProducts));
      navigate("/product");
    } catch (err) {
      console.error(err);
      setError("Storage is full. Please remove some existing products or use smaller images.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Add New Product
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Fill in the details and choose an image from your device.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="e.g., Wireless Mouse"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                required
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  setError("");
                }}
                placeholder="49.99"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Local File Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload Image from Laptop
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer"
            />
          </div>

          {/* Live Preview */}
          {image && (
            <div className="mt-2">
              <span className="block text-xs font-medium text-slate-500 mb-1">
                Image Preview:
              </span>
              <div className="h-36 w-full rounded-lg bg-slate-100 overflow-hidden border border-slate-200">
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/product")}
              className="w-1/3 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-2/3 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition-colors shadow-sm cursor-pointer active:scale-[0.98]"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};