import React from "react";
import ReviewCard from "./ui/ReviewCard";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Tharushi",
      review: "Absolutely beautiful batik designs! The quality is amazing.",
      rating: 5,
    },
    {
      name: "Ishara",
      review: "Fast delivery and lovely packaging. Will shop again!",
      rating: 5,
    },
    {
      name: "Nadeesha",
      review: "Perfect for gifting. My family loved the batik pieces!",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-[#f9f5ef]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#4a2d12] mb-4">
          What Our Customers Say
        </h2>

        <p className="text-gray-600 mb-12">
          Hear from our happy customers who love our handcrafted Sri Lankan batik creations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <ReviewCard
              key={idx}
              name={r.name}
              review={r.review}
              rating={r.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
