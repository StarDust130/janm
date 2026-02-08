export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          How JANM Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-8 text-center">
            <div className="text-3xl font-bold text-orange-500">1</div>
            <p className="mt-4">Answer simple questions</p>
          </div>

          <div className="border rounded-xl p-8 text-center">
            <div className="text-3xl font-bold text-orange-500">2</div>
            <p className="mt-4">AI matches schemes</p>
          </div>

          <div className="border rounded-xl p-8 text-center">
            <div className="text-3xl font-bold text-orange-500">3</div>
            <p className="mt-4">Apply confidently</p>
          </div>
        </div>
      </div>
    </section>
  );
}
