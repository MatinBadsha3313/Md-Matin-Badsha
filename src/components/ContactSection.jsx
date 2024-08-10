import { MdOutlineMail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { useState } from "react";
import ContactItem from "./ContactItem";
const ContactSection = () => {
  const [copidEmail, setCopidEmail] = useState(false);
  const [copidMobile, setCopidMobile] = useState(false);

  const copyToClipboard = async (text, setCopidFunc) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopidFunc(true);
      setTimeout(() => {
        setCopidFunc(false);
      }, 5000);
    } catch (err) {
      console.error(" Could not copy text: ", err);
    }
  };
  const copyToEmail = () => {
    copyToClipboard("mdmatinbadsha786@gmail.com", setCopidEmail);
  };
  const copyToMobile = () => {
    copyToClipboard("+91 9749283770", setCopidMobile);
  };
  return (
    <section
      className="w-full px-6 py-8 md:py-20 2xl:py-24 bg-slate-950 text-white"
      id="contact"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            CONTACT <span className="text-orange-500">ME</span>
          </h2>
          <p className="text-lg text-center md:text-xl max-w-xl text-gray-400">
            "Planning your next move? Whether you need a skilled web developer,
            have questions, or simply want to connect, I'm here to help. Don't
            hesitate to reach out!"
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center md:gap-4">
          <ContactItem
            icon={<MdOutlineMail size={25} />}
            text="mdmatinbadsha786@gmail"
            copid={copidEmail}
            copidFunc={copyToEmail}
          />
          <ContactItem
            icon={<SlPhone size={25} />}
            text="+91 9749283770"
            copid={copidMobile}
            copidFunc={copyToMobile}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
