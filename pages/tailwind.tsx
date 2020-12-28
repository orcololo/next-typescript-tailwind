import Link from "next/link";
import BackToHome from "../components/BackToHome";

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/img/tailwind.svg" />

      <BackToHome />
    </div>
  );
};

export default TailwindPage;
