
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux'

const OtherUsers = () => {
  //custom hook
  useGetOtherUsers()
  const {otherUsers} = useSelector(store => store.user);
  if(!otherUsers) {
    return;
  }
  
  return (
    <div className='h-[400px] overflow-y-auto flex-1'>  {/* review 4:12:34 */}
  
      {
        
        otherUsers?.map((user) =>{
          return(
            <OtherUser key={user._id} user ={user}/>
          )
        })
      }
       
    </div>
  )
}

export default OtherUsers
