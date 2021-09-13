const Contact = () => {
  return (
    <div className=" md:mx-32 mx-8 h-screen flex items-center" id="contact">
      <div className=" ">
        <div className="">
          <h1 className="text-xl mb-4 mt-10">CONTACT</h1>
          <h1 className="text-7xl font-bold">Know me closer.</h1>

          <div className="h-2 w-60  bg-gray-800"></div>

          <ul className="lg:flex flex-wrap flex  mt-24 gap-11 ">
            <li className="flex items-center gap-4 ">
              <i className="fa fa-whatsapp fa-2x text-green-500"></i>
              <p className="text-lg border-b">0899 - 7197 - 975</p>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa fa-envelope-square fa-2x "></i>
              <p className="text-lg border-b">farhanmahesa10@gmail.com</p>
            </li>
            <li className="flex items-center gap-4 ">
              <i className="fa fa-linkedin  bg-blue-800 p-1 text-white rounded-sm "></i>
              <a href="/" className="text-lg border-b">
                https://www.linkedin.com/in/m-farhan-44104b195
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
