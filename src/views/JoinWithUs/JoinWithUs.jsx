import React from "react";

const principalTitle = "text-5xl	mb-[50px] text-justify"

const secondaryTitle = "text-4xl mb-[20px]"

const text = "text-base leading-6 mb-[50px] text-justify"

const sizePage = "w-[85%] mt-[100px] mb-[100px]"


function JoinWithUs() {
  return (
    <div className={sizePage}>
      <h2 className={principalTitle}>Join With Us</h2>

      <section className="mb-16">
        <h3 className={secondaryTitle}>Explore Opportunities</h3>
        <p className={text}>
          Discover exciting career opportunities in the real estate industry. Whether you're a seasoned professional or just starting your career, we offer a supportive and dynamic work environment that fosters growth and success.
        </p>
      </section>

      <section className="mb-16">
        <h3 className={secondaryTitle}>Work with a Great Team</h3>
        <p className={text}>
          Join our team of experienced real estate professionals who are passionate about delivering exceptional service to our clients. Collaborate with like-minded individuals and contribute to the success of our company.
        </p>
      </section>

      <section>
        <h3 className={secondaryTitle}>Contact Us</h3>
        <p className={text}>
          If you're interested in working with us or have any questions, please fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="mb-8 p-10 bg-slate-200 rounded-xl">
          <div className="flex flex-col mb-4">
            <input className="mb-2" type="text" placeholder="Name" />
            <input className="mb-2" type="email" placeholder="Email" />
            <input className="mb-2 h-[100px]" type="email" placeholder="Mensaje" /> 
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Submit</button>
        </form>

      </section>
    </div>
  );
}

export default JoinWithUs;
