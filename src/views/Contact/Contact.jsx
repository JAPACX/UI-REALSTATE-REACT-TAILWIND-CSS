import React from "react";

const principalTitle = "text-5xl	mb-[50px] text-justify"

const secondaryTitle = "text-4xl mb-[20px]"

const text = "text-base leading-6 mb-[50px] text-justify"

const sizePage = "w-[85%] mt-[100px] mb-[100px]"

function Contact() {
  return (
    <div className={sizePage}>
      <h2 className={principalTitle}>Contact Us</h2>

      <section className="mb-16">
        <h3 className={secondaryTitle}>Get in Touch</h3>
        <p className={text}>
          We would love to hear from you! If you have any questions, inquiries, or would like to discuss a potential collaboration, please feel free to reach out to us using the contact details below:
        </p>
      </section>

      <section className="mb-16">
        <h3 className={secondaryTitle}>Contact Information</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-bold">Phone:</span> +1 123-456-7890
          </li>
          <li className="mb-2">
            <span className="font-bold">Email:</span> info@protah.com
          </li>
          <li>
            <span className="font-bold">Address:</span> 123 Main St, Barranquilla, Atlantico, Colombia
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
