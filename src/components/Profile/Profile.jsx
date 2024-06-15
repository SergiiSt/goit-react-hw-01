import css from "./Profile.module.css"


export default function Profile({ profprop: { username, tag, location, avatar, stats: { followers, views, likes } } }) {
    return (
    
 <div className={css.profileWrap}>
<div className={css.imgWrap}>
<img
 src={avatar} className={css.profilePic}
 alt="User avatar"
 />
 <p>{username}</p>
 <p>{tag}</p>
 <p>{location}</p>
 </div>

 <ul className={css.profList}>
 <li>
 <span>Followers</span>
 <span>{followers}</span>
 </li>
 <li>
 <span>Views</span>
 <span>{views}</span>
 </li>
 <li>
 <span>Likes</span>
 <span>{likes}</span>
 </li>
 </ul>
</div>)
}