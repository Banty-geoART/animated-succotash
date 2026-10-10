
import Img from './img.jsx'
import Center from './center.jsx'
import Line from './line.jsx'
import Bottom from './bottom.jsx'


const card = (props) => {




  return (
  //   <div className='bg-white w-90 py-1 px-1 rounded-[20px] relative'>
        
  //    <Img url1 = {props.url1} url2={props.url2} url3={props.url3} url4={props.url4}/>

  //    <Center head= {props.head} content={props.content} />

  //    <Line/>

  //    <Bottom price ={props.price}/>
      
  //  </div>

  <div className="relative w-full max-w-90 min-w-0 rounded-[20px] bg-white p-1 shadow-sm">

      <Img
        url1={props.url1}
        url2={props.url2}
        url3={props.url3}
        url4={props.url4}
      />

      <Center
        head={props.head}
        content={props.content}
      />

      <Line />

      <Bottom price={props.price} />

    </div>
  )
}

export default card
