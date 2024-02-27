import React from "react";
import Accordian from "./Accordian";

function FAQComponent() {
  const FaQ = [
    {
      question: "What is your process for website development?",
      answer: `<strong>Get to Know Each Other:</strong> In this initial stage, I prioritize building a strong foundation for our partnership. I believe effective collaboration begins with understanding your vision, goals, and expectations. Through open communication and active listening, I establish rapport and lay the groundwork for a productive working relationship.
        \n<strong>Understanding Your Field of Work:</strong> I invest time in comprehensively researching the industry or field in which your business operates. This step allows me to gain valuable insights into the challenges you face and the specific needs you aim to address with your website. By understanding your audience, competitors, and market trends, I tailor my approach to deliver a solution that resonates with your target audience and achieves your objectives.
      \n<strong>Creating a Function Specification:</strong> Whether collaboratively developed with you or submitted by you, I create a detailed function specification document. This document serves as a roadmap, outlining the functionalities and features your website will encompass. By clarifying requirements upfront, I ensure alignment and minimize misunderstandings throughout the development process.
      \n<strong>Creating a Design Specification:</strong> Similar to the function specification, I establish a design specification either through collaborative efforts or based on your provided guidelines. My design team translates your brand identity, aesthetic preferences, and user experience expectations into a visually appealing and user-friendly design concept. I prioritize aesthetics, usability, and brand consistency to create a compelling digital presence that resonates with your audience.
      \n<strong>Providing a Price Suggestion:</strong> Based on the agreed-upon specifications and scope of work, I offer a transparent and competitive pricing proposal. My pricing reflects the value I deliver and encompasses all the essential elements to bring your website vision to life. I aim for clarity and fairness in my pricing structure, ensuring no surprises along the way.
      \n<strong>Prototype Flow and Iterative Development:</strong> My development process adopts a prototype flow methodology, focusing on iterative refinement and validation. I incrementally build and refine website functionalities, seeking your feedback and approval at each stage. This iterative approach allows for flexibility, adaptability, and ensures that the final product meets your expectations. I prioritize transparency and collaboration, keeping you informed and involved throughout the development journey until the website reaches its full potential.
      \n<strong>By adhering to these structured steps</strong>, I strive to deliver a customized website solution that not only meets but exceeds your expectations, driving tangible results for your business. `,
    },
    {
      question:
        "What is included in your pricing and what additional costs should I anticipate?",
      answer: `<strong>Understanding Pricing and Additional Costs:</strong> In my pricing structure, I aim for transparency and clarity to ensure you understand what's included and any potential additional costs. Here's what you should know:
\n<strong>An agreed-upon website:</strong> Your project will include the development of a website tailored to your specifications and requirements. We'll work closely to ensure the final product aligns with your vision and goals.
\n<strong>Three-month free bug fixing:</strong> After the launch of your website, I provide a complimentary three-month period for bug fixing. Beyond this period, any further bug fixes will be charged at 50% of my hourly rate.
\n<strong>SEO for the website:</strong> Basic search engine optimization (SEO) is included to enhance the visibility and ranking of your website on search engines, helping to drive traffic and improve your online presence.
\n<strong>Access to my designers:</strong> You'll have access to my team of designers who can assist with various aspects of your project. While they have their own pricing, you'll receive complimentary access to their services to support your website development.
\n<strong>Anticipated additional costs:</strong> During the development process, you should anticipate potential costs related to design elements and images. These costs will be discussed and agreed upon upfront to ensure there are no surprises.
\n<strong>Discussion on ongoing maintenance:</strong> At the completion of the project, we'll have a discussion about ongoing maintenance. This typically involves at least three hours per month but can be adjusted based on your needs. Additionally, we can explore options for continued development beyond the initial project scope.
      `,
    },
    {
      question:
        "Can you provide examples of your past work or client testimonials?",
      answer: `<strong>Access to Previous Customers:</strong> Yes, you'll have access to any of my previous customers for either a call or messaging. This allows you to directly communicate with past clients, inquire about their experience working with me, and gain valuable insights into the quality of my work and level of satisfaction.
      \n<strong>This direct access ensures transparency </strong>and enables you to make an informed decision based on real feedback from those who have experienced my services firsthand.`,
    },
  ];
  return (
    <div className="bg-gray-200/70 rounded-2xl">
      {FaQ.map(({ question, answer }) => (
        <Accordian title={question} content={answer} />
      ))}
    </div>
  );
}

export default FAQComponent;
