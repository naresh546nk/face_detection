import React ,{useState, useEffect} from 'react'




const Rank = () => {
    
    const [userRank ,setUserRank]= useState(0)

    async  function getRank(){
        const response =await fetch('http://localhost:3001/getRank?email='+sessionStorage.getItem('email'))
        const data= await response.json();
        setUserRank(data.rank)
    }



    useEffect(() => {
      getRank();
    })

    return (
        <div className='tc '>
            <div className="white f3">
                {sessionStorage.getItem('userName')} you'r current Rank is #{userRank}

            </div> 
        </div>
    )

}

export default Rank;