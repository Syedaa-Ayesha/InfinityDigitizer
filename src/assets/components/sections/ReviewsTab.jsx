
import ReviewSummary from "../layout/ReviewsSummary";
import ReviewCard from "../layout/ReviewCard";

const ReviewsTab = ({ design }) => {
   
    
  if (!design) return null;

  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">

      {/* Left Side */}

      <ReviewSummary design={design} />

      {/* Right Side */}

      <div className="space-y-5">

        {design.reviewsData.map((review) => (
            
            
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}

      </div>

    </section>
  );
};

export default ReviewsTab;