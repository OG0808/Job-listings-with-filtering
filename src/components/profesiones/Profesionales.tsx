import { useState } from "react";
import Data from "../../../data.json";


interface User {
    id: number;
    logo: string;
    company: string;
    featured: boolean;
    new: boolean;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
  }


const Profesionales = () => {


  const [skils, setSkils] = useState<string[]>([])
console.log(skils);



  const adskill =(skill:string)=>{
    setSkils([...skils, skill])
  }

  return (
    <section className="flex flex-col gap-10">
      {Data.map((users:User) => (
        <article
          className="w-[1110px] 
        h-[152px] flex gap-4 items-center rounded-lg bg-white shadow-xl justify-between p-7"
          key={users.id}
        >
            <div className="flex gap-4">

           
          <img src={users.logo} alt="" />
          <div className="flex flex-col">
            <div className="flex gap-3 ">
              <p className="text-md font-bold text-[#5ca5a5] ">{users.company}</p>
              {users.featured && <span className=" bg-black text-white
               text-xs font-bold flex items-center rounded-xl py-1 px-2">FEATURED</span>}

              {users.new && <span className="bg-[#5ca5a5] text-white 
              text-xs font-bold flex items-center rounded-xl py-1 px-2">NEW!</span>}
            </div>
            <h4>
              <p className="text-black font-bold mt-2 mb-2">{users.position}</p>
            </h4>
            <div className="flex gap-2 items-center text-[#7c8f8f]">
        <span>{users.postedAt}</span>
        <span className="h-1 w-1 bg-[#b7c4c4] rounded-full "></span>
        <span>{users.contract}</span>
        <span className="h-1 w-1 bg-[#b7c4c4] rounded-full "></span>
        <span>{users.location}</span>
            </div>
          </div>
          </div>
        
          <ul className="flex gap-4 w-fit cursor-pointer">
              {users.languages.map((skill) => (
                <li onClick={()=>adskill(skill)} className="bg-[#eff6f6] 
                 px-3 py-1 text-[#5ca5a5] rounded-lg font-bold" key={skill}>{skill}</li>
              ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Profesionales;
