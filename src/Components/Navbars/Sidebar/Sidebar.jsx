import React from "react";
import Sideitem from "./Sideitem";
import Box from "../../Box/Box";
import './sidebar.css'

const sideList = [
{ id: 0, title: "Posts", classIcon: "fas fa-home", toLink:'/' },
  { id: 1, title: "show", classIcon: "fab fa-galactic-republic", toLink:'/details' },
  { id: 2, title: "New Post", classIcon: "fas fa-pen",toLink:'/new'  },
  { id: 3, title: "Chat", classIcon: "fas fa-comments",toLink:'/' }, 
]; 
const Sidebar = () => {
  return (
    <Box boxClass='sidebar-box'>
      <Sideitem liProp={sideList} classUL="sidebar-ul" />
    </Box>
  );
};
export default Sidebar;
