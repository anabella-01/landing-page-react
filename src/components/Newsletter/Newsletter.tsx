import newsImg from "../../assets/images/newsletter/newsletter.png"
import {Button} from "../../components/Button/Button"
export function Newsletter(){
    return (
            <section className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10">
                <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 ">
        <div >
            <img src={newsImg} alt="hero-image" className="md:h[386px] md:w-auto lg:h[386px] mx-2" />
        </div>
            <div className='md:w-3/5 '>
            <h1 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">Develop your skills without dilligence</h1>
            <p className="text-[#EBEBEB] text-2xl mb-8">A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>

            <div className="flex flex-wrap gap-5 sm:flex">
            <Button href="/get-started" content="Get started"/>
            </div>

            </div>
        </div>   
        </div>
            </section>
    )
}