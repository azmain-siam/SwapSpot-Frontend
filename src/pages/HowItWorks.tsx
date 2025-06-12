import CommonWrapper from "@/common/CommonWrapper";

const HowItWorks = () => {
  return (
    <CommonWrapper>
      <div className="py-12 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Secure How SwapSpot Works Your Swaps with Escrow
        </h1>
        <p className="text-gray-600 mb-10">
          Connecting skills, creating value, one swap at a time.
        </p>

        {/* Step 1: Propose Your Trade */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Propose Your Trade</h2>
          <p className="text-gray-700">
            Found someone with a skill you need? Send them a swap proposal.
            Clearly define what skill you will offer in exchange for theirs, the
            scope of work, timeline, and any other important details. You can
            also use the messaging system to discuss before proposing.
          </p>
        </section>

        {/* Step 2: Agree and Get Started */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Agree and Get Started</h2>
          <p className="text-gray-700">
            The other user reviews your proposal. They can accept, decline, or
            suggest modifications. Once both parties agree on the terms, the
            swap is initiated. For added security, consider using the Escrow
            service for valuable trades.
          </p>
        </section>

        {/* Step 3: Perform the Service */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Perform the Service</h2>
          <p className="text-gray-700">
            Both parties now perform the skill services as agreed upon in the
            swap proposal. Communicate through the platform’s messaging system
            to stay updated on progress.
          </p>
        </section>

        {/* Step 4: Confirm & Review */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Confirm & Review</h2>
          <p className="text-gray-700">
            Once both parties are satisfied that the services are completed
            according to the agreement, they confirm completion on the platform.
            You can then leave a review and rating for the other user based on
            your experience. A small swap fee is processed upon successful
            completion.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-100 py-10 px-6 rounded-xl text-center shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Ready to Start Swapping?
          </h3>
          <button className="bg-primary hover:bg-blue-700 cursor-pointer text-white font-medium py-2 px-5 rounded">
            Join SwapSpot Today
          </button>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default HowItWorks;
