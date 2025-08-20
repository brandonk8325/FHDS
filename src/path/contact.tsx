// import { useState } from "react";
// import { EmailForm } from "../Components/email_form";
// import { PhoneForm } from "../Components/phone_form";
// import { Component } from "../Components/Navbar";

// function Contact() {
//   const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
//   const [errMsg, setErrMsg] = useState<string>("");

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus("idle");
//     setErrMsg("");

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const res = await fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData as any).toString(),
//       });

//       if (res.ok) {
//         setStatus("ok");
//         form.reset();
//       } else {
//         const txt = await res.text().catch(() => "");
//         setErrMsg(`Status ${res.status}${txt ? ` — ${txt.slice(0, 200)}` : ""}`);
//         setStatus("err");
//       }
//     } catch (err) {
//       setErrMsg(err instanceof Error ? err.message : String(err));
//       setStatus("err");
//     }
//   }

//   return (
//     <>
//       {/* Static form for Netlify detection - must match the real form fields exactly */}
//       <form 
//         name="contact" 
//         data-netlify="true"
//               data-netlify-honeypot="bot-field"
//         hidden
//       >
//         <input type="text" name="name" />
//         <input type="email" name="email" />
//         <input type="tel" name="phone" />
//         <textarea name="message"></textarea>
//         <input name="bot-field" />
//       </form>

//       <div className="flex flex-col items-center justify-center py-10 lg:h-screen bg-[#f6eee3]">
//         <div>
//           <Component />
//         </div>

//         <div className="md:scale-130 md:py-40 lg:scale-100 lg:py-0 w-full">
//           <div className="pt-nav-height">
//             <form
//               name="contact"
//               method="POST"
//               action="/"
//               data-netlify="true"
//               data-netlify-honeypot="bot-field"
//               className="md:py-20 flex flex-col justify-evenly text-black"
//               onSubmit={handleSubmit}
//             >
//               <input type="hidden" name="form-name" value="contact" />

//               {/* Honeypot */}
//               <input name="bot-field" style={{ display: 'none' }} />

//               <div className="bg-darkgreen px-10 py-10 md:px-15 lg:py-8 md:py-15 rounded-4xl w-fit mx-auto">
//                 <h1 className="text-3xl pb-2 text-white">Contact Us</h1>

//                 {/* Your Name */}
//                 <fieldset className="fieldset">
//                   <legend className="fieldset-legend text-white">Your Name *</legend>
//                   <input
//                     type="text"
//                     name="name"
//                     className="input bg-[#f6eee3] placeholder-neutral-600 opacity-100"
//                     placeholder="Your Name"
//                     required
//                   />
//                 </fieldset>

//                 {/* Email — EmailForm MUST render <input name="email" ... /> */}
//                 <div>
//                   <EmailForm name="email" />
//                 </div>

//                 {/* Phone — PhoneForm MUST render <input name="phone" ... /> */}
//                 <div>
//                   <PhoneForm name="phone" />
//                 </div>

//                 {/* Message */}
//                 <fieldset className="fieldset">
//                   <legend className="fieldset-legend text-white">Your Message *</legend>
//                   <textarea
//                     name="message"
//                     className="bg-[#f6eee3] rounded-md"
//                     placeholder="Leave a comment..."
//                     required
//                     rows={4}
//                   />
//                 </fieldset>

//                 <div className="flex items-center justify-center w-full pt-4 gap-3">
//                   <button type="submit" className="border-gold border-4 px-5 rounded-md py-2 text-white">
//                     Submit
//                   </button>

//                   {status === "ok" && (
//                     <span className="text-white/90">Thanks! Your message was sent.</span>
//                   )}
//                   {status === "err" && (
//                     <span className="text-red-200">
//                       Something went wrong. Please try again. {errMsg && <em>({errMsg})</em>}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

export default function Contact(){
    return(
    <>
    <form  id = "myForm" name="contact" method="POST" action = "/contact" data-netlify = "true">
      <div>
      <input type = "hidden" name = "form-name" value = "contact"/>
        <input type="text"placeholder="First Name*" id="firstName" name = "First Name" required />
      <input type="text" placeholder="Last Name*" id="lastName" name = "Last Name" required />
      <input type="email" placeholder="Email Address*" id="their_email_address" name = "Email" required />
      <input type="text"  placeholder="Phone Number*" id="phoneNumber" name = "Phone Number" required />
      <input type="text"  placeholder="City, State, Zip Code*" id="location" name = "City, State" required />
      <textarea id="message" name="message" placeholder="Message*"></textarea>
      <button type="submit" id = "myBtn"  >Submit</button>
      </div>
    </form>
    </>
    );
}