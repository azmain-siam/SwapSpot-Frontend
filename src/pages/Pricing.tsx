interface PricingFeature {
  text: string;
}

interface PricingPlan {
  title: string;
  description: string;
  price: {
    amount: string;
    period?: string;
    description?: string;
  };
  features?: PricingFeature[];
  buttonText: string;
  buttonVariant: "primary" | "outline";
  buttonColor?: string;
  backgroundColor?: string;
}

export function Pricing() {
  const plans: PricingPlan[] = [
    {
      title: "Our Simple Pricing",
      description: "A small fee per successful swap.",
      price: {
        amount: "5%",
        description: "of the Escrow amount",
      },
      buttonText: "Get Started",
      buttonVariant: "primary",
      backgroundColor: "bg-purple-50",
    },
    {
      title: "Premium Membership",
      description: "",
      price: {
        amount: "$50",
        period: "/month",
      },
      features: [
        { text: "Zero Swap Fee" },
        { text: "Boosted listings" },
        { text: "Faster matching" },
        { text: "Priority visibility" },
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "primary",
      buttonColor: "bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
      backgroundColor: "bg-amber-50",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Pricing Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Our Simple Pricing</h2>
        <p className="text-gray-600">
          Choose the plan that best fits your skill-swapping journey.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 ${
              plan.backgroundColor || "bg-white"
            } border border-gray-100 shadow-sm flex flex-col h-full`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              {plan.description && (
                <p className="text-gray-600">{plan.description}</p>
              )}
            </div>

            {plan.features && (
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start mb-3">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto">
              <div className="mb-6 flex items-end">
                <span className="text-4xl font-bold">{plan.price.amount}</span>
                {plan.price.period && (
                  <span className="text-gray-600 ml-1">
                    {plan.price.period}
                  </span>
                )}
              </div>
              {plan.price.description && (
                <div className="text-sm text-gray-500 mb-6">
                  {plan.price.description}
                </div>
              )}
              <button
                className={`w-full py-3 px-4 cursor-pointer text-white rounded-md font-medium transition-colors ${
                  plan.buttonColor ||
                  (plan.buttonVariant === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                    : "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50")
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Escrow Section */}
      <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">
          Secure Your Trades with Escrow
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          For high-value trades, we recommend using our secure escrow service. A
          small fee applies for using this service, ensuring peace of mind for
          both parties.
        </p>
        <button className="bg-blue-600 cursor-pointer text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors">
          Learn About Escrow
        </button>
      </div>
    </div>
  );
}
