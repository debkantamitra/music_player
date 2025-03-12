import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="flex justify-center items-center h-screen flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h2 className="text-white mt-4">{title || "Loading..."}</h2>
  </div>
);

export default Loader;
