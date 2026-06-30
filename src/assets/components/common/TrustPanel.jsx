import { Star } from "lucide-react";
import Trustprofile01 from "../../images/Trustprofile01.png"
import Trustprofile02 from "../../images/Trustprofile02.png"
import Trustprofile03 from "../../images/Trustprofile03.png"
import Trustprofile04 from "../../images/Trustprofile04.png"

const profiles = [
  Trustprofile01,
  Trustprofile02,
  Trustprofile03,
  Trustprofile04,
];

export default function TrustPanel() {
  return (
    <div className="flex items-center w-fit mt-7">

      {/* Profile Images */}
      <div className="flex -space-x-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="w-12 h-12 rounded-full border border-white overflow-hidden"
          >
            <img
              src={profile}
              alt={`client-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="flex flex-col ml-[21px]">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="fill-[#FE9E0C] text-[#FE9E0C]"
              strokeWidth={1}
            />
          ))}
          <span className="text-black ml-1 font-semibold">5.0</span>
        </div>

        <p className="font-semibold text-black">
          From 1000+ happy customers
        </p>
      </div>
    </div>
  );
}