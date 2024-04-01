import { IconStar } from "../icons/Icons";

export function SectionTitle({ title = "" }) {
  return (
    <section className="flex items-center justify-start w-full">
      <div className="flex items-center justify-center w-11 h-11 mr-4 rounded-full bg-shadeAmber shadow-xl shadow-suzuGrey">
        <IconStar styles={`text-[#cc6500]`} />
      </div>
      <h2 className=" text-2xl font-normal">{title}</h2>
    </section>
  );
}
