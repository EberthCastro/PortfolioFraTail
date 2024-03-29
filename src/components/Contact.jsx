import React from "react";
import { contacts } from "../Data";

function Contact() {
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contacts</h2>
        <div className="w-14 h-[3px] rounded-sm bg-black"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-black text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex  gap-12 flex-wrap justify-center">
          <div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-black p-2 text-[0.9rem]"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-black p-2 text-[0.9rem]"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-black p-2 text-[0.9rem]"
                placeholder="Tech"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Description"
              className="outline-none bg-transparent border border-solid border-black resize-none text-[0.9rem] p-2 h-40 w-80"
            ></textarea>
            <div className="mt-2 text-end">
              <a href="" className="text-[0.9rem] text-black">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
