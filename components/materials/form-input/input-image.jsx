import { useRef, useState, useEffect } from "react";
const InputImage = props => {
  const input = useRef(null);
  const [hover, setHover] = useState(false);
  const [imgPreview, setImgPreview] = useState(
    props.image || "/images/default.jpg"
  );

  useEffect(() => {
    setImgPreview(props.image);
  }, [props.image]);

  const handleImageClick = () => {
    input.current.click();
  };
  const handleImageChange = e => {
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    props.onFileChange(e);
  };
  return (
    <div className="mb-2   ">
      <h1 className="my-2 text-xl text-left">{props.label}</h1>
      <div
        className={`${
          props.height ? props.height : "h-96"
        } flex justify-center items-center w-96 hover:opacity-80 cursor-pointer`}
        onClick={handleImageClick}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={imgPreview}
          alt=""
          className={`${
            props.height ? props.height : "h-96"
          } max-h-96 max-w-96`}
        />
        {hover ? (
          <div className=" text-center p-4  bg-gray-400 bg-opacity-40 rounded-lg absolute ">
            <i className="fa fa-upload fa-2x text-white"></i>
            <br />
            <h1 className="text-2xl font-bold text-white">UPLOAD</h1>
          </div>
        ) : (
          ""
        )}
        <input
          type="file"
          placeholder={props.placeholder}
          className="hidden "
          ref={input}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default InputImage;
