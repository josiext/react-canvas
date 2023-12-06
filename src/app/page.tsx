import { TreeGraph } from "@/components/TreeGraph";

const DATA = [
  {
    id: "1",
    children: [{ id: "2" }, { id: "3" }],
  },
  { id: "2", children: [{ id: "3534" }] },
  { id: "3", children: [{ id: "423" }] },
  { id: "4", children: [{ id: "5123" }] },
  { id: "5", children: [{ id: "a" }] },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-100">
      <TreeGraph data={DATA} />
    </main>
  );
}
