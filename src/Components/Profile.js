import React, { useState, useEffect ,lazy,Suspense} from 'react';
import { auth } from './firebase';
//import { doc, getDoc } from 'firebase/firestore';
import './profile.css'

const Lazyprofile=lazy(()=>import('./Lazyprof'))
const Profile = () => {
    const [details, setDetails] = useState(null); // Correct usage of useState

    const fetchUser = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            setDetails(user)
            
         /*   const docRef = doc(db, "Users", user.uid);
            const getDocRef = await getDoc(docRef);
            if (getDocRef.exists()) {
                setDetails(getDocRef.data());
                console.log(getDocRef.data());
            } else {
                console.log('User data not found');
            }
        }); // Closing parenthesis for fetchUser function*/
        });
}

    useEffect(() => {
        fetchUser();
    }, []);

   async function handlelog(){
        try{
                await auth.signOut();
                window.location.href='/login'
                console.log("user logout successfully")

        }
        catch(error){
                 console.log("error",error.message)
        }
    }

    return (
        <div className='contain'>
            <div className='profile-contain'>
              <Suspense fallback={<h2>Loading please wait..............</h2>}>
                <Lazyprofile details={details} handleout={handlelog} />
              </Suspense>
            </div>
        </div>
    );
}

export default Profile;
