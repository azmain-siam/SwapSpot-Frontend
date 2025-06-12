import { CheckCircle, MapPin, MessageCircle, Star } from "lucide-react";
import { Button } from "../ui/CustomButton";

export interface SkillMatch {
  id: string;
  name: string;
  location: string;
  country: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  isAvailable: boolean;
  avatar: string;
  offering: string;
  lookingFor: string;
}

const MatchCard = ({ match }: { match: SkillMatch }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={match.avatar || "/placeholder.svg"}
              alt={`${match.name}'s profile`}
              className="w-12 h-12 rounded-full object-cover"
            />
            {match.isVerified && (
              <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-lg">{match.name}</h3>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>
                {match.location}, {match.country}
              </span>
            </div>
            <div className="flex items-center text-sm mt-0.5">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-medium">{match.rating}</span>
              <span className="text-gray-500">({match.reviewCount})</span>
            </div>
          </div>
        </div>
        <div>
          <span
            className={`text-sm ${
              match.isAvailable ? "text-green-500" : "text-gray-500"
            }`}
          >
            {match.isAvailable ? "Available" : "Not available"}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">I offer</span>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {match.offering}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">In exchange for</span>
          <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            {match.lookingFor}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2">
        <Button
          variant="outline"
          size="sm"
          className="text-blue-600 border-blue-600"
        >
          View Profile
        </Button>
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50"
            aria-label="Send message"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <Button variant="primary" size="sm">
            Swap
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
