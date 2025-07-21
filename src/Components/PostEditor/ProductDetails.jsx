import React, { useEffect, useState, Fragment } from "react";
import InputFieldControl from "../Controls/InputFieldControl";
import BlockStack from "../Containers/BlockStack";
import ButtonGroup from "../Controls/ButtonGroup";
import Badge from "../Containers/Badge";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

const ProductDetails = ({
  productDetails,
  handleDetailsChange,
  id,
  stripeAccount,
}) => {
  const { price, quantity, current_quantity } = productDetails;
  const ticketTypes = ["Free", "Paid"];
  const ticketsAvailability = ["Open", "Sales start & end"];
  const [ticketAvailability, setTicketAvailability] = useState(0);
  const [selectedTicketType, setSelectedTicketType] = useState(ticketTypes[0]);
  const handleTicketTypeChange = (newValue) => {
    setSelectedTicketType(newValue);
  };
  const renderStandartTicket = () => {
    return (
      <div className="w-full border border-gray-200 bg-white rounded-lg flex flex-row p-lg relative">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 justify-start">
            <span className="text-sm font-semibold text-gray-700">
              Standard
            </span>
            <span className="text-sm font-regular text-gray-600">
              {productDetails?.price || "Free"}
            </span>
          </div>
          {productDetails.quantity ? (
            <Badge
              text={`${
                productDetails.quantity > 1
                  ? productDetails.quantity + " " + "tickets"
                  : productDetails.quantity + " " + "ticket"
              }`}
              color="success"
              type="pill-colour"
            />
          ) : (
            <Badge
              text={"Unlimited quantity"}
              color="success"
              type="pill-colour"
            />
          )}
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (productDetails.price === 0) {
      setSelectedTicketType(ticketTypes[0]);
    } else {
      setSelectedTicketType(ticketTypes[1]);
    }
  }, []);

  const handleTicketAdd = () => {};

  return (
    <Fragment>
      {renderStandartTicket()}
      <Fragment>
        <button
          className={`flex flex-row gap-2 text-brand-700 fill-brand-700 items-center ${
            true ? "filter grayscale" : ""
          }`}
          onClick={handleTicketAdd}
          disabled={true}
        >
          <PlusCircleIcon className="w-4" />
          <span>Create new ticket</span>
        </button>

        {
          <fieldset className="input-container-col">
            <BlockStack gap={4}>
              {/* <ButtonGroup
                buttons={ticketTypes}
                active={selectedTicketType}
                onChange={handleTicketTypeChange}
              /> */}
              <div className="input-container-col"></div>
              {selectedTicketType === ticketTypes[1] && (
                <div className="input-container-col">
                  <label className="section-description">Ticket price</label>
                  <InputFieldControl
                    value={price}
                    onChange={(val) => handleDetailsChange("price", val)}
                    fullWidth={true}
                    maxLength={4}
                    type="number"
                    minValue={0}
                    maxValue={10000000}
                    align="right"
                    disabled={!stripeAccount || !stripeAccount.id}
                  />
                </div>
              )}
              <div className="input-container-col">
                <label className="section-description">Quantity</label>
                <div className="input-container-col w-full">
                  <InputFieldControl
                    value={quantity}
                    onChange={(val) =>
                      handleDetailsChange("quantity", Number.parseInt(val))
                    }
                    fullWidth={true}
                    maxLength={20}
                    type="number"
                    minValue={0}
                    maxValue={10000000}
                    align="right"
                  />
                </div>
              </div>
              <ButtonGroup
                title="Availability"
                buttons={ticketsAvailability}
                active={ticketsAvailability[ticketAvailability]}
                onChange={() => {}}
                disabled={true}
              />
            </BlockStack>
          </fieldset>
        }
      </Fragment>
    </Fragment>
    // <div className="input-container-row items-center">
    //   <div className="input-container-col w-full">
    //     <div className="section-description">Price</div>
    //     <InputFieldControl
    //       value={price}
    //       onChange={(val) => handleDetailsChange("price", val)}
    //       fullWidth={true}
    //       maxLength={4}
    //       type="number"
    //       minValue={0}
    //       maxValue={10000000}
    //       align="right"
    //       disabled={!stripeAccount || !stripeAccount.id}
    //     />
    //   </div>
    //   <div className="input-container-col w-full">
    //     <div className="section-description">Quantity</div>
    //     <InputFieldControl
    //       value={quantity}
    //       onChange={(val) =>
    //         handleDetailsChange("quantity", Number.parseInt(val))
    //       }
    //       fullWidth={true}
    //       maxLength={20}
    //       type="number"
    //       minValue={0}
    //       maxValue={10000000}
    //       align="right"
    //     />
    //   </div>
    // </div>
  );
};
export default ProductDetails;
