import { signOut, useSession } from "next-auth/react";

export default function MiniProfile() {
  const session = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16 "
        src={session?.data?.user?.image}
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">
          {session.data
            ? session.data.user.name.split(" ").join("").toLocaleLowerCase()
            : "YourName"}
        </h2>
        <h3 className="text-sm font-semibold text-gray-500">
          Welcome to instagram !
        </h3>
      </div>

      <button className="mn" onClick={signOut}>
        {" "}
        Sign Out{" "}
      </button>
    </div>
  );
}
