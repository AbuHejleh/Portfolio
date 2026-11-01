import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { sectionWapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    console.log(name, value);
  };

  const validateForm = () => {
    if (!form.name) {
      toast.error("Name is required");
      return false;
    }

    if (!form.email) {
      toast.error("Email is required");
      return false;
    }

    if (!form.message) {
      toast.error("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop the function if validation fails
    }

    setLoading(true);

    // template_k0mjrbf
    // service_ttvzt0t
    //  R3DVCHBs_OsD3HZfQ
    emailjs
      .send(
        "service_ttvzt0t",
        "template_k0mjrbf",
        {
          from_name: form.name + ` <${form.email}>`,
          to_name: "Abdel Rahman",
          from_email: form.email,
          message: form.message,
        },
        "R3DVCHBs_OsD3HZfQ"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you for your message. I will respond as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-ink-100 border border-line p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col ">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="field"
            />
          </label>

          <label className="flex flex-col ">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="field"
            />
          </label>

          <label className="flex flex-col ">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted mb-2">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              className="field min-h-[120px]"
            />
          </label>
          <button
            type="submit"
            className="bg-acid text-ink py-3 px-8 w-fit font-mono uppercase tracking-[0.16em] text-[13px] rounded-full hover:scale-105 transition-transform"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default sectionWapper({ Component: Contact, idName: "contact" });
