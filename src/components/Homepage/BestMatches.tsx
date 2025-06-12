import CommonWrapper from "@/common/CommonWrapper";
import MatchCard, { SkillMatch } from "./MatchCard";

interface MatchesSectionProps {
  matches: SkillMatch[];
}

// Main component
export function MatchesSection({
  matches = sampleMatches,
}: Partial<MatchesSectionProps>) {
  return (
    <CommonWrapper>
      <section className="py-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Matches For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
}

// Sample data
const sampleMatches: SkillMatch[] = [
  {
    id: "1",
    name: "Eric Yates",
    location: "London",
    country: "UK",
    rating: 4.9,
    reviewCount: 5,
    isVerified: true,
    isAvailable: true,
    avatar: "/placeholder.svg?height=60&width=60",
    offering: "Graphic Design",
    lookingFor: "Web Development",
  },
  {
    id: "2",
    name: "Neha Mayumi",
    location: "Los Angeles",
    country: "USA",
    rating: 4.9,
    reviewCount: 5,
    isVerified: true,
    isAvailable: true,
    avatar: "/placeholder.svg?height=60&width=60",
    offering: "Graphic Design",
    lookingFor: "Web Development",
  },
  {
    id: "3",
    name: "Boston Thomas",
    location: "Los Angeles",
    country: "USA",
    rating: 4.9,
    reviewCount: 5,
    isVerified: true,
    isAvailable: false,
    avatar: "/placeholder.svg?height=60&width=60",
    offering: "Graphic Design",
    lookingFor: "Web Development",
  },
  {
    id: "4",
    name: "Eric Yates",
    location: "London",
    country: "UK",
    rating: 4.9,
    reviewCount: 5,
    isVerified: true,
    isAvailable: true,
    avatar: "/placeholder.svg?height=60&width=60",
    offering: "Graphic Design",
    lookingFor: "Web Development",
  },
  {
    id: "5",
    name: "Neha Mayumi",
    location: "Los Angeles",
    country: "USA",
    rating: 4.9,
    reviewCount: 5,
    isVerified: true,
    isAvailable: true,
    avatar: "/placeholder.svg?height=60&width=60",
    offering: "Graphic Design",
    lookingFor: "Web Development",
  },
  {
    id: "6",
    name: "Boston Thomas",
    location: "Los Angeles",
    country: "USA",
    rating: 4.9,
    reviewCount: 5,
    isVerified: true,
    isAvailable: false,
    avatar: "/placeholder.svg?height=60&width=60",
    offering: "Graphic Design",
    lookingFor: "Web Development",
  },
];
