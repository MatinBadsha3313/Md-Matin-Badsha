function WhiteButton({ link, text, onClick }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="border-2 px-4 py-2 rounded-full border-black bg-gray-200 text-black hover:bg-transparent hover:text-white hover:border-gray-300 transition-all duration-200 ease-linear"
      >
        {text}
      </button>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 px-4 py-2 rounded-full border-black bg-gray-200 text-black hover:bg-transparent hover:text-white hover:border-gray-300 transition-all duration-200 ease-linear"
    >
      {text}
    </a>
  );
}

export default WhiteButton;
