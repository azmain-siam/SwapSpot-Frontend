import CommonWrapper from "@/common/CommonWrapper";

const Security = () => {
  return (
    <CommonWrapper>
      <div className="py-12 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Secure Your Swaps with Escrow
        </h1>
        <p className="text-gray-600 mb-10">
          Peace of mind for your valuable skill exchanges.
        </p>

        {/* What is Escrow */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">What is Escrow?</h2>
          <p className="text-gray-700">
            Escrow is a financial arrangement where a third party holds and
            regulates payment of the funds required for two parties involved in
            a transaction. It protects both the buyer and seller. In SwapSpot,
            it adds an extra layer of security to your skill trades, especially
            for higher value exchanges.
          </p>
        </section>

        {/* How it Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How SwapSpot Escrow Works
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Both parties agree to use Escrow for a swap.</li>
            <li>
              The agreed-upon value (or a portion) is held securely by SwapSpot.
            </li>
            <li>Both parties complete their agreed-upon skill services.</li>
            <li>
              Once both parties confirm completion, the funds are released.
            </li>
            <li>
              If a dispute arises, SwapSpot’s dispute resolution process is
              initiated.
            </li>
          </ol>
        </section>

        {/* Why Use Escrow */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Use Escrow?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Security:</strong> Ensures funds are held until the
              service is completed.
            </li>
            <li>
              <strong>Trust:</strong> Builds confidence between swappers who may
              not know each other.
            </li>
            <li>
              <strong>Protection:</strong> Provides a process for resolving
              disagreements.
            </li>
            <li>
              <strong>Peace of Mind:</strong> Reduces the risk of non-completion
              or payment issues.
            </li>
          </ul>
        </section>

        {/* Escrow Fee */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Escrow Fee</h2>
          <p className="text-gray-700">
            A small fee is charged for using the SwapSpot Escrow service. This
            fee helps cover the costs of securely holding funds and managing the
            process, including dispute resolution if necessary. The specific fee
            will be clearly shown when you set up a swap using Escrow.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 py-10 px-6 rounded-xl text-center shadow-sm max-w-2xl mx-auto">
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

export default Security;
