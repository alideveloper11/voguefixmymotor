const pageContent = {
  about: {
    heading: "About Us",

    greenHeading: "Trusted Engine Specialists",

    paragraph: [
      "We provide professional engine diagnostics, repairs and maintenance services for all makes and models.",
      
      "From minor engine faults to major repairs, our certified technicians focus on quality workmanship, honest advice and long-term vehicle performance."
    ],

    bullets: [
      "Advanced engine diagnostics",
      "Certified repair technicians",
      "Quality parts and workmanship",
      "Affordable and transparent pricing"
    ]
  },



  services: {
    heading: "Our Services",

    greenHeading: "Complete Engine Repair Solutions",

    paragraph: [
      "Whether your vehicle has warning lights, overheating problems or reduced performance, we diagnose and fix issues efficiently.",

      "We offer preventative maintenance and full engine repair solutions to keep your car reliable and road ready."
    ],

    bullets: [
      "Engine diagnostics",
      "Timing belt replacement",
      "Cooling system repair",
      "Oil leak repairs",
      "Engine rebuild services"
    ]
  },


home_content_1: {
  heading: "Why Regular Engine Checkups Matter",
  greenHeading: "Prevent breakdowns before they happen",
  paragraph: [
    "Your engine is the heart of your vehicle. Regular inspections help detect issues early and improve long-term performance.",
    "Timely servicing ensures better fuel efficiency, smoother driving, and fewer unexpected repairs in the future."
  ],
  bullets: [
    "Early problem detection",
    "Improved fuel efficiency",
    "Extended engine life",
    "Cost-effective maintenance"
  ]
},

home_content_2: {
  heading: "Expert Engine Diagnostics Service",
  greenHeading: "Advanced tools for accurate results",
  paragraph: [
    "We use modern diagnostic equipment to quickly identify engine faults and performance issues with high accuracy.",
    "Our trained technicians ensure every problem is properly analyzed before recommending any repair solution."
  ],
  bullets: [
    "Computerized diagnostics",
    "Skilled technicians",
    "Accurate fault analysis",
    "Fast service turnaround"
  ]
},

home_content_3: {
  heading: "Reliable Engine Repair Solutions",
  greenHeading: "Quality repairs you can trust",
  paragraph: [
    "From minor fixes to major engine overhauls, we provide reliable repair services for all vehicle types.",
    "We focus on long-lasting solutions using high-quality parts and professional workmanship."
  ],
  bullets: [
    "Complete engine repair",
    "High-quality spare parts",
    "Experienced mechanics",
    "Long-term reliability"
  ]
},
home_content_4: {
  heading: "Emergency Engine Support",

  greenHeading: "We’re here when you need urgent help",

  paragraph: [
    "Engine trouble can happen anytime, often without warning. That’s why we provide quick-response support for urgent vehicle issues.",
    
    "Our team is ready to diagnose critical problems and get you back on the road as safely and quickly as possible."
  ],

  bullets: [
    "24/7 emergency assistance",
    "Fast roadside diagnosis",
    "Immediate repair solutions",
    "Safe vehicle recovery support"
  ]
}
};

export default pageContent;

export const getAboutContent = () => pageContent.about;

export const getServicesContent = () => pageContent.services;

export const getHomeContent_1 = () => pageContent.home_content_1;
export const getHomeContent_2 = () => pageContent.home_content_2;
export const getHomeContent_3 = () => pageContent.home_content_3;
export const getHomeContent_4 = () => pageContent.home_content_4;