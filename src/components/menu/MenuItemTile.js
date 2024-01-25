import AddToCartButton from "@/components/menu/AddToCartButton";
import Image from "next/image";
import {motion} from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';

export default function MenuItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className='w-275 h-[225px] min-w-[275px] md:w-300 md:min-w-[300px] bg-orange-100 rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
      <div className='w-full flex items-center justify-between'>
        <motion.div className='w-40 h-40 -mt-8 drop-shadow-2xl' whileHover={{scale : 1.2}}>
        <Image src={image} className='w-full h-full object-contain' alt=""/>
        </motion.div>

        <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
        < MdShoppingBasket className='text-white' />
        <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
      </motion.div>
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
    </div>
  );
}