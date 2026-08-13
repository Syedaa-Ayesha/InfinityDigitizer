const ServiceRibbon = () => {
  const ribbons = [
    "Vector Tracing",
    "Applique Embroidery Digitizing",
    "3D Puff Embroidery",
    "Photo Digitizing",
    "Logo Designing",
    "Embroidered Patches",
    "Shirt Embroidery Digitizing",
    "Custom Hat Embroidery",
    "Applique Embroidery Digitizing",
    "Chenille Digitizing",
  ];

  return (
    <div className="w-full overflow-hidden border py-2 text-white uppercase bg-[#3F4D5E] text-[20px]">
      <div className="flex w-max animate-[ribbon_40s_linear_infinite]">
        {/* First Set */}
        {ribbons.map((service, index) => (
          <div
            key={index}
            className="mx-3 whitespace-nowrap rounded-md px-8 py-2 font-semibold"
          >
            {service}
          </div>
        ))}

        {/* Duplicate Set */}
        {ribbons.map((service, index) => (
          <div
            key={`duplicate-${index}`}
            className="mx-3 whitespace-nowrap rounded-md px-4 py-2 font-semibold"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRibbon;