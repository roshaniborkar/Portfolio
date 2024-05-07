import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const userId = import.meta.env.VITE_REACT_APP_USER_ID;
  const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.subject === "" ||
      formValues.message === ""
    ) {
      toast('Please fill all the fields', {
        icon: '⚠️',
      });
      return;
    }

    emailjs.init(userId);

    toast.promise(emailjs.send(serviceId, templateId, formValues), {
      loading: "Sending message...",
      success: (response) => {
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        return "Message sent successfully!";
      },
      error: (error) => {
        return "Message sending failed!";
      },
    });
  };

  return (
    <div>
      <br />
      <section id="contact" className="my-16">
        <div className="pt-32 pb-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="text-3xl font-extrabold text-white mb-4 text-center">
            <span className="bg-black">Contact Us</span>
          </h2>
          <p className="text-gray-300 font-semibold md:text-lg lg:text-xl text-center mb-8">
            <span className="bg-black">
              Want to get in touch with me? Let me know.
            </span>
          </p>
          <form className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 font-semibold block focus:ring-2 w-full p-2.5"
                placeholder="first middle last"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                autoComplete="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-red-500 focus:border-red-500 font-semibold block w-full focus:ring-2 p-2.5"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:ring-2 focus:border-red-500 font-semibold"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows="6"
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 font-semibold"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Toaster position="top-center" />
    </div>
  );
};

export default Contact;
