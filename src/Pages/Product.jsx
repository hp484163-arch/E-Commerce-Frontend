import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_PRODUCTS = [

  // --- Electronics ---
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    name: "4K Ultra HD Action Camera",
    category: "Electronics",
    price: 249.00,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 79.95,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },

  // --- Accessories ---
  {
    id: 4,
    name: "Minimalist Mechanical Keyboard",
    category: "Accessories",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
  },
  {
    id: 5,
    name: "Ergonomic Wireless Mouse",
    category: "Accessories",
    price: 49.50,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
  },
  {
    id: 6,
    name: "Full-Grain Leather Wallet",
    category: "Accessories",
    price: 39.00,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  },

  // --- Wearables ---
  {
    id: 7,
    name: "Smart Fitness Watch v2",
    category: "Wearables",
    price: 149.50,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 8,
    name: "Classic Chronograph Watch",
    category: "Wearables",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
  },
  {
    id: 9,
    name: "True Wireless Earbuds Pro",
    category: "Wearables",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
  },

  // --- Furniture ---
  {
    id: 10,
    name: "Mid-Century Wooden Desk Chair",
    category: "Furniture",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1580481077190-736959684777?w=500&q=80",
  },
  {
    id: 11,
    name: "Minimalist Oak Side Table",
    category: "Furniture",
    price: 135.00,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80",
  },
  {
    id: 12,
    name: "Adjustable Modern Desk Lamp",
    category: "Furniture",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  },

  // --- Clothing ---
  {
    id: 13,
    name: "Classic Cotton Denim Jacket",
    category: "Clothing",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80",
  },

  {
    id: 14,
    name: "Heavyweight Casual Hoodie",
    category: "Clothing",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80",
  },
  {
    id: 15,
    name: "Urban Everyday Street Sneakers",
    category: "Clothing",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
  },
  
  // --- Other ---
  {
    id: 16,
    name: "Vacuum Insulated Water Bottle",
    category: "Other",
    price: 28.50,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
  },
  {
    id: 17,
    name: "Canvas Travel Duffel Bag",
    category: "Other",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
  },
  {
    id: 18,
    name: "Hardcover Dotted Journal",
    category: "Other",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
  },
];

const CATEGORIES = [
  "All",
  "Electronics",
  "Accessories",
  "Wearables",
  "Furniture",
  "Clothing",
  "Other",
];

export const Product = () => {
  const navigate = useNavigate();

  // --- PRODUCTS & CART STATE ---
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("store_products");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing products:", e);
      }
    }
    return DEFAULT_PRODUCTS;
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("store_cart_items");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        console.error("Error parsing cart:", e);
      }
    }
    return [];
  });

  // --- FILTER & MODAL STATES ---
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // --- PAYMENT FLOW STATE: 'idle' | 'pending' | 'loading' | 'success' ---
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [countdown, setCountdown] = useState(10);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("store_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("store_cart_items", JSON.stringify(cartItems));
  }, [cartItems]);

  // Clean 10-second payment countdown without ESLint errors
  useEffect(() => {
    if (paymentStatus !== "loading") return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setPaymentStatus("success");
          setCartItems([]); // Reset cart badge and item list to 0
          localStorage.removeItem("store_cart_items");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [paymentStatus]);

  // --- DERIVED FILTERED PRODUCTS ---
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Totals & Calculations
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + tax;

  // --- CART HANDLERS ---
  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => String(item.id) === String(product.id));
      if (existing) {
        return prevCart.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => String(item.id) !== String(id)));
  };

  // --- PRODUCT CRUD HANDLERS ---
  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((item) => String(item.id) !== String(id)));
      handleRemoveFromCart(id);
    }
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((item) =>
        String(item.id) === String(editingProduct.id)
          ? { ...editingProduct, price: parseFloat(editingProduct.price) || 0 }
          : item
      )
    );
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        String(item.id) === String(editingProduct.id)
          ? {
            ...item,
            name: editingProduct.name,
            price: parseFloat(editingProduct.price) || 0,
            image: editingProduct.image,
            category: editingProduct.category,
          }
          : item
      )
    );
    setEditingProduct(null);
  };

  const handleEditImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // --- CHECKOUT FLOW HANDLERS ---
  const handleStartCheckout = () => {
    setIsCartOpen(false);
    setPaymentStatus("pending");
  };

  const handleConfirmPayment = () => {
    setCountdown(10); // Reset timer here before starting
    setPaymentStatus("loading");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-200 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Products
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Explore catalog items filtered by category or search term.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="font-semibold text-slate-900 text-sm">Cart</span>
              <span className="bg-amber-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItemCount}
              </span>
            </button>
            <button
              onClick={() => navigate("/add-product")}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition shadow-sm active:scale-95 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Add Product</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products or categories..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Dropdown (Mobile) */}
            <div className="sm:hidden">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills (Desktop/Tablet) */}
          <div className="hidden sm:flex flex-wrap items-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-base">
              No products found matching &ldquo;{searchQuery || selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-sm text-amber-600 font-semibold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                {/* Product Action Buttons (Edit / Delete) */}
                <div className="absolute top-2 right-2 flex gap-1 z-10">
                  <button
                    onClick={() => setEditingProduct({ ...item })}
                    className="bg-white/90 hover:bg-amber-500 hover:text-white p-1.5 sm:p-2 rounded-full text-slate-600 shadow transition cursor-pointer"
                    title="Edit Product"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="m13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793 3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(item.id)}
                    className="bg-white/90 hover:bg-red-500 hover:text-white p-1.5 sm:p-2 rounded-full text-slate-600 shadow transition cursor-pointer"
                    title="Delete Product"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Product Image */}
                <div className="h-36 sm:h-44 md:h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80";
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-600">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 mt-0.5 sm:mt-1 line-clamp-2">
                      {item.name}
                    </h3>
                  </div>

                  {/* Pricing & Add to Cart Button */}
                  <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900">
                      ${Number(item.price).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- CART DRAWER OVERLAY --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">Shopping Cart</h2>
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                  {totalItemCount} {totalItemCount === 1 ? "item" : "items"}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition hover:bg-slate-100 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
                  <p className="text-sm font-medium">Your cart is currently empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-white"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-slate-400 hover:text-red-500 text-xs font-semibold ml-2 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-extrabold text-slate-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-2 py-0.5">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="text-slate-600 hover:text-slate-950 font-bold px-1 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-slate-800 w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="text-slate-600 hover:text-slate-950 font-bold px-1 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Payment</span>
                    <span className="text-base text-amber-600">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleStartCheckout}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition shadow active:scale-[0.98] cursor-pointer"
                >
                  Proceed to Checkout (${grandTotal.toFixed(2)})
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- PAYMENT MODAL FLOW --- */}
      {paymentStatus !== "idle" && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 overflow-hidden relative">

            {/* STEP 1: SUMMARY & QR CODE */}
            {paymentStatus === "pending" && (
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full flex justify-between items-center pb-2 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">Scan & Pay</h3>
                  <button
                    onClick={() => setPaymentStatus("idle")}
                    className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* QR Code container */}
                <div className="p-2 bg-slate-50 border border-slate-200 rounded-2xl shadow-inner">
                  <img
                    src={`/public/images/qrpayment.jpg`}
                    alt="Payment QR Code"
                    className="w-50 h-50 rounded-lg object-contain bg-white pt-1"
                  />
                </div>
                <p className="text-xs text-slate-400">Scan with any banking or wallet app</p>

                {/* Calculations Summary */}
                <div className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Total Items</span>
                    <span className="font-semibold text-slate-800">{totalItemCount}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-semibold text-slate-800">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-900 text-sm font-extrabold pt-2 border-t border-slate-200">
                    <span>Grand Total</span>
                    <span className="text-amber-600 text-base">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={handleConfirmPayment}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition shadow active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Done Payment</span>
                </button>
              </div>
            )}

            {/* STEP 2: 10-SECOND VERIFYING COUNTDOWN */}
            {paymentStatus === "loading" && (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-slate-100 border-t-amber-500 rounded-full animate-spin"></div>
                  <span className="absolute font-mono text-sm font-extrabold text-slate-700">
                    {countdown}s
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Verifying Payment...</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Please do not close this window while we verify the transaction.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: SUCCESS STATE */}
            {paymentStatus === "success" && (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">Payment Successful!</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Your order has been confirmed and the cart has been cleared. Thank you!
                  </p>
                </div>

                <div className="w-full pt-4">
                  <button
                    onClick={() => setPaymentStatus("idle")}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition shadow active:scale-[0.98] cursor-pointer"
                  >
                    Back to Store
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- EDIT MODAL --- */}
      {editingProduct && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Edit Product</h3>
            <form onSubmit={handleUpdateProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Category</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    {CATEGORIES.filter((c) => c !== "All").map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Update Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleEditImageUpload}
                  className="block w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-slate-100 file:text-slate-700 cursor-pointer"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="w-1/2 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold rounded-lg shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};