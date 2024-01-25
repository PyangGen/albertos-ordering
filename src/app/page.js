import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='hero grid grid-cols-1 md:grid-cols-2  w-full'>
      <div className='py-2 flex-1 flex ml-10  flex-col items-start justify-center gap-4'>
      <div className="text-center my-16" id="about">
        <p className="text-orange-500 text-bold text-2xl max-w-md mx-auto mt-4 flex flex-col gap-4">Our Story</p>
        
          <p>
            Alberto's Pizza is a homegrown pizza company based in Cebu, Philippines, established in February 2008 by a group of friends seeking additional income.
          </p>
          <p>Initially located on B. Rodriguez St. in Cebu City, the owners focused on pizza delivery due to limited space. Despite limited funds, they aimed to provide affordable yet high-quality pizzas.</p>
          <p>The strategic location near hospitals led to popularity among nurses, interns, doctors, and staff. Within a year, Alberto's Pizza opened its first branch in Mabolo, Cebu City, and expanded to a total of 13 stores, including locations in Talisay, Mandaue, Minglanilla, Consolacion, and Lapu-Lapu City. </p>
          <p> The possibility of outlets beyond Cebu is being considered. Alberto's Pizza quickly became a buzzword, attracting people from various backgrounds to dine in or take out their favorite pizzas.</p>
        </div>
      </div>
      <div className='py-2 mt-28 flex-1 flex items-center relative mr-14'>
      <div className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <h1 className="text-bold text-2xl text-center ">BG Ermac Building, Poblacion Occidental, Consolacion, Cebu</h1>
          <a className="underline text-gray-500" href="tel:(032) 2688811 / 09173012676 / 09328833508">
            (032) 2688811 / 09173012676 / 09328833508
          </a>
          <p>Cebu Customer Hoyline: (032) 512-5998</p>
        </div>
      </div>
      </div>
      </section>
    </>
  )
}
