import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = {
    access_key: "0f646fa0-de05-4f6d-a768-a8403b7684f7", // 👈 Replace this
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="flex h-max pt-40 px-5 justify-center bg-background text-text" id="contact">
      <div className="p-5 h-max max-w-7xl flex flex-col gap-5 w-full px-4 sm:px-8 lg:px-16">
        <p className="text-4xl sm:text-5xl font-semibold mb-4 text-left">
          Let's Connect!
        </p>

        <p className="text-xl sm:text-2xl lg:text-3xl text-subtext font-light leading-relaxed">
          Like what you see? <br className="hidden sm:block" /> Feel free to
          reach out for a chat!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-background border border-subtext focus:border-text focus:outline-none"
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-background border border-subtext focus:border-text focus:outline-none"
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="p-3 rounded-lg bg-background border border-subtext focus:border-text focus:outline-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-3 text-background lg:text-text bg-text lg:bg-background font-medium border border-text text-xl rounded-full w-max px-6 py-3 lg:hover:scale-105 lg:hover:text-background hover:bg-text transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          
          {submitStatus === "success" && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;