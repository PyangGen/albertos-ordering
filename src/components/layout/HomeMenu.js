'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import { motion } from 'framer-motion'; 
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function HomeMenu({flag}) {
  const [bestSellers, setBestSellers] = useState([]);
  const[ cartShow ] = useState();
  const [scrollValue, setScrollValue] = useState();




  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState('Specialty Pizzas');
  const rowContainer = useRef();

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems.slice(-4)));
    });
  }, []);

  useEffect(() =>{
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <section className="mx-14 className='w-full my-6">
      {/*<div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>*/}
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-24 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'
           > Our Specialties</p>
      </div>
      <div className='pyang hidden md:flex gap-3 items-center'>
          <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-200)}> <MdChevronLeft className='text-lg text-white' /></motion.div>
          <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(200)}> <MdChevronRight className='text-lg text-white' /></motion.div>

      </div>
      <div ref={rowContainer} className={`w-full flex items-center gap-3 my-22 scroll-smooth ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>
      {menuItems
          .filter((item) => {
            const selectedCategory = categories.find((cat) => cat.name === filter);
            return selectedCategory && item.category === selectedCategory._id;
          })
          .map((item) => (
            <MenuItem scrollValue={scrollValue} key={item._id} {...item} />
          ))}

      </div>
    </section>
  );
}