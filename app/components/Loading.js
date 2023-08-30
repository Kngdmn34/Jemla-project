'use client'

import { FiLoader} from 'react-icons/fi';

export default function Loading() {
    return (
      <>
          <div 
              className="
                  fixed 
                  bg-black 
                  bg-opacity-70 
                  inset-0 
                  w-full 
                  z-40 
                  flex 
                  items-center 
                  justify-center 
                  h-[100vh]
                  overflow-hidden
              "
          >
              <div className="p-3 rounded-md">
                  <FiLoader size={100} className="text-green-400 animate-spin"/>
                  
              </div>
          </div>
      </>
    );
  };