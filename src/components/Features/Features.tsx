import featureImg from "../../assets/images/feature/feature.png"

export function Features(){
    return(
      <section className="md:px-14 p-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:w-1/4">
            <h2 className=" text-primary-color text-4xl leading-tight font-bold lg:w-3/4 mb-3">Why we are better than others</h2>
            <p className="text-light-grey font-semibold">A simple paragraph is comprised of three major components. The first sentence, wich is foten a declarative sentence, is called the "topic sentence".</p>
          </div>
            {/*Featured cards*/}
          <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-12 md:grid-cols-3 sm:grid-cols-2">
          <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center       hover:translate-y-4 duration-300 cursor-pointer">
              <div>
                <img src={featureImg} alt="feature-img" />
                <h4 className="text-primary-color text-2xl font-semibold px-5 text-center mt-5 ">Convenient study schedule</h4>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center       hover:translate-y-4 duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featureImg} alt="feature-img" />
                <h4 className="text-primary-color text-2xl font-semibold px-5 text-center mt-5">Convenient study schedule</h4>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center       hover:translate-y-4 duration-300 cursor-pointer">
              <div>
                <img src={featureImg} alt="feature-img" />
                <h4 className="text-primary-color text-2xl font-semibold px-5 text-center mt-5">Convenient study schedule</h4>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>  
    );
}