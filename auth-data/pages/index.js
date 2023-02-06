import {useMoralis} from 'react-moralis'

export default function Home() {
    const {
        isAuthenticated,
        authenticate
    } = useMoralis()
   if(!isAuthenticated) {
        return(
           <button onClick={() => authenticate({
              type: 'eth'
       })}>Click to register your wallet</button> 
        )
    }
    return (
       <div>
           <p>Thank you for your time!</p>
       </div>
    )
}