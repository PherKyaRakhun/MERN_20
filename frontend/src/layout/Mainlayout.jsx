import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
export default Mainlayout;
