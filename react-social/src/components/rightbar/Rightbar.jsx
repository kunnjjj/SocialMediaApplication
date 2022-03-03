import { Users } from "../../dummyData";
import "./rightbar.css";
import Online from "../online/Online";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" />
        <span className="birthdayText"><b>Harsh Prakash</b> and <b>3 other friends</b> have birthdays today.</span>
      </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map(u => (<Online key={u.id} user={u} />))}
      </ul>
    </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New Delhi</span>
        </div>
      
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Kashipur</span>
        </div>
      
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">It's Complicated</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
     
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh Saini</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh Saini</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh Saini</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh Saini</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh Saini</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ritesh Saini</span>
          </div>
        </div>
      
      </>
    )
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}
