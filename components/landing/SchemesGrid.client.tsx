"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SchemeDrawer from "@/components/schemes/SchemeDrawer";

export default function SchemesGrid({ schemes }: { schemes: any[] }) {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {schemes.slice(0, 6).map((s, i) => (
          <motion.div
            key={s.id}
            onClick={() => setSelected(s)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="cursor-pointer border rounded-xl p-6 bg-background hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{s.name_en}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {s.benefits}
            </p>
          </motion.div>
        ))}
      </div>

      <SchemeDrawer scheme={selected} onClose={() => setSelected(null)} />
    </>
  );
}
