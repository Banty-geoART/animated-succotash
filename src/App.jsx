import React from 'react'
import Card from './components/card'
// import Jac1 from '../assets/jacket1.jpeg'


const App = () => {
 
  const arr = [
    {
     url1: 'https://m.media-amazon.com/images/I/81qhvV4f2AL._SX679_.jpg',
     url2: 'https://m.media-amazon.com/images/I/71mYK4seqEL._SY879_.jpg',
     url3: 'https://m.media-amazon.com/images/I/61NHZQQaZdL._SY879_.jpg',
     url4: 'https://m.media-amazon.com/images/I/81k1kqTUg4L._SY879_.jpg',
     head: 'Madara Uchiha',
     content: 'A muted sand-beige canvas meets Madara’s iconic silhouette, bold black artistry, and subtle crimson accents for a refined, dark anime aesthetic.',
     price: '599',
      },

       {
     url1: 'https://m.media-amazon.com/images/I/615RMdx94IL._SX679_.jpg',
     url2: 'https://m.media-amazon.com/images/I/81-81j5uqsL._SX679_.jpg',
     url3: 'https://m.media-amazon.com/images/I/71OWdIiQXnL._SY879_.jpg',
     url4: 'https://m.media-amazon.com/images/I/61kcn-c-KzL._SX679_.jpg',
     head: 'Shikamaru Nara',
     content: 'Sand-beige minimalism meets Shikamaru’s iconic genius, blending bold white typography and muted camouflage into a refined streetwear statement.',
     price: '558',
      },

      {
        url1: 'https://m.media-amazon.com/images/I/617eSpz3TuL._SY879_.jpg',
        url2: 'https://m.media-amazon.com/images/I/619PHSy9mBL._SY879_.jpg',
        url3: 'https://m.media-amazon.com/images/I/61cccTegY+L._SX679_.jpg',
        url4: 'https://m.media-amazon.com/images/I/617eSpz3TuL._SY879_.jpg',
        head: 'Roronoa Zoro',
        content: 'Crisp ivory meets Zoro’s legendary swordsman aura, contrasted by deep emerald accents and striking black artwork for elevated anime streetwear.',
        price: '563',
      },

      {
        url1: 'https://m.media-amazon.com/images/I/71jTGuEBxkL._SX679_.jpg',
        url2: 'https://m.media-amazon.com/images/I/51MWSbk3TKL._SX679_.jpg',
        url3: 'https://m.media-amazon.com/images/I/515h+OU1AqL._SX679_.jpg',
        url4: 'https://m.media-amazon.com/images/I/61BQ-d7gKpL._SX679_.jpg',
        head: 'Cosmic Struggle',
        content: 'A sleek black canvas frames a delicate moon-inspired motif, suspended astronaut, and crimson thread for a minimalist, contemplative aesthetic.',
        price: '572',
      },

      {
        url1: 'https://m.media-amazon.com/images/I/812WEtId8jL._SX679_.jpg',
        url2: 'https://m.media-amazon.com/images/I/71YOlfVPPtL._SY879_.jpg',
        url3: 'https://m.media-amazon.com/images/I/61eO77Un8vL._SY879_.jpg',
        url4: 'https://m.media-amazon.com/images/I/719eLJtxIdL._SY879_.jpg',
        head: 'Gogeta Fusion',
        content: 'Soft ivory elegance meets Goku and Vegeta’s iconic fusion dance, blending vibrant anime artwork with understated tones for premium streetwear.',
        price: '799',
      },

      {
        url1: 'https://m.media-amazon.com/images/I/61CIUgIhljL._SY879_.jpg',
        url2: 'https://m.media-amazon.com/images/I/61xQZiUBNML._SY879_.jpg',
        url3: 'https://m.media-amazon.com/images/I/81luzZ2+-SL._SX679_.jpg',
        url4: 'https://m.media-amazon.com/images/I/61hQsRuEO1L._SY879_.jpg',
        head: 'Ryomen Sukuna',
        content: 'Warm ivory elegance meets Sukuna’s fierce monochrome artwork, elevated by crimson accents for a bold, dark, luxury streetwear aesthetic.',
        price: '549',
      },

      {
        url1: 'https://m.media-amazon.com/images/I/51sdajktOeL._SY879_.jpg',
        url2: 'https://m.media-amazon.com/images/I/61nGNKSFseL._SY879_.jpg',
        url3: 'https://m.media-amazon.com/images/I/81q3yGHz0eL._SX679_.jpg',
        url4: 'https://m.media-amazon.com/images/I/71wnsvySXaL._SY879_.jpg',
        head: 'Monkey D. Luffy',
        content: 'Luffy’s radiant Gear 5 illustration brings playful rebellion to a creamy ivory silhouette, balancing expressive linework with effortlessly refined urban style.',
        price: '599',
      },
]

  return (
    // <div className='bg-[#C7D9C3] h-auto py-5 px-5 flex gap-10 flex-wrap'>
    //  {arr.map(function(val){
    //    return <Card url1={val.url1} url2={val.url2} url3={val.url3} url4={val.url4} head={val.head} content={val.content} price={val.price}/>
    //  })}

    // </div>

    <div className="min-h-screen bg-[#C7D9C3] p-4 sm:p-6 lg:p-8">
    <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
      {arr.map((val) => (
        <Card
          key={val.head}
          url1={val.url1}
          url2={val.url2}
          url3={val.url3}
          url4={val.url4}
          head={val.head}
          content={val.content}
          price={val.price}
        />
      ))}
    </div>
  </div>
  )

  
}


export default App
