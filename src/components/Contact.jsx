import React from "react";
import styles, { layout } from "../style";

const Contact = () => {
  return (
    <section id="Contact" className={`${layout.section} flex-col`}>
      {/* Heading */}
      <div className="w-full flex flex-col justify-start items-start sm:mb-10 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Let’s try our service <br className="sm:block hidden" /> now!
        </h2>
        <div className="w-full mt-4">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Have questions or need assistance? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className={`${styles.flexCenter} w-full`}>
        <form className="bg-black-gradient-2 p-10 rounded-[20px] box-shadow w-full max-w-[800px]">
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Name Field */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-primary text-white border border-dimWhite rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-secondary"
                type="text"
                placeholder="John Doe"
              />
            </div>
            {/* Email Field */}
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-primary text-white border border-dimWhite rounded py-3 px-4 leading-tight focus:outline-none focus:border-secondary"
                type="email"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="w-full mb-6">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              Your Message
            </label>
            <textarea
              className="appearance-none block w-full bg-primary text-white border border-dimWhite rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-secondary h-32 resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="py-4 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;