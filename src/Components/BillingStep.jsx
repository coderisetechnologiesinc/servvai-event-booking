import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

import {
  CreditCardIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import ModalShell from "./ModalShell";
import SpinnerLoader from "./Pages/SpinnerLoader";

const BillingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  onSave,
  loading: parentLoading,
  settings,
}) => {
  const [billingPlans, setBillingPlans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [stripeForm, setStripeForm] = useState(null);

  useEffect(() => {
    getBillingPlans();
  }, []);

  const getBillingPlans = async () => {
    setLoading(true);
    const response = await axios("/wp-json/servv-plugin/v1/shop/paymentplans", {
      headers: { "X-WP-Nonce": servvData.nonce },
    }).catch(() => toast("Unable to fetch billing plans."));

    if (response?.status === 200) {
      setBillingPlans(response.data.plans);
    }
    setLoading(false);
  };

  const activateBillingPlan = async (id, isAnnual = false) => {
    setLoading(true);
    setShowPaymentOptionsModal(false);

    const response = await axios({
      method: "POST",
      url: `/wp-json/servv-plugin/v1/shop/paymentplans/${id}`,
      headers: { "X-WP-Nonce": servvData.nonce },
      data: { is_annual: isAnnual },
    }).catch(() => {
      toast("Unable to activate billing plan.");
      setLoading(false);
    });

    if (response?.status === 200) {
      const { client_secret, public_key } = response.data;
      const stripe = await loadStripe(public_key);

      const handleComplete = async () => {
        checkout.destroy();
        toast("Your billing plan has been successfully activated.");
        setShowPaymentForm(false);
        setAttributes({ planActivated: true, planId: id });
      };

      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: handleComplete,
      });

      setShowPaymentForm(true);
      checkout.mount("#servv-billing-payment-element");
      setStripeForm(checkout);
    }
    setLoading(false);
  };

  const showPaymentOptions = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentOptionsModal(true);
  };

  const handleContinue = () => {
    onSave({
      ...attributes,
    });
  };

  const activePlanId = settings?.current_plan?.id || 1;

  return (
    <div className="step__wrapper w-full">
      {/* Header */}
      <div className="step__header">
        <CreditCardIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Choose a Plan</h4>
          <p className="step__description">
            Select the plan that best fits your needs.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={`step__content w-full`}>
        <div className="flex flex-col gap-y-[24px] mb-[30px]">
          {!showPaymentForm ? (
            <SpinnerLoader
              isLoading={loading && !billingPlans}
              customStyling="top-[30px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {billingPlans?.map((plan) => {
                  const isCurrent = activePlanId === plan.id;
                  const isUpgradeable = plan.id > (activePlanId || 0);

                  return (
                    <div
                      key={plan.id}
                      className={`flex flex-col h-full rounded-lg border ${
                        isCurrent
                          ? "border-brand-500 bg-brand-50"
                          : "border-gray-200 bg-white"
                      } p-lg`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">
                            {plan.name}
                          </h2>
                          <div className="mt-1 min-h-[1.25rem] flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            {(plan.price > 0 || plan.price_annual > 0) && (
                              <span>
                                {plan.price > 0
                                  ? `$${plan.price}/mo`
                                  : `$${plan.price_annual}/yr`}
                              </span>
                            )}
                            {plan.application_fee_percent > 0 && (
                              <span>· {plan.application_fee_percent}% fee</span>
                            )}
                          </div>
                        </div>
                        {isCurrent && (
                          <span className="text-xs font-semibold text-brand-700 bg-brand-100 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      <ul className="mt-4 space-y-2">
                        {plan.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            {feature.value === "true" ? (
                              <CheckCircleIcon className="w-5 h-5 text-success-600 shrink-0" />
                            ) : (
                              <XCircleIcon className="w-5 h-5 text-error-600 shrink-0" />
                            )}
                            <span className="text-sm text-gray-700">
                              {feature.title}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        {isCurrent ? (
                          <span className="block w-full text-center text-sm font-semibold text-brand-700">
                            Active Plan
                          </span>
                        ) : (
                          isUpgradeable && (
                            <button
                              type="button"
                              className="servv_button servv_button--primary w-full"
                              onClick={() => showPaymentOptions(plan)}
                              disabled={loading}
                            >
                              Activate
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </SpinnerLoader>
          ) : (
            <div id="servv-billing-payment-element" />
          )}
        </div>

        {/* Actions */}
        {!loading && billingPlans && (
          <div className={`servv_actions mt-auto`}>
            {/* {goToPreviousStep && (
              <button
                type="button"
                className="servv_button servv_button--secondary"
                onClick={goToPreviousStep}
                disabled={loading || parentLoading}
              >
                Previous
              </button>
            )} */}

            <button
              type="button"
              className="servv_button servv_button--primary"
              onClick={goToNextStep}
              disabled={loading || parentLoading}
            >
              {parentLoading ? "Saving..." : "Continue"}
            </button>
          </div>
        )}
      </div>

      {/* Payment Options Modal */}
      {showPaymentOptionsModal && selectedPlan && (
        <ModalShell
          title={`Activate ${selectedPlan.name}`}
          onClose={() => {
            setShowPaymentOptionsModal(false);
            setSelectedPlan(null);
          }}
        >
          <div className="flex flex-col gap-y-[16px] p-[24px]">
            {selectedPlan.application_fee_percent > 0 && (
              <p className="step__description">
                This plan includes a {selectedPlan.application_fee_percent}%
                transaction fee.
              </p>
            )}

            <div className="flex flex-col gap-y-[12px]">
              {selectedPlan.price > 0 && (
                <button
                  type="button"
                  className="servv_button servv_button--primary w-full"
                  onClick={() => activateBillingPlan(selectedPlan.id)}
                >
                  Monthly — ${selectedPlan.price}/mo
                </button>
              )}

              {selectedPlan.price_annual > 0 && (
                <button
                  type="button"
                  className="servv_button servv_button--secondary w-full"
                  onClick={() => activateBillingPlan(selectedPlan.id, true)}
                >
                  Annual — ${selectedPlan.price_annual}/yr
                </button>
              )}
            </div>

            <button
              type="button"
              className="servv_button servv_button--secondary w-full"
              onClick={() => {
                setShowPaymentOptionsModal(false);
                setSelectedPlan(null);
              }}
            >
              Cancel
            </button>
          </div>
        </ModalShell>
      )}
    </div>
  );
};

export default BillingStep;
