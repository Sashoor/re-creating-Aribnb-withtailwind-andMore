import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { photo } from "/404.png"

function Four0Four() {
  return (
    <div className="Relative">
      <Header />
      <Image
        src="/Error.png"
        alt="This is a 404 Error"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}

export default Four0Four;
