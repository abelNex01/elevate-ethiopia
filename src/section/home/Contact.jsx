import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="flex px-24 justify-evenly py-24 text-[#1a1a1a]">
        <div className="flex flex-col justify-start items-start space-y-4 leading-relaxed">
          <h1 className="text-4xl font-semibold leading-normal">
            Get in <br /> touch with us
          </h1>
          <p className="text-sm w-lg leading-relaxed text-[#818181] font-light pt-2">
            At Elevate Ethiopia, we're proud partner with over 134 organization,
            earning there trust trhough experiance, personlized service, and
            inovative solutions.
          </p>
          <small className="text-[#818181]">Email</small>
          <h4 className="font-semibold text-xl">elevateethiopia@email.com</h4>
          <small className="text-[#818181]">Phone Number</small>
          <h4 className="font-semibold text-xl"> +251 9984 3874 36</h4>
          <small className="text-[#818181]">
            Available Monday to Friday, 9 AM - 6 PM GMT{" "}
          </small>
          <button className="px-8 py-2 w-[220px] mt-2 bg-[#1a1a1a] rounded-full text-white hover:bg-transparent hover:text-[#1a1a1a] border border-[#1A1A1A] transition-all duration-200 ease-in-out">
            Subscribe Now
          </button>
        </div>
        <div className="flex flex-col items-end space-y-6">
          <div className="space-y-2">
            <h4 className="font-medium">Name</h4>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-2 w-lg rounded-md border-[#818181] bg-transparent border placeholder:text-sm placeholder:font-light placeholder:text-[#818181]"
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex space-y-2 flex-col">
              <h4 className="font-medium">Email adress</h4>
              <input
                type="email"
                placeholder="We'll get back to you here"
                className="px-4 py-2 w-[250px] rounded-md border-[#818181] bg-transparent border placeholder:text-sm placeholder:font-light placeholder:text-[#818181]"
              />
            </div>
            <div className="flex space-y-2 flex-col">
              <h4 className="font-medium">Phone number</h4>
              <input
                type="number"
                placeholder="Enter phone number"
                className="px-4 py-2 w-[255px] rounded-md border-[#818181] bg-transparent border placeholder:text-sm placeholder:font-light placeholder:text-[#818181]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">How can we help you?</h4>
            <textarea
              name="note"
              id=""
              placeholder="Enter your message"
              className="border bg-transparent w-lg px-2 py-2 h-[120px] border-[#818181] rounded-md placeholder:text-sm placeholder:font-light placeholder:text-[#818181]"
            />
          </div>
          <button className="px-8 py-2 w-[220px] mt-2 bg-[#1a1a1a] rounded-full text-white hover:bg-transparent hover:text-[#1a1a1a] border border-[#1A1A1A] transition-all duration-200 ease-in-out">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
