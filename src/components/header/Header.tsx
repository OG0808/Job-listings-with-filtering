import useStore from "../../store/useStoreSkills";
import {motion} from "framer-motion"


export const Header = () => {


const {clearSkills, skillsTodo, filterSkills}=useStore()


 
  return (
    <section className=" bg-desktop bg-[#5CA5A5] 
    relative  w-full h-[156px] bg-no-repeat m-auto
    rounded-lg
    ">

      {
   skillsTodo.length > 0 &&
   <motion.article 
   initial={{ opacity: 0}}
   animate={{ opacity: 1}}
   transition={{
     duration: 0.3,
     delay: 0.1,
     ease: [0, 0.71, 0.2, 1.01]
   }}


   className=" max-w-[1110px] h-max p-7
    flex items-center justify-between 
    bg-white shadow-xl rounded-md 
     mx-auto bottom-0 top-28 right-0 left-0 absolute   "
  >
  <ul className="flex gap-3 flex-wrap" >

  {skillsTodo.map((skills) => (
   <>
     <li 
      className="text-[#5ca5a5] font-bold bg-[#eff6f6] py-1  
      px-2 gap-1 text-xl rounded flex items-center
      ">{skills.skill}
       <i onClick={()=>filterSkills(skills.id)} className='text-black transition  hover:opacity-70 cursor-pointer bx bxs-x-square bx-md'></i>
      </li>
     
      </>
     ))}


     </ul> 

   <span
     className="cursor-pointer text-[#5ca5a5] font-bold text-xl hover:underline "
     onClick={() => {
       clearSkills();
     }}
   >
     Clear
   </span>
 </motion.article>

      }
   
    </section>
  );
};
