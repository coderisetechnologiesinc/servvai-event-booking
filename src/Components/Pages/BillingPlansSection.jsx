import React, { useState } from "react";
import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import PremiumActivateButton from "../Controls/PremiumActivateButton";

const BillingPlansSection = ({ currentPlan = "free", onPlanActivate }) => {
  const [activatingPlan, setActivatingPlan] = useState(null);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Basic Events",
        "Email Support",
        "Standard Templates"
      ],
      current: currentPlan === "free"
    },
    {
      id: "premium",
      name: "Premium",
      price: "$29",
      period: "per month",
      features: [
        "Zoom Integration",
        "Premium Support", 
        "Email Reminders",
        "Email Customization",
        "User Management"
      ],
      current: currentPlan === "premium",
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99",
      period: "per month", 
      features: [
        "Everything in Premium",
        "Advanced Analytics",
        "Custom Integrations",
        "Priority Support",
        "White Label"
      ],
      current: currentPlan === "enterprise"
    }
  ];

  const handleActivate = async (planId) => {
    setActivatingPlan(planId);
    try {
      await onPlanActivate(planId);
    } catch (error) {
      console.error("Failed to activate plan:", error);
    } finally {
      setActivatingPlan(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`
              relative bg-white rounded-2xl p-6 border-2 transition-all duration-300
              ${plan.current 
                ? "border-purple-500 bg-purple-50" 
                : plan.popular 
                ? "border-purple-300 shadow-lg" 
                : "border-gray-200"
              }
            `}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <StarIcon className="w-4 h-4" />
                  <span>{t("Most Popular")}</span>
                </div>
              </div>
            )}

            {/* Current plan badge */}
            {plan.current && (
              <div className="absolute top-4 right-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{t("Current Plan")}</div>
              </div>
            )}

            <div className="space-y-4">
              {/* Plan header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{t("/")}{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <div className="pt-4">
                {plan.current ? (
                  <div className="w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-600 text-center font-semibold">{t("Current Plan")}</div>
                ) : plan.id === "premium" ? (
                  <PremiumActivateButton
                    onActivate={() => handleActivate(plan.id)}
                    loading={activatingPlan === plan.id}
                    planName={plan.name}
                  />
                ) : (
                  <button
                    onClick={() => handleActivate(plan.id)}
                    disabled={activatingPlan === plan.id}
                    className="w-full py-3 px-6 rounded-xl border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold transition-colors duration-200"
                  >
                    {activatingPlan === plan.id ? "Activating..." : `Activate ${plan.name}`}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Keep existing table layout */}
      <div className="hidden md:block">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("Plan")}</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("Price")}</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("Features")}</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("Action")}</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {plans.map((plan) => (
                <tr key={plan.id} className={plan.current ? "bg-purple-50" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{plan.name}</div>
                      {plan.popular && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">{t("Popular")}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {plan.price}{t("/")}{plan.period}
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckIcon className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {plan.current ? (
                      <span className="text-green-600">{t("Current Plan")}</span>
                    ) : (
                      <button
                        onClick={() => handleActivate(plan.id)}
                        disabled={activatingPlan === plan.id}
                        className={`
                          px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                          ${plan.id === "premium"
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "border border-purple-600 text-purple-600 hover:bg-purple-50"
                          }
                        `}
                      >
                        {activatingPlan === plan.id ? "Activating..." : "Activate"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingPlansSection;