'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import {useEffect, useState} from "react";
import { motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState('Desserts');

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems));
    });
  }, []);
  return (
    <section>
      <div className=' flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
              Menu Items
        </p>
 
          <div className=' flex items-center mt-28 justify-start lg:justify-center gap-8 my-6 overflow-x-scroll scrollbar-none'>
          {categories?.length > 0 && categories.map(c => (
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    key={c._id}
                    className={`group ${
                      filter === c.name ? 'bg-cartNumBg' : 'bg-card'
                    } w-24 min-w-[94px] h-28 cursor-pointer text-center rounded-lg drop-shadow-xl flex flex-col gap-1 items-center justify-center hover:bg-cartNumBg duration-150`}
                    onClick={() => setFilter(c.name)}
                  >
                <div
                      className={`w-10 h-10 rounded-full shadow-lg ${
                        filter === c.name
                          ? 'bg-white'
                          : 'bg-cartNumBg'
                      } group-hover:bg-white flex items-center justify-center`}
                    >
                    <IoFastFood
                        className={` ${
                          filter === c.name
                            ? 'text-textColor'
                            : 'text-white'
                        } group-hover:text-textColor text-lg`}
                      />
                </div>
                <SectionHeaders
                      className={`text-sm ${
                        filter === c.name
                          ? 'text-white'
                          : 'text-textColor'
                      } group-hover:text-white`}
                      mainHeader={c.name} />
                    
             
                </motion.div>
                ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-10 mb-12">
        {menuItems
          .filter((item) => {
            const selectedCategory = categories.find((cat) => cat.name === filter);
            return selectedCategory && item.category === selectedCategory._id;
          })
          .map((item) => (
            <MenuItem key={item._id} {...item} />
          ))}
          </div>

        </div>
    </section>
  );
}