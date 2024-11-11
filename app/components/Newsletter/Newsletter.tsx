"use client";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    messagetext: "",
  });
  const [status, setStatus] = useState(""); // This will store the status message

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus(""); // Reset any previous status message before sending the request

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!"); // Success message
        setFormData({ fullname: "", email: "", messagetext: "" }); // Clear form fields
      } else {
        setStatus("Something went wrong. Please try again."); // Error message from the response or default
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message. Please try again later."); // General error message
    }
  };

  return (
    <div className="relative" id="contact">
      <div className="mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 rounded-lg">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-7">
            <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h3 className="text-lg font-normal text-white mb-3 ls-51">
                  Contact us
                </h3>
              </Fade>
              <Fade
                direction={"up"}
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                  You are one <br /> step away.
                </h3>
              </Fade>

              <div>
                <Fade
                  direction={"up"}
                  delay={1200}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <form
                    onSubmit={handleSubmit}
                    className=" text-white focus-within:text-white flex flex-col gap-5 justify-center  rounded-full"
                  >
                    <input
                      type="text"
                      name="fullname"
                      className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                      placeholder="enter your full name"
                      autoComplete="off"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                      placeholder="@ enter your email-address"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <textarea
                      name="messagetext"
                      value={formData.messagetext}
                      onChange={handleChange}
                      className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                      placeholder="write us a message"
                    />
                    <div className="flex justify-center mt-4">
                      <button
                        className="bg-black text-white px-8 py-4 rounded-full focus:outline-none 
             hover:bg-gray-800 hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>

              {/* Status message (Success or Error) */}
              {status && (
                <div
                  className={`mt-4 text-center text-lg font-semibold bg-white p-4 rounded-full ${
                    status.includes("success") ? "text-pink" : "text-pink3"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="col-span-5 relative hidden md:block">
            <div>
              <Image
                src={"/images/Newsletter/notebookmain.png"}
                alt="soup-image"
                width={326}
                height={602}
                className="-mt-24"
              />
            </div>
            <div className="absolute top-[78%]">
              <Image
                src={"/images/Newsletter/notebook.png"}
                alt="onion-image"
                width={200}
                height={122}
              />
            </div>
            <div className="absolute top-[40%] right-[6%] hidden lg:block">
              <Image
                src={"/images/Newsletter/sharpner.png"}
                alt="lettuce-image"
                width={100}
                height={122}
              />
            </div>
            <div className="absolute bottom-[10%] left-[-15%]">
              <Image
                src={"/images/Newsletter/yellow.svg"}
                alt="yellow-image"
                width={59}
                height={59}
              />
            </div>
            <div className="absolute bottom-[20%] right-[20%]">
              <Image
                src={"/images/Newsletter/blue.svg"}
                alt="blue-image"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
