import { BsGearFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { SiTwilio } from 'react-icons/si';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<SiTwilio size="28" />} />
        <Divider />
        <SideBarIcon icon={<FaPhone size="20" />} />
        <SideBarIcon icon={<TiMessages size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
