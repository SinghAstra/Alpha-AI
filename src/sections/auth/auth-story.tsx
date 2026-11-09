import { Logo } from "@/components/logo";
import { Pill } from "@/components/pill";

export function AuthStory({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative flex flex-col overflow-hidden bg-ink px-6 pt-8 pb-12 text-white lg:h-full lg:px-[max(48px,calc((100vw-1200px)/2))] lg:py-12">
      <div className="pointer-events-none absolute -right-[250px] -bottom-[245px] size-[520px] rounded-full border border-[#384640]" />
      <div className="pointer-events-none absolute -right-[340px] -bottom-[330px] size-[700px] rounded-full border border-[#384640]" />
      <div className="relative z-10 mb-8">
        <Logo variant="light" onClick={onBack} />
      </div>
      <div className="relative z-10 flex max-w-[500px] flex-1 flex-col justify-center">
        <Pill className="self-start border-[#3d4b46] bg-[#202c28]">Evidence before exposure</Pill>
        <h1 className="mt-8 mb-5 text-[51px] leading-[0.98] font-semibold tracking-[-3px] sm:text-[clamp(52px,5vw,70px)] sm:tracking-[-4px]">
          Your decisions.
          <br />
          <em className="font-serif font-medium text-lime">Better informed.</em>
        </h1>
        <p className="max-w-[440px] text-sm leading-[1.8] text-[#aeb9b4]">
          Sign in to validate trade setups against millions of historical market observations.
        </p>
        <div className="mt-11 grid grid-cols-2 border-y border-[#384640] py-6">
          <div className="flex flex-col gap-1.5">
            <strong className="text-[22px] font-semibold">31.08M</strong>
            <span className="text-[9px] text-[#899690]">research observations</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <strong className="text-[22px] font-semibold">20K+</strong>
            <span className="text-[9px] text-[#899690]">traders validating</span>
          </div>
        </div>
        <blockquote className="mt-9 font-serif text-[19px] italic leading-[1.4] text-[#dbe2de]">
          “The best part is what it stops me from trading.”
          <span className="mt-2.5 block font-mono text-[8px] font-normal not-italic uppercase text-[#84918b]">
            — Pro member, Mumbai
          </span>
        </blockquote>
      </div>
    </section>
  );
}
