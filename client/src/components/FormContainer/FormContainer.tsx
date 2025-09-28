import React, {useState} from "react";
import { ServerURL } from "../../helpers/Constants";
import axios from "axios";

const FormContainer = () => {
    const [fullURL,setFullURL] = useState<string>("");


    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{

            await axios.post(`${ServerURL}/`)

        }
        catch(error){
            console.log(error);
        }

    }
 
    return (
    <div className="container mx-auto py-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full p-20 rounded-xl">
          <h2 className="text-white text-5xl text-center pb-4 bg-clip-text">LinkLy</h2>
          <p className="text-white text-xl text-center font-light">
            Shrink Long Links into Smart, Shareable URLs
          </p>
          <p className="text-white text-lg md:text-xl mx-auto max-w-2xl font-extralight text-center">
            {" "}
            Linkly makes your messy URLs neat, fast, and easy to share - all in
            one click
          </p>
       

        <form action="" onSubmit={handleSubmit}>
          <div className="flex mx-auto py-4">
            <div className="relative w-full flex ">
              <span className="absolute inset-y-0 left-0 pointer-events-none flex ps-3 font-medium font-gray items-center justify-center ">stackloop.link /</span>
              <input type="text" value={fullURL} onChange={(e)=>setFullURL(e.target.value)} className="block w-full pl-36 pr-24 ps-32 text-gray-900 text-sm rounded-full shadow-md bg-white focus:ring-2 focus:ring-blue-400 border border-gray-300" placeholder="paste your link here" required/>
                <button type="submit" className=" text-md font-bold text-center p-2  mx-4 border-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 pointer-events-auto ">Shorten</button>
            
            </div>
          </div>
        </form>
         </div>
      </div>
    </div>
  );
};

export default FormContainer;
