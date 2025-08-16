
export function AboutCard({name = "Name", descriptor = "descriptor", image = "../static/dog.jpg", company = ""}) {
  return (
    <div className= {`max-w-3xs border-1 border-black rounded-lg bg-darkgreen`}>
        <img className="rounded-t-lg w-3xs" src={image} alt="" /> 
      <div className="p-5 md:h-50 lg:h-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">{name}</h5> 
          <p className="mb-3 text-md font-normal text-white ">{descriptor}</p>
          <p className="text-xs text-neutral-300">{company}</p>
      </div>
    </div>

  );
}