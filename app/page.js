import Image from "next/image";
import trinity from "../app/trinity.jpg";
import twilight from "../app/twilight.jpg";
const Home = () => {
  return (
    <div className=" flex justify-center items-center max-h-screen m-0 p-0">
      <div className="container w-4/5 max-w-3xl   text-center  font-staatliches">
        <p className="text-4xl font-bold  text-slate-100">Welcome to TRINITY</p>
        <Image
          src={trinity}
          alt="My Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg mx-auto"
        />

        <p className="text-xl font-bold mb-4  text-slate-100 text-center pt-4">
          Trinity is a three-member Thai pop boy band formed in 2019. The
          members were brought together by 4NOLOGUE label after the Nine by Nine
          special project ended in 2019.
        </p>
      </div>
    </div>
  );
};
export default Home;
