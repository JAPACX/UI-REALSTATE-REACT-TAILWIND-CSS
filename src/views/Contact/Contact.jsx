import React from "react";

function Contact() {
  return (
    <div className="max-w-800px mx-auto p-20">
      <h2 className="text-2xl font-bold mb-10">Contact Us</h2>

      <section className="mb-16">
        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
        <p className="text-base leading-6 mb-10">
          We would love to hear from you! If you have any questions, inquiries, or would like to discuss a potential collaboration, please feel free to reach out to us using the contact details below:
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
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
