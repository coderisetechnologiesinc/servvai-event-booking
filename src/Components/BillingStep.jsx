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
import { useServvStore } from "../store/useServvStore";

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
  const { fetchSettings } = useServvStore();
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
        setLoading(true);
        checkout.destroy();
        toast("Your billing plan has been successfully activated.");
        setShowPaymentForm(false);
        setAttributes({ planActivated: true, planId: id });
        await fetchSettings();
        setLoading(false);
      };

      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: handleComplete,
      });

      setShowPaymentForm(true);
      checkout.mount("#servv-payment-element");
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
                {billingPlans?.map((plan, idx) => {
                  const isCurrent = activePlanId === plan.id;
                  const isUpgradeable = plan.id > (activePlanId || 0);
                  const premium = idx === billingPlans.length - 1;

                  return (
                    <div
                      key={plan.id}
                      className="flex flex-col rounded-2xl border p-6 flex-1"
                      style={{
                        background: premium ? "#462986" : "#FFFFFF",
                        border: "1px solid #E6EBE7",
                        boxShadow:
                          "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
                        minHeight: 0,
                      }}
                    >
                      {/* Top section */}
                      <div className="flex flex-col items-center gap-3 text-center">
                        <p
                          className="text-sm font-bold tracking-widest uppercase"
                          style={{
                            background: premium
                              ? "linear-gradient(91.35deg, #FFFFFF 2.18%, #CAC5E6 16.69%, #C4CBF7 40.59%, #C3E2E9 67.97%, #E8A76B 98.12%)"
                              : undefined,
                            WebkitBackgroundClip: premium ? "text" : undefined,
                            WebkitTextFillColor: premium
                              ? "transparent"
                              : "transparent",
                            backgroundClip: premium ? "text" : undefined,
                            color: premium ? undefined : "#872CFA",
                            WebkitTextFillColor: premium
                              ? "transparent"
                              : "#872CFA",
                          }}
                        >
                          {plan.name}
                        </p>

                        <h2
                          className="text-3xl font-bold"
                          style={{ color: premium ? "#FFFFFF" : "#070908" }}
                        >
                          {plan.price > 0
                            ? `$${plan.price}/mo`
                            : plan.price_annual > 0
                            ? `$${plan.price_annual}/yr`
                            : "Free"}
                        </h2>

                        {plan.application_fee_percent > 0 && (
                          <p
                            className="text-sm"
                            style={{
                              color: premium
                                ? "rgba(255,255,255,0.6)"
                                : "#717680",
                            }}
                          >
                            {plan.application_fee_percent}% transaction fee
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      {/* <ul className="mt-8 flex flex-col gap-5">
                        {plan.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2.5">
                            {feature.value === "true" ? (
                              <CheckCircleIcon
                                className="w-5 h-5 shrink-0"
                                style={{
                                  color: premium ? "#E3E1F2" : "#299E6C",
                                }}
                              />
                            ) : (
                              <XCircleIcon
                                className="w-5 h-5 shrink-0"
                                style={{
                                  color: premium
                                    ? "rgba(255,255,255,0.3)"
                                    : "#D0D5DD",
                                }}
                              />
                            )}
                            <span
                              className="text-base font-light"
                              style={{ color: premium ? "#FFFFFF" : "#070908" }}
                            >
                              {feature.title}
                            </span>
                          </li>
                        ))}
                      </ul> */}

                      {/* CTA */}
                      <div className="mt-auto pt-8 flex flex-col items-center gap-3">
                        {isCurrent ? (
                          <>
                            <span
                              className="text-xs font-semibold px-2 py-1 rounded-full"
                              style={{
                                color: premium ? "#462986" : "#6941C6",
                                background: premium ? "#FFFFFF" : "#F4EBFF",
                              }}
                            >
                              Active Plan
                            </span>
                          </>
                        ) : (
                          isUpgradeable && (
                            <button
                              type="button"
                              className="w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50"
                              style={{
                                background:
                                  "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)",
                                border: "3px solid rgba(255, 255, 255, 0.35)",
                                boxShadow:
                                  "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
                                color: "#FFFFFF",
                              }}
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
          ) : null}
        </div>
        <div id="servv-payment-element" />

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
