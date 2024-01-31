import React from 'react'

function Catagories() {
    const men = [
        { title: "Printed T-shirts", img: "https://th.bing.com/th/id/OIP.GY0nvFcAlbOrbWIBcBAAFQHaJQ?pid=ImgDet&w=207&h=258&c=7&dpr=1.3"},
        { title: "Oversize T-shirts", img: "https://th.bing.com/th/id/OIP.9owB7krs20yf8b9bdt4HfAHaJM?pid=ImgDet&w=198&h=246&c=7&dpr=1.3"},
        { title: "Shorts", img: "https://th.bing.com/th/id/OIP.tKTt3cepJgumaKjrIi1BYgHaHa?pid=ImgDet&w=182&h=182&c=7&dpr=1.3"},
        { title: "Joggers", img: "https://th.bing.com/th/id/OIP.xg8EcvxRGdN95i0btCJrpwHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        { title: "Vests", img: "https://images.bewakoof.com/t640/men-s-red-feeln-hot-boxy-vest-582315-1677840758-1.jpg"},
        { title: "Full Sleve T-shirts", img: "https://images.bewakoof.com/t640/men-busy-doin-nothing-printed-t-shirt-15-577212-1675946119-1.jpg"},
    ]

    const women = [
        { title: "Printed T-shirts", img: "https://images.bewakoof.com/t640/women-s-blue-stardust-soul-graphic-printed-oversized-t-shirt-580622-1677157903-1.jpg"},
        { title: "Oversize T-shirts", img: "https://images.bewakoof.com/t640/women-s-white-mickey-star-graphic-printed-oversized-t-shirt-624995-1698748808-1.jpg"},
        { title: "Fashion Tops", img: "https://images.bewakoof.com/t640/women-aop-oversize-t-shirt-3-580366-1682421809-1.JPG"},
        { title: "Joggers", img: "https://images.bewakoof.com/t640/women-s-blue-seal-jogger-printed-super-loose-joggers-603160-1697778497-1.jpg"},
        { title: "Dresses", img: "https://images.bewakoof.com/t640/women-s-grey-slim-fit-dress-4-584763-1686301801-1.jpg"},
        { title: "Boyfriend T-shirt", img: "https://images.bewakoof.com/t640/women-s-blue-is-it-caturday-graphic-printed-boyfriend-t-shirt-585186-1694002652-1.jpg"},
    ]

    const renderedCards1 = men.map((card, index) => {
        return (
            <div className=' cursor-pointer' key={index}>
                <img className=' h-[300px] w-[250px] px-2' src={card.img} />
                <h1 className=' font-poppins font-bold text-center text-lg text-[#4d4d4d] py-4'>{card.title}</h1>
            </div>
        )
    })
    const renderedCards2 = women.map((card, index) => {
        return (
            <div className=' cursor-pointer' key={index}>
                <img className=' h-[300px] w-[250px] px-2' src={card.img} />
                <h1 className=' font-poppins font-bold text-center text-lg text-[#4d4d4d] py-4'>{card.title}</h1>
            </div>
        )
    })

  return (
    <div>
        <h1 className=' font-Krala font-bold text-center text-2xl py-5'>TRENDING CATEGORIES</h1>
            <div>
                <div className=' flex w-full'>
                    {renderedCards1}
                </div>
                <div className=' flex w-full my-8'>
                    {renderedCards2}
                </div>
            </div>
        <img className=' w-full' src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg' />
    </div>
  )
}

export default Catagories