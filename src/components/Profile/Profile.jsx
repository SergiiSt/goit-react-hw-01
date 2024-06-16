import css from "./Profile.module.css"


export default function Profile({ profprop: { username, tag, location, avatar, stats: { followers, views, likes } } }) {
    return (
    
 <div className={css.profileWrap}>
<div className={css.imgWrap}>
<img
 src={avatar} className={css.profilePic}
 alt="User avatar"
 />
 <p className={css.paragraph}>{username}</p>
 <p className={css.paragraph}>{tag}</p>
 <p className={css.paragraph}>{location}</p>
 </div>

 <ul className={css.profList}>
 <li className={css.listItem}>
 <span>Followers</span>
 <span>{followers}</span>
 </li>
 <li className={css.listItem}>
 <span>Views</span>
 <span>{views}</span>
 </li>
 <li className={css.listItem}>
 <span>Likes</span>
 <span>{likes}</span>
 </li>
 </ul>
</div>)
}