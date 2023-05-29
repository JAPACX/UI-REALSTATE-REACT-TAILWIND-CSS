import React from "react";

const principalTitle = "text-5xl	mb-[50px] text-justify"

const secondaryTitle = "text-4xl mb-[20px]"

const text = "text-base leading-6 mb-[50px] text-justify"

const sizePage = "w-[85%] mt-[100px] mb-[100px]"




function SellAndRent() {
  return (
    <div className={sizePage}>
      <h2 className={principalTitle}>Sell and Rent Properties</h2>

      <section className="my-6">
        <h3 className={secondaryTitle}>List Your Property</h3>
        <p className={text}>
          Showcase your property to potential buyers and tenants. Our experienced team will help you create attractive listings and market your property effectively, maximizing your chances of a successful sale or rental.
        </p>
      </section>

      <section className="my-6">
        <h3 className={secondaryTitle}>Expert Assistance</h3>
        <p className={text}>
          Our real estate professionals are here to guide you through the selling or renting process. We provide expert advice, pricing strategies, and negotiation support to help you achieve the best possible outcomes and secure favorable deals.
        </p>
      </section>

      <section className="my-6">
        <h3 className={secondaryTitle}>Find Potential Buyers or Tenants</h3>
        <p className={text}>
          Let us connect you with potential buyers or tenants who are actively looking for properties like yours. Our extensive network and marketing strategies ensure that your property gets the exposure it deserves, reaching the right audience.
        </p>
      </section>
    </div>
  );
}

export default SellAndRent;
