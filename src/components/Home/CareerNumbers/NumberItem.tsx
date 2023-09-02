export default function NumberItem({
  num,
  title,
  subtitle,
}: {
  num: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col pt-40">
      <div className="text-9xl font-semibold">{num}+</div>
      <div className="text-2xl text-primary font-semibold">{title}</div>
      <div>{subtitle}</div>
    </div>
  );
}
