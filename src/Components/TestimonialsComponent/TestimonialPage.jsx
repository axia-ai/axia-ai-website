import React from "react";
import Testimonial from "./Testimonial";
import testimonialImage1 from "../../assets/Testimonials/image8.png";
import testimonialImage2 from "../../assets/Testimonials/image4.png";
import testimonialImage3 from "../../assets/Testimonials/image2.png";
import testimonialImage4 from "../../assets/Testimonials/image7.jpg";
import testimonialImage5 from "../../assets/Testimonials/image5.png";
import testimonialImage6 from "../../assets/Testimonials/image1.png";
import testimonialImage7 from "../../assets/Testimonials/image6.png";
import testimonialImage8 from "../../assets/Testimonials/image3.png";

function TestimonialPage() {
  return (
    <>
      <Testimonial
        image={testimonialImage1}
        imagePosition={"left"}
        testimonialHeading={"AI for Waste Management"}
        serviceType={"AI Consulting and Development "}
        clientName={"Ecosense-Enviro"}
        industry={"Sustainability/ Climate Change"}
        testimonialPara={
          "To address our client's need for automated waste sorting in MRF facilities and dustbins, we developed a custom AI model and deployed it as a service."
        }
        clientQuote={
          "Axia's expert consultation on computer vision enabled us to successfully automate our waste sorting process."
        }
      />
      <Testimonial
        image={testimonialImage2}
        imagePosition={"right"}
        testimonialHeading={"Gen-AI Based iOS app"}
        serviceType={"AI Consulting and Development"}
        clientName={"Vivify"}
        industry={"Consumer Tech"}
        testimonialPara={
          "Vivify, a Gen-AI-powered mobile app designed for Japanese Gen Z users, aims to facilitate meaningful connections and foster real-life friendships. Leveraging astrology and AI-driven chat features, Vivify creates a personalized platform for users to connect and build deeper bonds."
        }
        clientQuote={
          "Axia successfully developed a Gen-AI powered mobile app for Japanese users. We're now collaborating on the next phase of this project."
        }
      />
      <Testimonial
        image={testimonialImage3}
        imagePosition={"left"}
        testimonialHeading={"AI-Based Automated Report Generation Tool "}
        serviceType={"AI Consulting and Development"}
        clientName={"Breakfree Consulting"}
        industry={"Business Advisory"}
        testimonialPara={
          "Axia partnered with Breakfree Consulting to streamline their operations through AI-powered automation. Our custom report generation tool significantly optimized their workflow, resulting in an 85% reduction in operational time. This enabled Breakfree to focus on their core consulting services, enhancing efficiency and client delivery."
        }
        clientQuote={
          "Axia, our trusted tech partner, successfully automated our workflows, resulting in an 85% reduction in operational time."
        }
      />
      <Testimonial
        image={testimonialImage4}
        imagePosition={"right"}
        testimonialHeading={"Tech Consulting and CRM Implementation"}
        serviceType={"IT Consulting"}
        clientName={"Leaf & Co"}
        industry={"Real Estate"}
        testimonialPara={
          "Leaf & Co. partnered with Axia to streamline their real estate operations through CRM implementation and automation. Our team provided on-demand support, optimized their processes, and delivered comprehensive training, enabling them to enhance sales efficiency and client management."
        }
        clientQuote={
          "Axia's team successfully implemented a CRM system and automated our sales pipeline, providing on-demand support and training our team on CRM usage. This streamlined our operations and improved overall efficiency."
        }
      />
      <Testimonial
        image={testimonialImage5}
        imagePosition={"left"}
        testimonialHeading={
          "Website for Online Supper Club bookings and E-Commerce Store to sell Vegan products."
        }
        serviceType={"Custom Web development"}
        clientName={"Soul With A Sole"}
        industry={"Consumer Products"}
        testimonialPara={
          "Soul with a Sole partnered with Axia to create a seamless online platform for their supper club bookings and a visually appealing eCommerce store for their vegan products. We provided comprehensive support, including knowledge transfer, ensuring they could effectively manage their new digital storefront. The collaboration was a rewarding experience for both parties."
        }
        clientQuote={
          "Axia successfully developed an online store for my supper club bookings and created a visually appealing ecommerce platform to sell my vegan products. Their knowledge transfer was invaluable, and I thoroughly enjoyed working with them."
        }
      />
      <Testimonial
        image={testimonialImage6}
        imagePosition={"right"}
        testimonialHeading={"Web Platform for Financial Services and Products"}
        serviceType={"Custom Software development"}
        clientName={"Fintm Solutions"}
        industry={"Finance"}
        testimonialPara={
          "Fintm Solutions partnered with Axia to redesign and redevelop their fintech platform. Our team delivered a sophisticated, elegant design that enhanced the platform's aesthetics and functionality, catering to the specific needs of financial services and product companies."
        }
        clientQuote={
          "Axia's skilled tech team redesigned and redeveloped our fintech platform, creating a visually stunning and user-friendly interface."
        }
      />
      <Testimonial
        image={testimonialImage7}
        imagePosition={"left"}
        testimonialHeading={"Website for Interior Design Company"}
        serviceType={"Custom Web development"}
        clientName={"Independent Marketing Consultant"}
        industry={"Marketing"}
        testimonialPara={
          "Kiran Bhatani, an independent marketing consultant, partnered with Axia to revamp her interior design client's website. Our tech team's expertise ensured a seamless project execution, resulting in a polished, modern website that perfectly aligns with the client's aesthetic vision."
        }
        clientQuote={
          "Axia's tech team provided exceptional support in revamping my client's website, delivering a professional and effective result."
        }
      />
      <Testimonial
        image={testimonialImage8}
        imagePosition={"right"}
        testimonialHeading={"Data Analytics for SEO Agency"}
        serviceType={"Data Analytics and IT consulting"}
        clientName={"Xcelerate.digital"}
        industry={"SEO And Marketing"}
        testimonialPara={
          "Xcelerate.digital partnered with Axia to develop a comprehensive SEO data analytics dashboard specifically designed for their client's needs.  Axia's expert team also provided ongoing support for Xcelerate.digital's own website development and offered tech consulting services. This collaboration empowered Xcelerate.digital to deliver data-driven insights to their clients while strengthening their internal digital expertise."
        }
        clientQuote={
          "Axia's expert team developed a customized SEO data analytics dashboard and provided comprehensive support for our website development and tech consulting needs."
        }
      />
    </>
  );
}

export default TestimonialPage;
