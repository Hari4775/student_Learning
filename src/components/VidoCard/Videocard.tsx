import React from 'react'
interface IDVideoCard{
  currentVideoUrl: any;
};


const Videocard :React.FC<IDVideoCard> =(props) => {

  const {
    currentVideoUrl={}
  } = props;

  return (
    <div>Videocard
 <video controls>
 <source src={currentVideoUrl} type="video/mp4" />                    
  </video>

    </div>
  )
}

export default Videocard