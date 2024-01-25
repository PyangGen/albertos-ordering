import Right from "@/components/icons/Right";
import Image from "next/image";
import Delivery from "@/Images/delivery.png";
import { heroData } from "@/utils/data";
import Highlight from "@/Images/heroBg.png";


export default function Hero() {
  return (
    <section className='hero grid grid-cols-1 md:grid-cols-2  w-full'>
    <div className='py-2 flex-1 flex ml-14  flex-col items-start justify-center gap-4'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>Free Delivery</p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <Image src={Delivery} className='w-full h-full object-contain' alt='driver delivery'/>
        </div>
      </div>
      <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '> A taste you&apos;ll {" "} 
        <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> Surely Miss </span>
      </p>
      <p className='text-base text-textColor text-center md:text-left md:w-[80%] '>
        Alberto&apos;s Pizza proudly started as a small-time pizza store in Cebu City near the Vicente Sotto Memorial Medical Center.
        To stand above the rest of the competition, the founders of Alberto&apos;s Pizza wanted their products to be as affordable as they can be without hurting the quality and freshness of their pizzas. 
        Also, they can serve burgers, salad, and desserts.
      </p>

        <div className='flex gap-4 text-sm'>
          <button type='button' className='items-center flex gap-2 uppercase bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '> 
      Order Now
            <Right />
          </button>
            <button className='flex gap-1 py-2 text-gray-500 semi-bold'>Learn more <Right />
            </button>
        </div>
      </div>
      <div className='py-2 mt-28 flex-1 flex items-center relative mr-14'>
        <Image src={Highlight} className='ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-3xl' alt='highlight' />
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
        {heroData && heroData.map(n => (
          <div key={n.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
            <Image src={n.assetsSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt='margarita' />
            <p className='tesxt-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
            <p className=' text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
            <p className='text-sm font-semibold text-headingColor'><span className='text-lg text-red-600'>₱</span>{n.price}</p>
          </div>
        
        ))}  
      </div>
    </div>
  </section>
  );
}