// import { Info } from "lucide-react";

// const BlogContent = ({ blog }) => {
//   if (!blog) return null;

//   const { introduction, sections, keyPoint } = blog.content;

//   return (
//     <article className="">
// {sections.map((section, index) => {

//   if (section.type === "text") {
//     return (
//       <section key={index} className="mt-12">

//         <h2 className="text-[34px] font-bold">
//           {section.heading}
//         </h2>

//         <div className="mt-5 space-y-6">

//           {section.paragraphs.map((item, i)=>(
//             <p key={i}>
//               {item}
//             </p>
//           ))}

//         </div>

//       </section>
//     )
//   }

//   if(section.type==="keyPoint"){
//       return (
//          <KeyPointBox
//              key={index}
//              text={keyPoint}
//          />
//       )
//   }

//   if(section.type==="image"){
//       return (
//           <BlogImage
//               key={index}
//               image={image}
//               caption={imageCaption}
//           />
//       )
//   }

//   if(section.type==="stitchTypes"){
//       return (
//           <StitchTypes
//               key={index}
//               items={stitchTypes}
//           />
//       )
//   }

//   if(section.type==="quote"){
//       return (
//           <QuoteBox
//               key={index}
//               quote={quote}
//           />
//       )
//   }

//   if(section.type==="formats"){
//       return (
//           <SupportedFormats
//               key={index}
//               formats={supportedFormats}
//           />
//       )
//   }

// })}







//       {/* Intro */}

//       {/* <p className="text-[18px] leading-9 text-[#424957] ">
//         {introduction}
//       </p> */}

//       {/* Sections */}

//       {/* {sections.map((section) => (
//         <section key={section.heading} className="mt-10 mb-4">

//           <h2 className="text-[28px] font-bold text-[#0F1729] font-inter py-4">
//             {section.heading}
//           </h2>

//           {section.paragraphs.map((paragraph, index) => (
//             <p
//               key={index}
//               className="text-[18px] leading-9 text-[#424957]"
//             >
//               {paragraph}
//             </p>
//           ))}

//         </section>
//       ))} */}

//       {/* Key Point */}

//       {/* <div
//         className="
//         rounded-[14px]
//         border
//         border-[#D7CDEA]
//         bg-[#F6F4FB]
//         py-5
//         px-[22px]
//         "
//       >
//         <div className="flex items-start gap-[14px]">

//           <div
//             className="
//             flex
//             h-9
//             w-13
//             items-center
//             justify-center
//             rounded-full
//             bg-[#EDE7F8]
            
//             "
//           >
//             <Info
//               size={18}
//               className="text-[#7434E5]"
//             />
//           </div>

//           <div>

//             <h4 className="text-base font-bold text-[#7434E5] font-dmSans">
//               Key Point
//             </h4>

//             <p className="mt-1 text-[18px] leading-7 text-[#424957]">
//               {keyPoint}
//             </p>

//           </div>

//         </div>
//       </div> */}

//     </article>
//   );
// };

// export default BlogContent;


import KeyPointBox from "../layout/KeyPointBox";
import BlogImage from "../layout/BlogImage";
import StitchTypes from "../layout/StitchTypes";
import QuoteBox from "../layout/QuoteBox";
import SupportedFormats from "../layout/SupportedFormats";

const BlogContent = ({ blog }) => {
  if (!blog) return null;

  const {
    introduction,
    sections,
    keyPoint,
    images,
    stitchTypes,
    quote,
    supportedFormats,
  } = blog.content;
  return (
    <article>

      {/* Introduction */}

      <p
        className="
          text-[16px]
          leading-8
          text-[#424957]
          md:text-[18px]
          md:leading-9
        "
      >
        {introduction}
      </p>

      {/* Dynamic Sections */}

      {sections.map((section, index) => {

        if (section.type === "text") {
          return (
            <section
              key={index}
              className="mt-12"
            >
              <h2
                className="
                  text-[28px]
                  font-bold
                  text-[#0F1729]
                  md:text-[34px]
                "
              >
                {section.heading}
              </h2>

              <div className="mt-6 space-y-6">

                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="
                      text-[16px]
                      leading-8
                      text-[#424957]
                      md:text-[18px]
                      md:leading-9
                    "
                  >
                    {paragraph}
                  </p>
                ))}

              </div>
            </section>
          );
        }

        if (section.type === "keyPoint") {
          return (
            <KeyPointBox
              key={index}
              text={keyPoint}
            />
          );
        }

       if (section.type === "image") {

  const currentImage = images[section.imageIndex];

  return (
    <BlogImage
      key={index}
      image={currentImage.src}
      caption={currentImage.caption}
    />
  );
}

        if (section.type === "stitchTypes") {
          return (
            <StitchTypes
              key={index}
              items={stitchTypes}
            />
          );
        }

        if (section.type === "quote") {
          return (
            <QuoteBox
              key={index}
              quote={quote}
            />
          );
        }

        if (section.type === "formats") {
          return (
            <SupportedFormats
              key={index}
              formats={supportedFormats}
            />
          );
        }

        return null;
      })}
    </article>
  );
};

export default BlogContent;