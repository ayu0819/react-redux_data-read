import React,{ useEffect,useState } from 'react'; // 1
import { useSelector } from 'react-redux';
import {db} from '../firebase/index';



const User = () => {

    const selector = useSelector((state) => state);

    const path = selector.router.location.pathname;
    const id = path.split('/user/info/')[1];

    const [user, setUser] = useState(null);

    useEffect (() => {
        db.collection('users').doc(id).get()
        .then(doc => {
           const data = doc.data();
           setUser(data)
        })
     }, []);

return(
 <>
 <h2>ユーザー情報</h2>
     {user && (
     <>
     <p>ユーザー名</p>
     <p>{user.username}</p>

     <p>メールアドレス</p>
     <p>{user.email}</p>
     </>
   )}
 </>
 )
}

export default User;