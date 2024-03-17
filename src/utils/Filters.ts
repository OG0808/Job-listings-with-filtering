import { useEffect, useState } from "react";
import Data from "../../data.json";
import useStore from "../store/useStoreSkills";

interface User {
    role: string;
    level: string;
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

export const users = () => {

    
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const { skillsTodo } = useStore();


  useEffect(() => {
    let filteredData = Data;
    skillsTodo.map((skill) => {
      filteredData = filteredData.filter((user) => {
        return (
          user.role === skill.skill ||
          user.level === skill.skill ||
          user.languages.includes(skill.skill)
        );
      });
    });
    setFilteredUsers(filteredData);
  }, [skillsTodo]);


  return{
    filteredUsers
  }
};
