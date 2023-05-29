import React from "react";

const principalTitle = "text-5xl	mb-[50px] text-justify"

const secondaryTitle = "text-4xl mb-[20px]"

const text = "text-base leading-6 mb-[50px] text-justify"

const sizePage = "w-[85%] mt-[100px] mb-[100px]"

function Buy() {
  return (
    <div className={sizePage} >
      <h2 className={principalTitle}>Buy Properties</h2>

      <section>
        <h3 className={secondaryTitle}>Explore Options</h3>
        <p className={text}>
          Discover a wide range of properties available for purchase. Whether
          you're looking for a house, an apartment, or land, we have options
          that fit your needs and preferences.
        </p>
      </section>
      
      <section>
      <h3 className={secondaryTitle}>Expert Guidance</h3>
        <p className={text}>
          Our team of experienced real estate agents is here to assist you in
          finding your dream property. We provide expert guidance throughout the
          buying process, ensuring you make informed decisions and navigate
          smoothly from search to closing.
        </p>
      </section>

      <section>
      <h3 className={secondaryTitle}>Start Your Journey</h3>
        <p className={text}>
          Begin your journey to homeownership with ProtAh today. Contact us to
          schedule a consultation and let us help you find the perfect property
          that meets your requirements and aspirations.
        </p>
      </section>
    </div>
  );
}

export default Buy;
