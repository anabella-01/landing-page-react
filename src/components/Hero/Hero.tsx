import heroImage from "../../assets/images/hero/hero.png"
import {Button} from "../Button/Button"
export function Hero(){
    return(
    <section className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 ">
        <div className="">
            <img src={heroImage} alt="hero-image" className="md:h[386px] md:w-auto lg:h[386px] mx-2" />
        </div>
            <div className='md:w-3/5 '>
            <h1 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">Develop your skills without dilligence</h1>
            <p className="text-[#EBEBEB] text-2xl mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum accusamus voluptates omnis asperiores quia? Unde fuga maxime voluptas in dolores est veritatis, eos incidunt ipsa consequuntur, nulla voluptatum quidem ab!</p>

            <div className="flex flex-wrap gap-5 sm:flex">
            <Button href="/get-started" content="Get started"/>
            <Button href="/get-started" content="Discount" />
            </div>

            </div>
        </div>   
        </div>
    </section>
    )
}