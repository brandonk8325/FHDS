/*When this is real add:
Hours
Phone Number
Make email and phone number links
*/


function Footer(){
    
    return(
        <>
            <div className={`flex flex-col py-10 bg-darkgreen w-full`} >
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="flex justify-center gap-5 flex-col md:flex-row items-center lg:gap-60 md:gap-20">
                        <div className="lg:w-150 md:w-full flex justify-end text-center md:text-left">
                            <div className="">
                                <p className="text-white">Furever Home Dog Sanctuary</p>
                                <p className="text-white">Richmond, Illinois</p>
                                <p className={`text-gold brightness-150`}>info@FHDSmail.org</p>
                                <p className={`text-gold brightness-150`}>+1 773-520-3568</p>
                            </div>
                        </div>
                        <div className="lg:w-150 md:w-full flex justify-start text-center md:text-left">
                            <form name = "newsletter" method="POST"   data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="newsletter" />
                                <p hidden><label> Testing for SPAM <input name="bot-field" /></label></p>
                                <label htmlFor="input-group-1" className="border-0 shadow-0  text-sm font-medium  dark:text-white bg-*  ">Join our Newsletter</label>
                                <div className="flex flex-col md:flex-row bg-*">
                                    <div className="join border-0 shadow-0 h-10">
                                        <div>
                                            <label className={`input validator join-item border-[#76947A]/70  shadow-0 bg-darkgreen`}>
                                            <svg className="h-[1em] opacity-100 border-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g> </svg>
                                            <input type="email" className="placeholder-white/70 focus:outline-none focus:ring-0 focus:border-transparent" placeholder="mail@site.com" required />
                                            </label>
                                            <div className="validator-hint hidden ">Enter valid email address</div>
                                        </div>
                                        <button className={`btn border-1 border-[#76947A]/70 focus:h-full  h-full join-item bg-darkgreen border-0 shadow-none`} type = "submit">Join</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center pt-5">
                    <hr className="h-px  w-full md:w-150 block bg-gray-100 border-0 dark:bg-gray-100 "></hr>
                    <div className="flex flex-row pt-5 gap-10 items-center justify-center items-center w-full">
                        <a href = "https://www.instagram.com/fureverhomedogsanctuary/?hl=en">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>
                        </a><a href = "https://www.facebook.com/fureverhomedogsanctuary/">
                            <svg enable-background="new 0 0 56.693 56.693" height="20" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" fill="white"><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/></svg>                   
                        </a><a href = "https://www.youtube.com/channel/UCs45_2H-rHEGVgGo8hl1zhg">
                            <svg className="pt-1" height="20" fill="white" id="Social_Icons" version="1.1" viewBox="0 0 128 128"><g id="_x34__stroke"><g id="Youtube_1_"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path clip-rule="evenodd" d="M126.72,38.224c0,0-1.252-8.883-5.088-12.794    c-4.868-5.136-10.324-5.16-12.824-5.458c-17.912-1.305-44.78-1.305-44.78-1.305h-0.056c0,0-26.868,0-44.78,1.305    c-2.504,0.298-7.956,0.322-12.828,5.458C2.528,29.342,1.28,38.224,1.28,38.224S0,48.658,0,59.087v9.781    c0,10.433,1.28,20.863,1.28,20.863s1.248,8.883,5.084,12.794c4.872,5.136,11.268,4.975,14.116,5.511    c10.24,0.991,43.52,1.297,43.52,1.297s26.896-0.04,44.808-1.345c2.5-0.302,7.956-0.326,12.824-5.462    c3.836-3.912,5.088-12.794,5.088-12.794S128,79.302,128,68.868v-9.781C128,48.658,126.72,38.224,126.72,38.224z M50.784,80.72    L50.78,44.501l34.584,18.172L50.784,80.72z" id="Youtube"/></g></g></svg>
                        </a>
                     </div>
                </div>
            </div>
        </>
    )

}

export default Footer