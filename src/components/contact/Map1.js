import React from "react";

const Map1 = () => {
  const iframeStyles = {
    width: "100%",
    height: "50vh", // Adjust the height as needed
    border: "none",
  };

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3808.341348639229!2d76.8504794!3d17.3473001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7876d2de047%3A0xba7e58cdddb96a50!2siProtect%20Cybersecurity%20Services!5e0!3m2!1sen!2sin!4v1684750361163!5m2!1sen!2sin"
      allowFullScreen=""
      style={iframeStyles}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map1;
