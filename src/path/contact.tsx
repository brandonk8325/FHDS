import { EmailForm } from "../Components/email_form";
import { PhoneForm } from "../Components/phone_form";
import { Component } from "../Components/Navbar";

function Contact() {
  return (
    <>
      <div className={`flex flex-col items-center justify-center py-10 lg:h-screen bg-[#f6eee3]`}>
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
            >
              {/* Required by Netlify to identify the form */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot anti-spam field */}
              <p hidden>
                <label>
                  Testing for SPAM <input name="bot-field" />
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

                {/* Email — ensure EmailForm renders an input with this name */}
                <div>
                  {/* Your EmailForm should use this prop (e.g., <input type="email" name={name} .../>) */}
                  <EmailForm name="email" />
                </div>

                {/* Phone — ensure PhoneForm renders an input with this name */}
                <div>
                  {/* Your PhoneForm should use this prop (e.g., <input type="tel" name={name} .../>) */}
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

                <div className="flex items-center justify-center w-full pt-4">
                  <button type="submit" className="border-gold border-4 px-5 rounded-md py-2 text-white">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
