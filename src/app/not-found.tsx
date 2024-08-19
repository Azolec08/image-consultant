import Link from "next/link";

const Error = () => {
  return (
    <div className="h-[100vh] flex gap-y-3 items-center justify-center">
      <p className="text-2xl">You are in the wrong page and path</p>
      <Link href="/">
        <button className="text-3xl rounded-md p-2">Go back to Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
