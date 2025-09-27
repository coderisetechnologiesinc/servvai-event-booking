import PageWrapper from "./PageWrapper";
import BlockStack from "../Containers/BlockStack";
import PageHeader from "../Containers/PageHeader";
import PageActionButton from "../Controls/PageActionButton";
import { PlusIcon } from "@heroicons/react/16/solid";
const Guideline = ({ showGuide = () => {}, redirect = () => {} }) => {
  const guidelineItems = [
    {
      id: 1,
      title: "Attend an onboarding session over Zoom",
      description:
        "Join our success team to get started with Servv AI. We'll walk you through how to set up your account, create events, and share insider tips to maximize engagement and bookings.",
      link: "https://servv.ai/grow-your-business-with-servv-ai/",
      linkText: "Schedule",
    },
    {
      id: 2,
      title: "Watch a product demo",
      description:
        "See Servv AI in action. Our demo walks you through event setup, calendar management, and adding widgets to your website for seamless customer bookings.",
      link: "https://demo.servv.app/",
      linkText: "Watch Demo",
    },
    {
      id: 3,
      title: "Launch your first event",
      description:
        "Create and publish your first event in minutes. Choose event type, add descriptions, set availability, and start accepting bookings from your customers.",
      link: "post-new.php?servv_plugin=true",
      linkText: "Create Event",
    },
    {
      id: 4,
      title: "Set up filters",
      description:
        "Organize your events by creating custom filters such as location, language, and category. Help your visitors easily browse and find events that match their interests.",
      link: "Create Filter",
      linkText: "Create Filters",
    },
    {
      id: 5,
      title: "Add Servv AI widget to your site",
      description:
        "Easily embed the Servv AI event booking widget on any WordPress post or page using shortcode. Showcase events directly on your website and boost engagement.",
      link: "https://support.servv.ai/getting-started/setting/widget/",
      linkText: "Add Widget",
    },
  ];
  const renderGuidelines = () => {
    return (
      <div className=" flex flex-col w-full gap-8 mt-4">
        {guidelineItems.map((item) => {
          return (
            <div className="grid grid-cols-[7%_auto_10%] w-full gap-4 items-center p-8 rounded-lg shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-500 text-white text-xl font-regular">
                {item.id}
              </div>
              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-gray-700">
                  {item.title}
                </h4>
                <p className="text-md font-regular text-gray-500">
                  {item.description}
                </p>
              </div>
              <button
                className="bg-white text-brand-700 border border-brand-300 hover:bg-brand-50 focus:ring-2 focus:ring-gray-200 text-md px-4 py-2 rounded-lg transition-colors duration-200 shrink-0"
                onClick={() =>
                  item.id !== 4
                    ? open(item.link, "_blank")
                    : redirect("filters")
                }
              >
                {item.linkText}
              </button>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <PageWrapper>
      <BlockStack gap={4}>
        <PageHeader>
          <BlockStack gap={4}>
            <h1 className="text-display-sm mt-6">Getting started</h1>
            <p className="page-header-description">
              {/* {t("Review and manage all your event bookings here.")} */}
              Easily launch your first event in minutes
            </p>
          </BlockStack>
          <div className="flex gap-3">
            <PageActionButton
              text="Create new event"
              type="primary"
              icon={<PlusIcon className="w-5 h-5 mr-2" />}
              onAction={() => open("post-new.php?servv_plugin=true", "_top")}
            />
          </div>
        </PageHeader>
      </BlockStack>
      {renderGuidelines()}
    </PageWrapper>
  );
};
export default Guideline;
