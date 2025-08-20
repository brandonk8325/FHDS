import { useState } from "react";
import { EmailForm } from "../Components/email_form";
import { PhoneForm } from "../Components/phone_form";
import { Component } from "../Components/Navbar";

function encode(data: Record<string, FormDataEntryValue>) {
  return new URLSearchParams(data as Record<string, string>).toString();
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Netlify requires a form-name key matching the form's name
    if (!data.get("form-name")) data.set("form-name", "contact");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(data.entries())),
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 lg:h-screen bg-[#f6eee3]">
        <div>
          <Component />
        </div>

        <div className="md:scale-130 md:py-40 lg:scale-100 lg:py-0 w-full">
          <div className="pt-nav-height">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="md:py-20 flex flex-col justify-evenly text-black"
              onSubmit={handleSubmit}
            >
              {/* Required by Netlify to identify the form */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot anti-spam field */}
              <p hidden aria-hidden="true">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="bg-darkgreen px-10 py-10 md:px-15 lg:py-8 md:py-15 rounded-4xl w-fit mx-auto">
                <h1 className="text-3xl pb-2 text-white">Contact Us</h1>

                {/* Your Name */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white">Your Name *</legend>
                  <input
                    type="text"
                    name="name"
                    className="input bg-[#f6eee3] placeholder-neutral-600 opacity-100"
                    placeholder="Your Name"
                    required
                  />
                </fieldset>

                {/* Email — EmailForm must render an input with this exact name */}
                <div>
                  <EmailForm name="email" />
                </div>

                {/* Phone — PhoneForm must render an input with this exact name */}
                <div>
                  <PhoneForm name="phone" />
                </div>

                {/* Message */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white">Your Message *</legend>
                  <textarea
                    id="comment"
                    name="message"
                    className="bg-[#f6eee3] rounded-md"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                  />
                </fieldset>

                <div className="flex items-center justify-center w-full pt-4 gap-3">
                  <button type="submit" className="border-gold border-4 px-5 rounded-md py-2 text-white">
                    Submit
                  </button>

                  {status === "ok" && (
                    <span className="text-white/90">Thanks! Your message was sent.</span>
                  )}
                  {status === "err" && (
                    <span className="text-red-200">Something went wrong. Please try again.</span>
                  )}
                </div>
              </div>
            </form>

            {/* Optional: a hidden static form helps Netlify pick up fields at build time
                if EmailForm/PhoneForm are dynamic. Uncomment if needed.
            <form name="contact" data-netlify="true" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="tel" name="phone" />
              <textarea name="message" />
            </form>
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
