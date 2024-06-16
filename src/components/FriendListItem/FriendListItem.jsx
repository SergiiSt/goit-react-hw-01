import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
       <div className={css.cardWrap}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.paragraph}>{name}</p>
  <p className={css.paragraph}>{isOnline? "Online" : "Offline"}</p>
</div>

    )
}