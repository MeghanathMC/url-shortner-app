import React, {useState} from "react";
import { ServerURL } from "../../helpers/Constants";
import axios from "axios";

interface FormProps {
  updateReloadState: () => void;
}
const FormContainer:React.FunctionComponent<FormProps> = (props)=> {
    const {updateReloadState}= props;
    const [fullURL,setFullURL] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            await axios.post(`${ServerURL}/shortUrl`,{
                fullUrl: fullURL
            });
            setFullURL("");
            updateReloadState();
        }
        catch(error){
            console.log(error);
        }
    }
 
    return (
      <div className="container mx-auto py-2 px-2 sm:px-4">
        <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
          <div className="w-full h-full p-4 sm:p-8 md:p-12 lg:p-20 rounded-xl flex flex-col items-center">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl text-center pb-2 sm:pb-4 bg-clip-text font-bold">LinkLy</h2>
            <p className="text-white text-base sm:text-lg md:text-xl text-center font-light">
              Shrink Long Links into Smart, Shareable URLs
            </p>
            <p className="text-white text-sm sm:text-lg md:text-xl mx-auto max-w-2xl font-extralight text-center mt-2">
              Linkly makes your messy URLs neat, fast, and easy to share - all in one click
            </p>

            <form onSubmit={handleSubmit} className="w-full mt-6">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mx-auto py-2 sm:py-4 w-full max-w-2xl">
                <div className="relative w-full flex items-center">
                  <span className="absolute left-3 inset-y-0 pointer-events-none flex font-medium text-gray-500 items-center">stackloop.link /</span>
                  <input
                    type="text"
                    value={fullURL}
                    onChange={(e) => setFullURL(e.target.value)}
                    className="block w-full pl-32 pr-20 sm:pl-36 sm:pr-24 text-gray-900 text-sm sm:text-base rounded-full shadow-md bg-white focus:ring-2 focus:ring-blue-400 border border-gray-300 py-2 sm:py-3"
                    placeholder="paste your link here"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto text-sm sm:text-md font-bold text-center py-2 px-4 border-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 pointer-events-auto mt-2 sm:mt-0"
                >
                  Shorten
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default FormContainer;
