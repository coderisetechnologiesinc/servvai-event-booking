import moment from "moment";
import { useState, useEffect } from "react";
import BlockStack from "../Containers/BlockStack";
import PageWrapper from "./PageWrapper";
import { useLocation } from "react-router-dom";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/16/solid";
import { useServvStore } from "../../store/useServvStore";
const SupportPage = () => {
  const settings = useServvStore((s) => s.settings);
  const [intercomLaded, setIntercomLoaded] = useState(false);
  const FAQs = [
    {
      title: "How do I create my first event?",
      url: "https://support.servv.ai/pages/getting-started/events/events/#create-an-event",
    },
    {
      title: "Can I customise the booking form fields?",
      url: "https://support.servv.ai/pages/getting-started/bookings/viewbookings/#table-customization",
    },
    {
      title: "How do I set booking limits or max capacity?",
      url: "https://support.servv.ai/pages/getting-started/events/ticket/",
    },
    {
      title: "How do I configure event categories or tags?",
      url: "https://support.servv.ai/pages/getting-started/filters/filters/#category-filter",
    },
    {
      title: "This is an example question with external link?",
      url: "https://support.servv.ai/pages/getting-started/filters/memberfilter/#related-links",
    },
  ];

  const [mainLinks, setMetaLinks] = useState([
    {
      title: "Documentation",
      description: "Step-by-step guides & API docs",
      url: "https://support.servv.ai",
    },

    {
      title: "Submit ticket",
      description: "One-to-one help",
      url: "https://servv.ai/contact/",
    },
    {
      title: "Feature request",
      description: "Have an idea for us?",
      url: "https://servv.ai/contact/",
    },
  ]);

  useEffect(() => {
    if (settings?.current_plan?.id && !settings?.is_wp_marketplace)
      setMetaLinks([
        {
          title: "Documentation",
          description: "Step-by-step guides & API docs",
          url: "https://support.servv.ai",
        },
        {
          title: "Support forum",
          description: "Real-time answers from power users",
          url: "https://wordpress.org/support/plugin/servvai-event-booking",
        },
        {
          title: "Submit ticket",
          description: "One-to-one help",
          url: "https://servv.ai/contact/",
        },
        {
          title: "Raise a bug",
          description: "Log an issue on GitHub",
          url: "https://github.com/coderisetechnologiesinc/servvai-event-booking/issues",
        },
        {
          title: "Feature request",
          description: "Have an idea for us?",
          url: "https://servv.ai/contact/",
        },
      ]);
  }, [settings]);

  const additionalLinks = [
    {
      title: "Changelog",
      description: "View the latest updates and changes to our platform",
      url: "https://support.servv.ai/changelogs/changelog/",
    },
    {
      title: "Releases",
      description: "See what's coming next and upcoming features",
      url: "https://github.com/coderisetechnologiesinc/servvai-event-booking/releases",
    },
  ];

  const versionInfo = {
    Version: "2.1.4",
    Build: "2024.01.15",
    Environment: "Production",
    "Last Updated": "2025-08-13T12:34:56Z",
  };
  const renderFAQ = () => {
    return (
      <div className="flex flex-col border border-gray-200 rounded-lg p-3xl mt-4xl">
        {FAQs.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === FAQs.length - 1;

          return (
            <div
              key={index}
              className={`flex flex-row justify-between items-baseline 
              ${!isFirst ? "pt-2xl" : ""} 
              ${!isLast ? "border-b border-gray-200 pb-2xl" : ""}`}
            >
              <a
                href={item.url}
                className="text-brand-600 no-underline font-[500] text-[1rem]"
              >
                {item.title}
              </a>
              <ArrowTopRightOnSquareIcon className="w-[18px] fill-gray-400" />
            </div>
          );
        })}
      </div>
    );
  };

  const renderVersionInfo = () => {
    const info = Object.keys(versionInfo);
    const currentTime = moment();
    const last_updated = versionInfo["Last Updated"];
    const lastUpdatedMoment = moment.utc(last_updated);
    const diff = moment.duration(currentTime.diff(lastUpdatedMoment));

    let parts = [];
    if (diff.months()) parts.push(`${diff.months()} months`);
    if (diff.days()) parts.push(`${diff.days()} days`);
    if (diff.hours()) parts.push(`${diff.hours()} hours`);
    if (diff.minutes()) parts.push(`${diff.minutes()} minutes`);

    const diffString = parts.join(", ");
    return (
      <div className="flex flex-col border border-gray-200 rounded-lg p-3xl mt-4xl">
        <div className="flex flex-col mb-3xl gap-2">
          <div className="flex flex-row gap-2">
            <InformationCircleIcon className="fill-[#717182] w-[0.875rem]" />
            <span className="text-[#0A0A0A] font-[500] text-md">
              System Information
            </span>
          </div>
          <span className="text-[#717182] font-[400] text-sm">
            Current version and build details
          </span>
        </div>

        {info.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === info.length - 1;

          return (
            <div
              key={index}
              className={`flex flex-row justify-between items-baseline 
              ${!isFirst ? "pt-2xl" : ""} 
              ${!isLast ? "border-b border-gray-200 pb-2xl" : ""}`}
            >
              <p className="text-[#0A0A0A] font-[500] text-sm">{item}</p>
              <p className="text-[#717182] font-[400] text-sm">
                {item !== "Last Updated" ? versionInfo[item] : diffString}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const renderLinks = (links, layout) => {
    return (
      <div
        className={`mt-16 gap-4 max-md:flex-col max-md:justify-start max-md:flex-nowrap 
        ${
          layout === 3
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {links.map((link, index) => (
          <div
            key={index}
            className="border rounded-xl border-gray-200 shadow-lg p-[1.5rem] flex flex-col"
          >
            <BlockStack gap={8}>
              <button
                onClick={() => window.open(link.url, "_blank")}
                className="inline-flex w-fit rounded-[0.625rem] border border-gray-300 bg-white shadow-sm p-[14px]"
              >
                <ArrowTopRightOnSquareIcon className="w-[20px] fill-gray-700" />
              </button>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 text-display-sm">{link.title}</h2>
                <p className="text-[0.75rem] font-regular">
                  {link.description}
                </p>
              </div>
            </BlockStack>
          </div>
        ))}
      </div>
    );
  };

  const handleIntercomClick = () => {
    // Avoid injecting multiple times
    if (window.IntercomInjected) return;
    window.IntercomInjected = true;

    // Set Intercom settings
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "peztdh9y",
      custom_launcher_selector: "#servv_live_chat",
    };

    // Inject main Intercom loader script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function () { 
        var w = window; 
        var ic = w.Intercom; 
        if (typeof ic === "function") { 
          ic('reattach_activator'); 
          ic('update', w.intercomSettings); 
        } else { 
          var d = document; 
          var i = function () { i.c(arguments); }; 
          i.q = []; 
          i.c = function (args) { i.q.push(args); }; 
          w.Intercom = i; 
          var l = function () { 
            var s = d.createElement('script'); 
            s.type = 'text/javascript'; 
            s.async = true; 
            s.src = 'https://widget.intercom.io/widget/peztdh9y'; 
            var x = d.getElementsByTagName('script')[0]; 
            x.parentNode.insertBefore(s, x); 
          }; 
          if (document.readyState === 'complete') { 
            l(); 
          } else if (w.attachEvent) { 
            w.attachEvent('onload', l); 
          } else { 
            w.addEventListener('load', l, false); 
          } 
        } 
      })();
    `;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Intercom) {
        window.Intercom("boot");
      }
    };
    setIntercomLoaded(true);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/support") return;

    handleIntercomClick();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/support") {
      handleIntercomClick();
    } else if (window.Intercom) {
      window.Intercom("shutdown");
      window.IntercomInjected = false;
    }
  }, [location.pathname]);

  return (
    <PageWrapper loading={false} withBackground={true}>
      <div className="dashboard-card">
        <BlockStack gap={4}>
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-gray-900 text-display-sm">Help & Support</h2>
            <p className="text-regular text-[#475467] text-md text-center">
              Get help, find resources, and connect with our support team to
              resolve any issues quickly.
            </p>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <a
              href="mailto:support@servv.ai"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="rounded-[0.625rem] border no-underline border-gray-300 bg-white shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
            >
              <EnvelopeIcon className="w-[20px] fill-gray-700" />
              <span className="text-sm text-gray-700 font-semibold">
                Email Us
              </span>
            </a>

            {intercomLaded && (
              <button
                id="servv_live_chat"
                className="rounded-[0.625rem] border border-white bg-brand-600 shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
                // onClick={handleIntercomClick}
              >
                <ChatBubbleLeftRightIcon className="w-[20px] fill-white" />
                <span className="text-sm text-white font-semibold">
                  Live Chat
                </span>
              </button>
            )}
          </div>
        </BlockStack>

        {renderLinks(mainLinks, 3)}

        <h2 className="text-gray-900 text-display-sm mt-16">
          Frequently Asked Questions
        </h2>

        {renderFAQ()}

        {settings?.current_plan?.id &&
          !settings?.is_wp_marketplace &&
          renderLinks(additionalLinks)}
        <p className="text-regular text-sm text-gray-[#0A0A0A] mt-4xl">
          Version Information : 1.0
        </p>
        {/* {renderVersionInfo()} */}
      </div>
    </PageWrapper>
  );
};

export default SupportPage;
