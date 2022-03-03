import "./topbar.css";
import {Search,Person,Chat, Notifications} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Social College</span>

        </div>
        <div className="topbarCentre">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search for friends, posts or videos" className="searchInput"/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarItemBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarItemBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarItemBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
        
    </div>
  )
}
