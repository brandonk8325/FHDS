export function EmailForm({name = "email"}){
    return (
        <>
        <fieldset className="fieldset" >
            <legend className="fieldset-legend  text-white">Your Email *</legend>
            <div className="bg-*">
            <label className="input validator bg-[#f6eee3] border-1 border-neutral-400">
            <svg className="h-[1em] bg-[#f6eee3] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="black"
                >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
            </svg>
            <input type="email" name = {name} className="bg-[#f6eee3] border-l-1 border-neutral-400 focus:ring-0" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden ">Enter valid email address</div>
            </div>
        </fieldset>
        </>
    )
}