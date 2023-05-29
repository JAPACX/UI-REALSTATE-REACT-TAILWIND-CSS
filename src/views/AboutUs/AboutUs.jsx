import React from "react";

const principalTitle = "text-5xl	mb-[50px] text-justify"

const secondaryTitle = "text-4xl mb-[20px]"

const text = "text-base leading-6 mb-[50px] text-justify"

const sizePage = "w-[85%] mt-[100px] mb-[100px]"

function AboutUs() {
  return (
    <div className={sizePage}>
      <h2 className={principalTitle}>About Us</h2>

      <section className="mb-16">
        <h3 className={secondaryTitle}>Our Story</h3>
        <p className={text}>
          At ProtAh, we have a passion for real estate and a commitment to helping our clients find their dream properties. Our journey began over a decade ago when our founders, John and Sarah, both experienced the challenges and complexities of buying and selling homes firsthand. They saw the need for a real estate agency that prioritizes the needs and aspirations of its clients.
        </p>
        <p className={text}>
          With a shared vision, John and Sarah set out to create ProtAh, a company that combines expertise, personalized service, and cutting-edge technology to revolutionize the real estate industry. Over the years, we have built a team of dedicated professionals who are driven by a genuine desire to make the process of buying, selling, and renting properties as seamless and rewarding as possible.
        </p>
      </section>

      <section className="mb-16">
        <h3 className={secondaryTitle}>Our Values</h3>
        <p className={text}>
          At ProtAh, we are guided by a set of core values that shape everything we do. Integrity is at the heart of our business, and we always prioritize transparency, honesty, and ethical practices. We believe in building long-term relationships with our clients based on trust and mutual respect.
        </p>
        <p className={text}>
          Innovation is another key value that drives us forward. We constantly embrace new technologies and industry trends to stay ahead of the curve and provide our clients with the best possible solutions. Our goal is to make the real estate experience efficient, convenient, and tailored to each individual's needs.
        </p>
      </section>

      <section>
        <h3 className={secondaryTitle}>Our Commitment</h3>
        <p className={text}>
          At ProtAh, we are committed to delivering exceptional service and exceeding our clients' expectations. We understand that buying or selling a property is a significant decision, and we go above and beyond to ensure that every step of the process is smooth and successful. Our team of experienced agents is dedicated to providing expert guidance, market insights, and personalized support to help our clients achieve their real estate goals.
        </p>
        <p className={text}>
          We invite you to join us on this journey. Whether you're a first-time buyer, a seasoned investor, or someone looking to sell or rent a property, ProtAh is here to assist you. Contact us today and experience the ProtAh difference.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
