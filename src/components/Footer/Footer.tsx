import imgLogo from "../../assets/images/logo/logo.png"
import linkImg from "../../assets/images/social-icons/instagram.png"
import linkLink from "../../assets/images/social-icons/linkedIn.png"
import linkFb from "../../assets/images/social-icons/facebook.png"

export function Footer(){
    return (
        <section className="md:px-14 p-5 max-w-screen-3xl mx-auto py-10 bg-primary-color">
            <div className="md:flex gap-5 ">
                <div className="md:w-1/2 space-y-8">
                <div>
                    <a href="/" className="flex items-center space-x-3 w-20 text-white text-2xl font-semibold gap-3">
                    <img src={imgLogo} alt="image-logo" className="w-10 inline-block items-center"/><span>XYZ</span>
                    </a>
                    <p className="text-white mt-5 md:w-1/1 ">A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.     
                    </p>          
                </div>
                <div className="mt-8 flex">
                    <input type="email" name="email" id="email" className="bg-[#9a7af159] rounded-md focus:outline-none  bg-opacity-65 py-2 px-4 w-72" placeholder="Your email"/>
                    <input type="submit" value="Subscribe" className="px-4 py-2 bg-heading-color rounded-md -ml-3 cursor-pointer hover:bg-white hover:text-heading-color hover:border-heading-color border-1"/>
                </div>
            </div>
                <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-40 text-start cursor-pointer ">
                    <div className="mt-10 text-white text-sm">
                        <ul className="mb-4 space-y-3">
                        <li><a href="/" className="font-bold">Plataform</a></li>
                        <li><a href="">Overview</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="mt-10 text-white text-sm">
                        <ul className="mb-4 space-y-3">
                        <li><a href="" className="font-bold">Help</a></li>
                        <li><a href="">How does it work?</a></li>
                        <li><a href="">Where to ask question?</a></li>
                        <li><a href="">How to play?</a></li>
                        <li><a href="">What is needed for this?</a></li>
                        </ul>
                    </div>
                    <div className="mt-10 text-white text-sm">
                        <ul className="mb-4 space-y-3">
                        <li><a href="/" className="font-bold">Contacts</a></li>
                        <li><a href="">(012) 1234-567-890</a></li>
                        <li><a href="">123-4567-789</a></li>
                        </ul>
                    </div>
              </div>
            </div>
            <div>
                <hr />
            </div>
            <div className="md:flex md:justify-between">
              <div className="py-5 mt-5">
                <p className="text-light-grey">@XYZ 2024 - 2024. All rights reserved.</p>
            </div>
            <div>
                <div className="flex justify-between mt-5 md:gap-5">
                    <img src={linkImg} alt="/" />
                    <img src={linkLink} alt="/" />
                    <img src={linkFb} alt="/" />
                </div>
            </div>  
            </div>
            
        </section>
    )
}