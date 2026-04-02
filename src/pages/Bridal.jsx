import React, { useState } from "react";

const bridalProducts = [
  {
    id: 1,
    name: "Polki Heritage Choker",
    price: "₹8,50,000",
    region: "North Indian",
    image:
      "https://images.unsplash.com/photo-1624411131705-6450f3801968?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Temple Gold Haram Set",
    price: "₹12,25,000",
    region: "South Indian",
    image:
      "https://images.unsplash.com/photo-1630019852942-f892027be9ef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Diamond Floral Tiara Set",
    price: "₹15,00,000",
    region: "Modern Bridal",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Kundan Matha Patti & Set",
    price: "₹6,75,000",
    region: "North Indian",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "Antique Gold Bangles",
    price: "₹4,10,000",
    region: "South Indian",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1520a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "Filigree Bridal Jhumkas",
    price: "₹2,50,000",
    region: "Bengali",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
  },
];

const Bridal = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? bridalProducts
      : bridalProducts.filter((p) => p.region === filter);

  const categories = [
    "All",
    "North Indian",
    "South Indian",
    "Bengali",
    "Modern Bridal",
  ];
  return (
    <>
      <div className="bg-[#fffcf7] min-h-screen font-serif">
        {/* Hero Banner Section */}
        <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=1600"
            className="absolute w-full h-full object-cover brightness-50"
            alt="Bridal Banner"
          />
          <div className="relative text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-4">
              RIVAAH
            </h1>
            <p className="text-xl md:text-2xl italic">
              "Every Bride is a Masterpiece"
            </p>
            <div className="w-32 h-1 bg-[#b08d57] mx-auto mt-6"></div>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="py-16 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#83272d] mb-6">
            The Heritage of Tanishaq
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Bridal jewelry isn't just gold and diamonds; it's a blessing passed
            down through generations. Discover our curated collections that
            celebrate the diversity of Indian weddings.
          </p>
        </section>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border-b-2 transition-all duration-300 tracking-wider ${
                filter === cat
                  ? "border-[#83272d] text-[#83272d] font-bold"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 text-xs tracking-tighter text-gray-800">
                    {product.region}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <button className="bg-[#83272d] text-white py-3 w-full hover:bg-[#631d22] transition-colors">
                      REQUEST A CONSULTATION
                    </button>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl text-gray-800 tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#b08d57] font-semibold mt-1">
                    {product.price}
                  </p>
                  <div className="mt-2 text-xs text-gray-400 uppercase tracking-widest">
                    Handcrafted Excellence
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#83272d] py-16 px-4 text-center text-white">
          <h2 className="text-3xl mb-4">Want a Personalized Experience?</h2>
          <p className="mb-8 opacity-90">
            Book a video call with our bridal jewelry experts.
          </p>
          <button className="border-2 border-white px-10 py-3 hover:bg-white hover:text-[#83272d] transition-all font-bold">
            BOOK AN APPOINTMENT
          </button>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-500 text-sm">
          <p>© 2024 TANISHAQ | RIVAAH BRIDAL COLLECTION</p>
        </footer>
      </div>
    </>
  );
};

export default Bridal;
