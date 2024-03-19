import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

 


const page = () => {
  return (
    <> 
      <div className="container py-[90px] text-center">
        <h1 className="text-[40px] text-[#333] font-bold mb-8">OOPS! SOMETHING WENT WRONG</h1>
        <FontAwesomeIcon
          icon="exclamation-circle"
          className="w-20 h-20 text-background m-auto"
        />
        <p className="text-sm text-[#333] font-bold mt-9">The Page You Are Trying To Access Is Not Accessable Or Moved To Another Location.</p>
        <div className="flex mt-2 justify-center">
          <span className="inline-block text-base text-[#333]">Click Here to go to </span>
          <Link className="ml-1 inline-block text-base text-primary-main" href="/"> Go Back to Home</Link>
        </div>
      </div>


      
    </>
  );
};

export default page;
