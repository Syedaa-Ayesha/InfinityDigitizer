import ProductGallery from "../assets/components/layout/ProductGallery";
import ProductInfo from "../assets/components/layout/ProductInfo";
import { useParams } from "react-router-dom";
import { FreeDesignData } from "../assets/components/common/FreeDesignData";
const DesignDetails = () => {
     const { id } = useParams();

  const design = FreeDesignData.find(
    (item) => item.id === Number(id)
  );
  return (
   <section className="bg-[#FFFFFF] pb-16 lg:py-16">
  <div className="mx-auto max-w-[1320px]">

    <div
      className="
      overflow-hidden
      rounded-[20px]
      lg:rounded-[50px]
      border
      border-[#E7E3ED]
      bg-white
      shadow-[0px_2px_16px_rgba(211, 202, 226, 0.29)]
      "
    >
      <div
        className="
        grid
        grid-cols-1
        gap-10
        p-5
        md:p-8
        xl:grid-cols-[46%_54%]
        xl:gap-14
        "
      >
        <ProductGallery design={design} />

        <ProductInfo design={design} />

      </div>
    </div>

  </div>
</section>
  )
}

export default DesignDetails