import Link from "next/link";

const NextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/img/nextjs.svg" />

      <div>
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Voltar para a Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NextPage;
