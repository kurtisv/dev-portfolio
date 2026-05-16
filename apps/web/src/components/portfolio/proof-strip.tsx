const proofs = [
  ["4", "portfolio builds from the starter"],
  ["1", "mobile product included"],
  ["3+", "client sites planned or in progress"],
  ["50", "tests passing in the foundation"],
];

export function ProofStrip() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {proofs.map(([value, label]) => (
          <div key={label} className="border-l border-border pl-4">
            <p className="text-3xl font-semibold tracking-normal">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
