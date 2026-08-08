
import B2BHeading from '../../layout/B2BLayout/B2BHeading'
import Process from "../../layout/B2BLayout/Process";
import { B2BProcessData } from "../../common/B2BProcessData";

const ProcessWork = () => {
  return (
    <section className='p-[22px] lg:py-6'>
        <div className='mx-auto max-w-[1320px]'>
             <B2BHeading title="How Our B2B Process Works?" />
              {/* Process */}
      <div
        className="
          mt-16
          flex
          flex-col
          gap-3
          lg:flex-row
          lg:gap-0
          lg:items-start
        "
      >
        {B2BProcessData.map((item, index) => (
          <Process
            key={item.id}
            icon={item.icon}
            title={`${index + 1}. ${item.title}`}
            description={item.description}
            isLast={index === B2BProcessData.length - 1}
          />
        ))}
      </div>
        </div>
    </section>
  )
}

export default ProcessWork