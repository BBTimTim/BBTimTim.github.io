import React, { useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiArrowUp } from "react-icons/hi";

export default function Contact() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Sikeres üzenet küldés!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Hiba történt, kérlek próbáld meg újra!",
      });
    }
  };

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="contact">
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="contactWrapper"
      >
        <motion.div variants={variants} className="textContainer">
          <motion.h1 variants={variants}>Elérhetőségeim:</motion.h1>
          <motion.div variants={variants} className="items">
            <h2>Email</h2>
            <span>birta.b.timea@gmail.com</span>
          </motion.div>
          <motion.div variants={variants} className="items">
            <h2>Telefonszám: </h2>
            <span> 06 70 648 6749</span>
          </motion.div>
        </motion.div>
        <motion.div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ff91de"
              strokeWidth={0.5}
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isInView ? 1 : 0 }}
                  transition={{ duration: 2 }}
                  d="M49 15a24 24 0 0 1 0 34"
                ></motion.path>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isInView ? 1 : 0 }}
                  transition={{ duration: 2 }}
                  d="M42 22a14.15 14.15 0 0 1 0 20"
                ></motion.path>
                <rect x="8" y="8" width="28" height="48" rx="4"></rect>
                <line x1="18" y1="12" x2="26" y2="12"></line>
                <line x1="20" y1="52" x2="24" y2="52"></line>
              </g>
            </svg>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
                  {formStatus.submitting && (
              <div className="sending-text">küldés...</div>
            )}

            {formStatus.message && (
              <motion.div
                className={`form-status ${formStatus.success ? "success" : "error"}`}
              >
                {formStatus.message}
              </motion.div>
            )}
            <label htmlFor="name">Név</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Név"
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              onChange={handleInputChange}
            />
            <label htmlFor="message">Üzenet</label>
            <textarea
              name="message"
              rows={8}
              placeholder="Üzenet"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="sendBtn"
              disabled={formStatus.submitting}
            >
              Küldés
            </button>
          </motion.form>
        </motion.div>
        <div className="upCont">
          <a href="#homepage">
            <HiArrowUp size={40} color="#fecced" />{" "}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
