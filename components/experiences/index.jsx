import Image from "next/image";
import Card from "../materials/card";
const Experiences = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">
        Here Is My Experiances
      </h1>

      <div className="grid grid-cols-2 mt-4">
        <div>
          <div className="grid gap-3 grid-cols-2">
            <Card
              title="Web Developer"
              year="2020-2020"
              desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            ></Card>
            <Card
              title="Web Developer"
              year="2020-2020"
              desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            ></Card>
            <Card
              title="Web Developer"
              year="2020-2020"
              desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            ></Card>
            <Card
              title="Web Developer"
              year="2020-2020"
              desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            ></Card>
            <Card
              title="Web Developer"
              year="2020-2020"
              desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            ></Card>
            <Card
              title="Web Developer"
              year="2020-2020"
              desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            ></Card>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Image src="/images/experiences.png" width="300" height="300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
