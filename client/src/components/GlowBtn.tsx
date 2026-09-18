type GlowBtnProps = { text: string; hex: string };

export default function GlowBtn({ text, hex }: GlowBtnProps) {
  const colorClass = `bg-[${hex}]`;
  return <button className={colorClass}>{text}</button>;
}
