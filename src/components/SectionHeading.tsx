// src/components/SectionHeading.tsx

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: Props) {
  return (
    <div className="mb-14 max-w-3xl">
      
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6b655e]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#1b1b1b] md:text-5xl">
        {title}
      </h2>

      <div className="gold-line" />

      {text && (
        <p className="mt-6 text-lg leading-8 text-[#5f5a54]">
          {text}
        </p>
      )}
    </div>
  );
}