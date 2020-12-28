import Link from "next/link";

const BackToHome: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <a className="absolute bottom-10 right-10 bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
          Home
        </a>
      </Link>
    </div>
  );
};

export default BackToHome;
