import avatar from "../assets/avatar.png";

export default function DevCard() {
  return (
    <div className="flex items-center text-slate-200 bg-neutral-800 w-fit p-7 m-5 mx-auto rounded-md">
      <img
        src={avatar}
        alt="Whiskydog's GitHub avatar"
        className="w-40 border-2 border-red-400 rounded-full"
      />
      <div className="ml-4">
        <h1 className="text-4xl font-bold mb-4">
          Whiskydog is creating webapps
        </h1>
        <p className="font-medium text-lg">Come join him!</p>
      </div>
    </div>
  );
}
