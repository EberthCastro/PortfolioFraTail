import React from "react";

function Footer () {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
      <div>
        <a href="https://www.linkedin.com/in/eberth-i-castro/" className="mr-2 text-black text-[0.9rem]">
          Linkedin
        </a>
        <a href="https://github.com/EberthCastro" className="mr-2 text-black text-[0.9rem]">
          Github
        </a>
        
      </div>
      <div className="text-[0.9rem] text-black">
        &#169; 2023 
      </div>
    </div>
  );
};

export default Footer;
