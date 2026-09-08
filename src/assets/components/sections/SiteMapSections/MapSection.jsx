import SiteMapCard from "../../layout/SiteMap/SiteMapCard";
import { mainPagesData, resourcePagesData } from "../../common/SiteMapData";
import { Home, BookOpen } from "lucide-react";
import Heading from "../../layout/SiteMap/Heading";

const SitemapGrid = () => {
  return (
    <section className="min-h-screen bg-[#FBF9FE] px-4 py-6 sm:px-6 lg:px-[22px]">
      
      {/* ================= MAIN PAGES ================= */}
      <Heading title="Main Pages (06)" icon={Home} />

      <p className="ml-0 mt-2 text-sm font-inter text-[#9494A8] sm:ml-14">
        These are the main pages available in the top navigation menu.
      </p>

      <div
        className="
          grid
    w-full
    grid-cols-1
    justify-items-center
    gap-5
    py-[18px]

    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
        "
      >
        {mainPagesData.map((card) => (
  <SiteMapCard
    key={card.id}
    number={card.number}
    title={card.title}
    icon={card.icon}
    links={card.links}
  />
))}
      </div>

      {/* ================= RESOURCE PAGES ================= */}
      <div className=" my-[56px]">
      <Heading title="Resource Pages (14)" icon={BookOpen} />

      <p className="ml-0 mt-2 text-sm font-inter text-[#9494A8] sm:ml-14">
        These pages are available under the Resources dropdown menu.
      </p>

      <div
        className="
       
         grid
    w-full
    grid-cols-1
    justify-items-center
    gap-5
    py-[18px]

    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
        "
      >
      {resourcePagesData.map((card) => (
  <SiteMapCard
    key={card.id}
    number={card.number}
    title={card.title}
    icon={card.icon}
    links={card.links}
  />
))}
      </div>
</div>
    </section>
  );
};

export default SitemapGrid;