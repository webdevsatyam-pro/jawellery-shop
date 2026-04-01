import React from "react";

const collections = [
  {
    id: 1,
    name: "Royal Gold Necklace",
    price: "₹1,25,000",
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    price: "₹85,000",
    category: "Earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Antique Bridal Set",
    price: "₹4,50,000",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    name: "Elegant Gold Bangle",
    price: "₹65,000",
    category: "Bangles",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1520a?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 5,
    name: "Ruby Engagement Ring",
    price: "₹1,10,000",
    category: "Rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 6,
    name: "Diamond Pendant",
    price: "₹45,000",
    category: "Pendant",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500",
  },
];

const Collection = () => {
  return (
    <>
      <div className="bg-[#fffcf7] min-h-screen">
        {/* Header Section */}
        <header className="bg-white py-10 shadow-sm">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-serif text-[#83272d] tracking-widest font-bold uppercase">
              TANISHAQ
            </h1>
            <p className="text-gray-600 mt-2 italic">
              Exquisite Designs for Every Occasion
            </p>
            <div className="w-24 h-1 bg-[#b08d57] mx-auto mt-4"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-2xl font-serif text-gray-800 border-l-4 border-[#b08d57] pl-4">
              Our Latest Collection
            </h2>
            <div className="mt-4 md:mt-0 flex gap-4">
              <select className="border border-gray-300 rounded px-4 py-2 bg-white outline-none focus:ring-1 focus:ring-[#b08d57]">
                <option>Filter by Category</option>
                <option>Necklace</option>
                <option>Earrings</option>
                <option>Rings</option>
              </select>
              <select className="border border-gray-300 rounded px-4 py-2 bg-white outline-none focus:ring-1 focus:ring-[#b08d57]">
                <option>Sort by Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {collections.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 text-center">
                  <span className="text-xs text-[#b08d57] font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif text-gray-800 mt-2">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#83272d] mt-2">
                    {item.price}
                  </p>
                  <button className="mt-4 w-full border border-[#b08d57] text-[#b08d57] py-2 hover:bg-[#b08d57] hover:text-white transition-colors duration-300 rounded-sm">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer Simple */}
        <footer className="bg-gray-900 text-white py-8 mt-12 text-center">
          <p className="tracking-widest">
            &copy; 2023 TANISHAQ JEWELLERS. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Collection;
