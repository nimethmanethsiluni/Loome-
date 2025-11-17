import React from "react";

interface ReviewProps {
  name: string;
  review: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, review, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <p className="text-gray-700 italic mb-4">"{review}"</p>

      <p className="text-yellow-500 text-lg">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </p>

      <h4 className="mt-3 font-semibold text-[#4a2d12]">{name}</h4>
    </div>
  );
};

export default ReviewCard;
