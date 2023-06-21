
export default function Home() {
  return (
    <div>
      <div className="w-full hidden md:flex flex-row">
        <div className="w-auto h-auto bg-blue-300 flex-grow">NNam Menu</div>
        <div className='bg-red-200 w-16 h-16 flex-grow-0'>Github</div>
        <div className='bg-gray-500 w-16 h-16 flex-grow-0'>Linkedin</div>
      </div>
      <div className="flex flex-row">
        <div className="w-auto h-auto bg-green-300 flex-grow">Breadcrumbs/Home</div>
        <div className="bg-red-200 w-16 h-16 flex-grow-0 md:hidden">X</div>
      </div>
      <div className="w-full h-60 bg-slate-500">Logo section</div>
      <div className="w-full h-60 bg-blue-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia qui perspiciatis cumque saepe illo odit nobis. Ipsa saepe, similique rem, illum totam aliquid, velit pariatur repellat voluptatibus nesciunt ipsam doloremque.
      </div>
      <div className="w-full h-60 bg-slate-500">
        Skillset
      </div>
    </div>
  )
}
