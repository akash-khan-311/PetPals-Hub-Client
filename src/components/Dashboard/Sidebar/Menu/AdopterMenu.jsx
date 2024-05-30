import { BsFillHouseAddFill } from "react-icons/bs";
import { FcDonate } from "react-icons/fc";
import { MdHomeWork, MdOutlineManageHistory ,MdPets} from "react-icons/md";

import MenuItem from "../MenuItem";
const AdopterMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Pet" address="add-pet" />
      <MenuItem icon={MdPets} label="My Added Pet" address="my-added-pets" />

      
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Adopted"
        address="manage-adopted"
      />
    </>
  );
};

export default AdopterMenu;
