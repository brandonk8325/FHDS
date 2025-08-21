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
 // Contact.tsx
export default function Contact() {
  return (
    <main className="min-h-[60vh] grid place-items-center bg-[#f6eee3] py-10">
      <div className="w-full max-w-xl rounded-2xl bg-[#1C4436] p-6 text-white">
        <h1 className="mb-4 text-3xl font-semibold">Contact Us</h1>

        {/* Netlify-handled form (classic POST + redirect to /success) */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
          acceptCharset="UTF-8"
          className="space-y-4"
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot (hidden) */}
          <p hidden aria-hidden="true">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="mb-1 block">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-md bg-[#f6eee3] p-2 text-black"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="mb-1 block">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md bg-[#f6eee3] p-2 text-black"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="mb-1 block">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-md bg-[#f6eee3] p-2 text-black"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="mb-1 block">Your Message *</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-md bg-[#f6eee3] p-2 text-black"
            />
          </div>

          <button
            type="submit"
            className="rounded-md border-4 border-[#a37521] px-5 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
