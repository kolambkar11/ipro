import React from "react";

const Map1 = () => {
  const iframeStyles = {
    width: "100%",
    height: "50vh", // Adjust the height as needed
    border: "none",
  };

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7794013478738!2d72.83740647509693!3d19.029439953432863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf4aba9dee81%3A0x6d9e0b67d856bee5!2sSwami%20Krupa%20Medical%20Store!5e0!3m2!1sen!2sin!4v1684310998771!5m2!1sen!2sin"
      allowfullscreen=""
      style={iframeStyles}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map1;
