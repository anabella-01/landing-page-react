import { useState } from "react"
import dotImg from "../../assets/images/dot/green-dot.png"
import dotImg2 from "../../assets/images/dot/pink-dot.png"
import {Button }from "../../components/Button/Button"

export function Pricing(){

const [isYearly, setIsYearly] = useState<boolean>(false);

                    {/*Cards*/}

const packages = [                  
                { 
                  name:"Start",
                  monthlyPrice:50,
                  yearlyPrice:100,
                  description:"A common form of Lorem ipsum reads: Lorem psum dolor sit amet, consectetur adipsicing elit."
                },
                { 
                name:"Advance",
                monthlyPrice:85,
                yearlyPrice:150,
                description:"A common form of Lorem ipsum reads: Lorem psum dolor sit amet, consectetur adipsicing elit." 
                },
                { 
                name:"Premium",
                monthlyPrice:100,
                yearlyPrice:200,
                description:"A common form of Lorem ipsum reads: Lorem psum dolor sit amet, consectetur adipsicing elit."
                 },
                ];

    return(
        <section className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10">
            <div>
                <div className="text-center">
                    <h3 className="md:text-5xl text-3xl font-extrabold text-primary-color">
                        Here are all our plans
                    </h3>
                    <p className="text-light-grey md:w-1/3 mx-auto px-4 py-4 font-semibold">
                    A simple paragraph is comprised of three major components. The which is often a declarative sentence.
                    </p>
                    {/*Toggle pricing*/}
                    <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className="text-2xl mr-8 font-semibold">Monthly</span>
                    <div className="w-14 h-6 bg-heading-color rounded-full transition duration-200 ease-in-out">
                    <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly? "bg-primary-color ml-8": "bg-gray-300"}`}>
                    </div>
                    </div>
                    <span className="text-2xl ml-8 font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={ ()=> setIsYearly(!isYearly)} />
                    </div>
                </div>
                {/*Pricing cards*/}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 md:w-11/12 mx-auto">
                    {
                      packages.map((item,index)=> 
                        <div key={index} className="border py-10 px-4 rounded-lg shadow-2xl md:px-6 hover:translate-y-4 duration-300 cursor-pointer">
                          <h3 className="text-3xl font-bold text-center text-primary-color">{item.name}</h3>
                          <p className="text-light-grey font-semibold text-center my-5">{item.description}</p>      
                             <p className="mt-5 text-center text-5xl font-extrabold text-heading-color" >$
                                {isYearly? `${item.yearlyPrice}` : `${item.monthlyPrice}`}<span className="text-base font-medium text-light-grey">/{isYearly? "month" : "year"}</span>
                            </p>
                            <div> 
                                <ul className="space-y-4 mt-8 px-5 flex-nowrap">
                                    <li className="flex items-center font-medium gap-4 "><img src={dotImg} alt="" className="w-4 h-4" />Videos of Lessons</li>
                                    <li className="flex items-center font-medium gap-4"><img src={dotImg} alt="" className="w-4 h-4"/>Homework check</li>
                                    <li className="flex items-center font-medium gap-4"><img src={dotImg2} alt="" className="w-4 h-4" />Aditional practical task</li>
                                    <li className="flex items-center font-medium gap-4"><img src={dotImg2} alt="" className="w-4 h-4"/>Monthly conferences</li>
                                    <li className="flex items-center font-medium gap-4 "><img src={dotImg2} alt="" className="w-4 h-4" />Personal advice from teachers</li>
                                </ul>
                                    <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                        <Button href="/" content="Get Started" customStyles="border-2 rounded-xl hover:bg-white hover:text-heading-color hover:border-violet-600"/>
                                    </div>
                            </div>
                        </div>)  
                    }
                </div>
            </div>
        
        </section>
    )
}