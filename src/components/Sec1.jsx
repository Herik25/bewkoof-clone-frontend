import React from 'react'

function Sec1() {
    const names = [
        {name: "New Arrivals", image : "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop--1--1697613232.jpg"},
        {name: "Bestsellers", image: "https://images.bewakoof.com/uploads/grid/app/category-icon-for-msite-Desktop-1697613234.jpg"},
        {name: "Official Collaborations", image: "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg"},
        {name: "Winterwear", image: "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg"},
        {name: "Customization", image: "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg"},
        {name: "Combos", image: "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif"},
        {name: "Vote for Designs", image: "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg"},
        {name: "Last Siezes Left", image: "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg"},
    ]

    const renderedCards = names.map((item, index) => {
        return(
            <div key={index}>
            <img className=' px-3 h-[180px]' src={item.image} />
            <h1 className=' text-center text-[12px] font-bold mt-3 font-poppins'>{item.name}</h1>
            </div>
        )
    })
  return (
    <div>
        <div className=' mx-[150px] my-5'>
            <div className=' flex items-center justify-center w-full'>
                {renderedCards}
            </div>
        </div>
        <div>
            <img className=' w-full h-[150px]' src='https://images.bewakoof.com/uploads/grid/app/brand-strip-1683780891-1684740361.gif' />
        </div>
    </div>
  )
}

export default Sec1