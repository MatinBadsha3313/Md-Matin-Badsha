import { LuCopy, LuCopyCheck } from "react-icons/lu";

const ContactItem = ({ icon, text, copid, copidFunc }) => {
  return (
    <div className="flex items-center md:gap-5 sm:gap-4 gap-2">
      {icon}
      <h2 className="text-xl md:text-4xl font-semibold sm:font-bold">{text}</h2>
      {copid ? (
        <LuCopyCheck className="text-green-500" size={25} />
      ) : (
        <LuCopy size={25} onClick={copidFunc} className="cursor-pointer" />
      )}
    </div>
  );
};

export default ContactItem;
