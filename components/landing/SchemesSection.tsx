import schemes from "@/data/schemes.json";
import SchemesGrid from "./SchemesGrid.client";

export default function SchemesSection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Government Schemes Covered
        </h2>

        <SchemesGrid schemes={schemes} />
      </div>
    </section>
  );
}
