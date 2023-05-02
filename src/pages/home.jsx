import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-32 w-auto"
              src="/logoSolo.svg"
              alt="Your Company"
              width={48}
              height={48}
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Home
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
