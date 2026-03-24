import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://hdglobalgroup.us/#organization",
      name: "HD Global Group",
      url: "https://hdglobalgroup.us",
      logo: "https://hdglobalgroup.us/logo.png",
      description:
        "Expert underground construction company specializing in HDD drilling, fiber optic installation, project management, and underground utility support across the United States.",
      telephone: "+1 (936) 718-0696",
      email: "info@hdglobalgroup.us",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 39.8283,
          longitude: -98.5795,
        },
        geoRadius: "3000 km",
      },
      sameAs: [
        "https://www.linkedin.com/company/hdglobalgroup",
        "https://www.instagram.com/hdglobalgroup",
      ],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
      },
      foundingDate: "2010",
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      name: "HD Global Group",
      url: "https://hdglobalgroup.us",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://hdglobalgroup.us/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hdglobalgroup.us/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://hdglobalgroup.us/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: "https://hdglobalgroup.us/#about",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: "https://hdglobalgroup.us/#contact",
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Horizontal Directional Drilling",
      provider: { "@id": "https://hdglobalgroup.us/#organization" },
      description:
        "Efficient and precise HDD solutions for underground utility installation with minimal surface disruption and maximum field performance.",
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HDD Drilling Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Horizontal Directional Drilling",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      serviceType: "Fiber Optic Installation",
      provider: { "@id": "https://hdglobalgroup.us/#organization" },
      description:
        "Underground fiber optic conduit placement and infrastructure support with strong production standards and dependable field coordination.",
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fiber Optic Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fiber Optic Installation",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      serviceType: "Project Management & Field Supervision",
      provider: { "@id": "https://hdglobalgroup.us/#organization" },
      description:
        "Full project support through planning, coordination, daily oversight, and field execution for underground construction projects.",
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Project Management Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Management & Field Supervision",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      serviceType: "Underground Utility Support",
      provider: { "@id": "https://hdglobalgroup.us/#organization" },
      description:
        "Underground utility-related operations with experienced crews, field awareness, and execution under real jobsite conditions.",
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Underground Utility Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Underground Utility Support",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Horizontal Directional Drilling (HDD)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HDD is a trenchless method of installing underground utilities like pipes and cables with minimal surface disruption. It\u2019s ideal for crossing roads, rivers, and sensitive areas without open-cut excavation. This technique preserves existing landscapes and infrastructure while allowing precise placement of conduits, pipelines, and fiber optic cables beneath the surface.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does HD Global Group serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HD Global Group provides underground construction services across the United States, with active operations in over 12 states. Our mobile crews and equipment fleet allow us to deploy to projects nationwide.",
          },
        },
        {
          "@type": "Question",
          name: "What types of projects does HD Global Group handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in HDD drilling, fiber optic installation, underground utility support, and full project management for infrastructure and telecom contractors.",
          },
        },
        {
          "@type": "Question",
          name: "How can I request a quote from HD Global Group?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can request a free quote by filling out the contact form on our website or calling us directly. We typically respond within 24 business hours.",
          },
        },
        {
          "@type": "Question",
          name: "Is HD Global Group licensed and insured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HD Global Group is fully licensed, bonded, and insured to perform underground construction services across the United States. We maintain comprehensive general liability and workers\u2019 compensation coverage.",
          },
        },
        {
          "@type": "Question",
          name: "What safety standards does HD Global Group follow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safety is our top priority. We follow all OSHA regulations, maintain a rigorous safety training program for every crew member, and conduct daily safety briefings before operations begin.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <OurProcess />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
