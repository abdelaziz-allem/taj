"use client";

const Location = () => {
  return (
    <div className="bg-lightpink" id="about-section">
      <div className="mx-auto    ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.3901541052787!2d44.03846117502558!3d9.561596090522539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf24841a8577%3A0xf1f57e744493bb9a!2sTaj%20International%20School!5e0!3m2!1sen!2sus!4v1731144375674!5m2!1sen!2sus"
          width="100%"
          height="600"
          className="border-0 w-full"
          allowFullScreen
          loading="lazy"
          title="Taj School Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
