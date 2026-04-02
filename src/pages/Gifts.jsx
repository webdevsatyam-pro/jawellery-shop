import React, { useState } from "react";

const giftItems = [
  {
    id: 1,
    name: "Dainty Diamond Ring",
    price: "₹18,500",
    occasion: "Birthday",
    budget: "Under 25k",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Gold Pendant with Chain",
    price: "₹24,000",
    occasion: "Anniversary",
    budget: "Under 25k",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Rose Gold Bracelets",
    price: "42,000",
    occasion: "Anniversary",
    budget: "25k - 50k",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1520a?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    name: "Laxmi Gold Coin (5g)",
    price: "₹32,500",
    occasion: "Investment",
    budget: "25k - 50k",
    image:
      "https://images.unsplash.com/photo-1610366398516-46da9364237d?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 5,
    name: "Heart Shaped Earrings",
    price: "₹12,000",
    occasion: "Birthday",
    budget: "Under 25k",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 6,
    name: "Solitaire Diamond Studs",
    price: "₹95,000",
    occasion: "Luxury Gift",
    budget: "Above 50k",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=500",
  },
];

const Gifts = () => {
  const [activeBudget, setActiveBudget] = useState("All");

  const budgetFilters = ["All", "Under 25k", "25k - 50k", "Above 50k"];

  const filteredGifts =
    activeBudget === "All"
      ? giftItems
      : giftItems.filter((item) => item.budget === activeBudget);
  return (
    <>
      <div className="bg-white min-h-screen font-sans">
        {/* Hero Section - Romantic/Soft Theme */}
        <div className="bg-[#fdf2f2] py-16 px-4 border-b border-pink-100">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Gifts className="text-[#83272d] w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#83272d] mb-4">
              The Art of Gifting
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto italic">
              "Celebrate every milestone with a gift as timeless as your love.
              From gold coins to sparkling diamonds."
            </p>
          </div>
        </div>

        {/* Gift by Budget Filter */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 py-6 shadow-sm">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold">
              Shop by Budget
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {budgetFilters.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBudget(b)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeBudget === b
                      ? "bg-[#83272d] text-white border-[#83272d]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#83272d]"
                  }`}>
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gift Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGifts.map((item) => (
              <div
                key={item.id}
                className="group relative border border-gray-100 p-4 transition-all hover:shadow-xl">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                  </button>
                  {/* Occasion Badge */}
                  <div className="absolute bottom-0 left-0 bg-[#b08d57] text-white px-3 py-1 text-xs">
                    {item.occasion}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-[#83272d] font-bold text-xl mt-1">
                    {item.price}
                  </p>
                  <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-400 text-xs ml-1">
                      (45 reviews)
                    </span>
                  </div>
                  <button className="mt-6 w-full py-3 bg-gray-900 text-white hover:bg-[#83272d] transition-all flex items-center justify-center gap-2">
                    <Gift size={18} /> GIFT THIS NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                📦
              </div>
              <h4 className="font-bold text-gray-800">Free Gift Packaging</h4>
              <p className="text-sm text-gray-500 mt-2">
                Every gift comes in our signature Tanishaq box with a
                personalized note.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                💳
              </div>
              <h4 className="font-bold text-gray-800">E-Gift Cards</h4>
              <p className="text-sm text-gray-500 mt-2">
                Confused? Let them choose their own sparkle with our digital
                gift cards.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                🔄
              </div>
              <h4 className="font-bold text-gray-800">Easy Exchange</h4>
              <p className="text-sm text-gray-500 mt-2">
                7-day easy exchange policy for all gift items across India.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t text-center">
          <h2 className="font-serif text-2xl text-[#83272d]">TANISHAQ</h2>
          <p className="text-gray-400 mt-2 italic">
            Making Every Moment Golden
          </p>
        </footer>
      </div>
    </>
  );
};

export default Gifts;
