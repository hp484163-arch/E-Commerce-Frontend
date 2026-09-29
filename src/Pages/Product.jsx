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
  const [products] = useState(() => {
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

  // --- PAYMENT FLOW STATE: 'idle' | 'pending' | 'loading' | 'success' ---
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    localStorage.setItem("store_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("store_cart_items", JSON.stringify(cartItems));
  }, [cartItems]);

  // Payment countdown timer
  useEffect(() => {
    if (paymentStatus !== "loading") return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev >= 10) {
          clearInterval(timer);
          setPaymentStatus("success");
          setCartItems([]);
          localStorage.removeItem("store_cart_items");
          return 0;
        }
        return prev + 1;
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

  // --- CHECKOUT FLOW HANDLERS ---
  const handleStartCheckout = () => {
    setIsCartOpen(false);
    setPaymentStatus("pending");
  };

  const handleConfirmPayment = () => {
    setCountdown(1);
    setPaymentStatus("loading");
  };

  return (
    <div className="bg-[#1e2538] text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-800 gap-4">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFA500]/10 text-[#FFA500] border border-[#FFA500]/20 mb-2">
              DKT's Catalog
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Explore Products
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Find premium items and search categories.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-[#232b3e] hover:bg-gray-800 border border-gray-700/80 px-4 py-2.5 rounded-xl text-white shadow-sm transition active:scale-95 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="font-semibold text-sm">Cart</span>
              <span className="bg-[#FFA500] text-gray-950 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItemCount}
              </span>
            </button>
            <button
              onClick={() => navigate("/add-product")}
              className="flex items-center gap-2 bg-[#FFA500] hover:bg-[#e69500] text-gray-950 px-4 py-2.5 rounded-xl font-bold text-sm transition shadow-md shadow-[#FFA500]/10 active:scale-95 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
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
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog or category..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-[#232b3e] border border-gray-700 rounded-xl focus:outline-none focus:border-[#FFA500] text-white placeholder-gray-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-white"
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
                className="w-full px-3 py-2.5 text-sm bg-[#232b3e] border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#FFA500]"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#232b3e]">
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
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FFA500] text-gray-950 shadow-md shadow-[#FFA500]/20 font-bold"
                      : "bg-[#232b3e] border border-gray-800 text-gray-300 hover:border-gray-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid (5 Products Per Row on Large Screens) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-[#232b3e]/40 border border-gray-800 rounded-2xl mt-8">
            <p className="text-gray-400 text-base">
              No products found matching &ldquo;{searchQuery || selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-sm text-[#FFA500] font-semibold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-[#232b3e] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all group flex flex-col justify-between shadow-lg"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details & Action */}
                <div className="p-4 flex flex-col grow justify-between space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-[#FFA500] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-white text-sm mt-1 line-clamp-1 group-hover:text-[#FFA500] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <span className="text-base font-bold text-white">
                      ${Number(item.price).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-[#FFA500] hover:text-gray-950 text-gray-200 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
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
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-950/80 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-[#232b3e] h-full shadow-2xl flex flex-col justify-between border-l border-gray-800">
            <div className="p-5 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Your Shopping Cart</h2>
                <span className="text-xs bg-[#FFA500]/10 text-[#FFA500] border border-[#FFA500]/20 px-2.5 py-0.5 rounded-full font-bold">
                  {totalItemCount} {totalItemCount === 1 ? "item" : "items"}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg transition hover:bg-gray-800 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                  <p className="text-sm font-medium">Your cart is empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3.5 bg-[#1e2538] rounded-xl border border-gray-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-gray-900"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-gray-500 hover:text-rose-400 text-xs font-bold ml-2 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-extrabold text-[#FFA500]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center gap-2 bg-[#232b3e] border border-gray-700 rounded-lg px-2 py-0.5">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="text-gray-400 hover:text-white font-bold px-1 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-white w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="text-gray-400 hover:text-white font-bold px-1 cursor-pointer"
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
              <div className="p-5 border-t border-gray-800 bg-[#1e2538] space-y-4">
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-semibold text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-gray-800">
                    <span>Grand Total</span>
                    <span className="text-base text-[#FFA500]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleStartCheckout}
                  className="w-full py-3.5 bg-[#FFA500] hover:bg-[#e69500] text-gray-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-[#FFA500]/10 cursor-pointer"
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
        <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-[#232b3e] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-800 relative">

            {/* STEP 1: SUMMARY & QR CODE */}
            {paymentStatus === "pending" && (
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full flex justify-between items-center pb-2 border-b border-gray-800">
                  <h3 className="text-lg font-bold text-white">Scan & Pay</h3>
                  <button
                    onClick={() => setPaymentStatus("idle")}
                    className="text-gray-400 hover:text-white text-sm font-bold p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-3 bg-white rounded-2xl shadow-inner">
                  <img
                    src={`/images/qrpayment.jpg`}
                    alt="Payment QR Code"
                    className="w-48 h-48 rounded-lg object-contain bg-white"
                  />
                </div>
                <p className="text-xs text-gray-400">Scan with any banking or wallet app</p>

                <div className="w-full bg-[#1e2538] border border-gray-800 rounded-xl p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between text-gray-400">
                    <span>Total Items</span>
                    <span className="font-semibold text-white">{totalItemCount}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-semibold text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white text-sm font-extrabold pt-2 border-t border-gray-800">
                    <span>Grand Total</span>
                    <span className="text-[#FFA500] text-base">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirmPayment}
                  className="w-full py-3.5 bg-[#FFA500] hover:bg-[#e69500] text-gray-950 font-extrabold text-sm rounded-xl transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Complete Payment</span>
                </button>
              </div>
            )}

            {/* STEP 2: 10-SECOND VERIFYING COUNTDOWN */}
            {paymentStatus === "loading" && (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-gray-800 border-t-[#FFA500] rounded-full animate-spin"></div>
                  <span className="absolute text-sm font-bold text-white">{countdown}s</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Verifying Payment...</h4>
                  <p className="text-xs text-gray-400 mt-1 max-w-xs">
                    Please hold on while we confirm your transaction with DKT Store.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: SUCCESS STATE */}
            {paymentStatus === "success" && (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-white">Payment Successful!</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Your order has been confirmed and the cart has been cleared.
                  </p>
                </div>

                <div className="w-full pt-4">
                  <button
                    onClick={() => setPaymentStatus("idle")}
                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-sm rounded-xl transition shadow cursor-pointer"
                  >
                    Back to Store
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};