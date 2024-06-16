import clsx from "clsx"
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    
    const statusClases = clsx(css.paragraph, isOnline ? css.online : css.offline)    

    return (
       <div className={css.cardWrap}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.paragraph}>{name}</p>
  <p className={statusClases}>{isOnline? "Online" : "Offline"}</p>
</div>

    )
}