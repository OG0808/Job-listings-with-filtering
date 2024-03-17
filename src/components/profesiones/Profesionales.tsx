import useStore from "../../store/useStoreSkills";
import { users } from "../../utils/Filters";



const Profesionales = () => {

  const { addSkills} = useStore();
  const{filteredUsers}=users()




  
  return (
    <section className="flex flex-col gap-10 max-w-[1110px] w-full max-sm:mt-10">
      {filteredUsers.map((users) => (
        <article
          className="
        min-h-[152px] flex gap-4 items-center rounded-lg 
         shadow-xl justify-between p-7 flex-wrap "
          key={users.id}
        >
          <div className="flex gap-4 flex-wrap">
            <img src={users.logo} alt="" />
            <div className="flex flex-col">
              <div className="flex gap-3 ">
                <p className="text-md font-bold text-[#5ca5a5] ">
                  {users.company}
                </p>
                {users.featured && (
                  <span
                    className=" bg-black text-white
               text-xs font-bold flex items-center rounded-xl py-1 px-2"
                  >
                    FEATURED
                  </span>
                )}

                {users.new && (
                  <span
                    className="bg-[#5ca5a5] text-white 
              text-xs font-bold flex items-center rounded-xl py-1 px-2"
                  >
                    NEW!
                  </span>
                )}
              </div>
              <h4>
                <p className="text-black font-bold mt-2 mb-2">
                  {users.position}
                </p>
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

          <ul className="flex flex-wrap gap-4 w-fit cursor-pointer items-center">
            <li
              onClick={() => addSkills(users.role)}
              className="bg-[#eff6f6] 
                 px-3 py-1 text-[#5ca5a5] rounded-lg font-bold"
            >
              {users.role}
            </li>
            <li
              onClick={() => addSkills(users.level)}
              className="bg-[#eff6f6] 
                 px-3 py-1 text-[#5ca5a5] rounded-lg font-bold"
            >
              {users.level}
            </li>
            {users.languages.map((skill) => (
              <li
                onClick={() => addSkills(skill)}
                className="bg-[#eff6f6] 
                 px-3 py-1 text-[#5ca5a5] rounded-lg font-bold"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Profesionales;
