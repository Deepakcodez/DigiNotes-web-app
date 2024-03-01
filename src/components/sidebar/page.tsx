import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-[4rem]  flex flex-col items-center bg-slate-800 ">
        <Link href={'/'} className="pt-4">
          <Image src="/Logo.png" width={50} height={50} alt="logo" />
        </Link>
        <div>
            klfg
        </div>
      </div>
    </>
  );
}

export default Sidebar;
