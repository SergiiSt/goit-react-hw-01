import Profile from "../Profile/Profile"
import profile from "../../profile.json"
import FriendList from "../FriendList/FriendList"
import friends from "../../friends.json"
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import transactions from "../../transactions.json"


export default function App() {
    return (
    <><Profile profprop={profile} />
            <FriendList friends={friends} />  
            <TransactionHistory transactions={transactions} />        
    </>
    )  
}