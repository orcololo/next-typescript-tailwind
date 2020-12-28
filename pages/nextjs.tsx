import BackToHome from "../components/BackToHome";

const NextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/img/nextjs.svg" />

      <BackToHome />
    </div>
  );
};

export default NextPage;
