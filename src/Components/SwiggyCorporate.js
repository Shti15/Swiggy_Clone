// import React,{useState} from 'react'
// const Section=({title,description,isvisible,setIsVisible})=>{
  
//      return (
//       <>
//       <h2>{title}</h2>
//       {isvisible?<><button onClick={()=>(setIsVisible(""))}>Hide</button><p>{description}</p></>:<button onClick={()=>(
//         setIsVisible(title)
//       )}>See More</button>}
      
      
//       </>
//      );

// }
// const SwiggyCorporate = () => {
//   const [isvisible,setIsVisible]=useState("about")
//   return (
//    <>
//       <Section title='about' description='hello this is my about section' isvisible={isvisible==="about"} setIsVisible={setIsVisible}></Section>
//       <Section title='careers' description='hello this is my careers section' isvisible={isvisible==="careers"} setIsVisible={setIsVisible}></Section>
//       <Section title='products' description='hello this is my product section'isvisible={isvisible==="products"} setIsVisible={setIsVisible}></Section>
//       <Section title='contact' description='hello this is my contact section'isvisible={isvisible==="contact"} setIsVisible={setIsVisible}></Section>
//    </>
//   )
// }

// export default SwiggyCorporate
import React, { useState } from 'react';

const SwiggyCorporate = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Welcome to Swiggy Corporate</h1>
      <div className="space-y-8">
        <Section
          title="About Us"
          description="Swiggy is India’s largest food delivery network. We’re on a mission to deliver happiness to people by connecting them with their favorite food from local restaurants."
        />
        <Section
          title="Careers"
          description="At Swiggy, we’re always looking for passionate individuals who want to shape the future of food delivery. We offer amazing opportunities across various departments."
        />
        <Section
          title="Products"
          description="Our core product is food delivery, but we also offer Swiggy Instamart, a hyperlocal delivery service, and Swiggy Genie, a delivery assistant service."
        />
        <Section
          title="Contact Us"
          description="For inquiries, please reach out to us at support@swiggy.com or call us at 1800-123-456."
        />
      </div>
    </div>
  );
};

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      {isVisible ? (
        <div className="mt-4">
          <p className="text-gray-600">{description}</p>
          <button
            onClick={() => setIsVisible(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Hide
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default SwiggyCorporate;
