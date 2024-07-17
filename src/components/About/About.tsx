import imgAbout from "../../assets/images/about/about1.png"
import imgAbout2 from "../../assets/images/about/about2.png"

import {Button} from "../Button/Button"

export function About(){
    return(
        <section className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <img src={imgAbout} alt="about-image" className="h-auto"/>
                    </div>
                    <div className="md:w-3/5">
                        <h3 className="text-primary-color text-3xl md:text-5xl font-bold mb-5 leading-normal md:leading-tight">We have been improving our product <span className="text-heading-color">for many years.</span></h3>
                        <p className="text-light-grey font-semibold mb-5">A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>
                        <div className="flex flex-wrap  items-center sm:flex">
                        <Button href="/get-started" content="Get started"/>
                        </div>
                    </div>
                </div>
                {/*2nd About*/}
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <img src={imgAbout2} alt="about-image" className="h-auto"/>
                    </div>
                    <div className="md:w-3/5">
                        <h3 className="text-primary-color text-3xl md:text-5xl font-bold mb-5 leading-normal md:leading-tight">You can Practice at any <span className="text-heading-color">time convinent for you.</span></h3>
                        <p className="text-light-grey font-semibold mb-5">A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>
                        <div className="flex flex-wrap  items-center sm:flex">
                        <Button href="/get-started" content="Get started"/>
                        </div>
                    </div>
                </div>
        </section>
    )
}