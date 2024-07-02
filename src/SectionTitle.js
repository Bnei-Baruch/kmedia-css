function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionTitle({text}) {
  return (
    <h2 className="text-2xl font-bold text-center mt-10 mb-5">{text}</h2>
  );
}
