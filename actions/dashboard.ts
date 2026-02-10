"use server";

export async function getDashboardData() {
  // SIMULATE DB DELAY (Real loading effect)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    stats: {
      totalBenefits: 12500,
      applications: 3,
      pending: 1,
    },
    categories: [
      {
        id: 1,
        name: "Farmers",
        icon: "Sprout",
        color: "bg-green-100",
        border: "border-green-600",
        text: "text-green-900",
        shadow: "shadow-[#16a34a]",
      },
      {
        id: 2,
        name: "Students",
        icon: "GraduationCap",
        color: "bg-blue-100",
        border: "border-blue-600",
        text: "text-blue-900",
        shadow: "shadow-[#2563eb]",
      },
      {
        id: 3,
        name: "Women",
        icon: "Heart",
        color: "bg-pink-100",
        border: "border-pink-600",
        text: "text-pink-900",
        shadow: "shadow-[#db2777]",
      },
      {
        id: 4,
        name: "Business",
        icon: "Briefcase",
        color: "bg-yellow-100",
        border: "border-yellow-600",
        text: "text-yellow-900",
        shadow: "shadow-[#ca8a04]",
      },
    ],
  };
}
