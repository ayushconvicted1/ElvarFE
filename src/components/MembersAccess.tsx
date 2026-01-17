import Image from "next/image";

export default function MembersAccess({ url }: { url?: string }) {
  return (
    <section className="w-full py-24 flex justify-center items-center px-4">
      <Image
        src={url || "/MemberAccess.png"}
        alt="Members Access"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </section>
  );
}
