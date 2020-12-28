import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 md:mt-24">
        <Card href={"/nextjs"} imgSrc={"/img/nextjs.svg"} />
        <Card href={"/tailwind"} imgSrc={"/img/tailwind.svg"} />
      </div>
    </div>
  );
}
