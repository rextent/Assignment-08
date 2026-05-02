const LearningTips = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          📌 Learning Tips
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-medium mb-2">
              📖 Study Techniques
            </h3>
            <p className="text-sm text-gray-600">
              Use active recall, spaced repetition, and consistent practice to improve learning efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-medium mb-2">
              ⏰ Time Management
            </h3>
            <p className="text-sm text-gray-600">
              Plan your study schedule, set realistic goals, and avoid distractions to stay productive.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-medium mb-2">
              ⏰ Time Management
            </h3>
            <p className="text-sm text-gray-600">
              Plan your study schedule, set realistic goals, and avoid distractions to stay productive.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-medium mb-2">
              ⏰ Time Management
            </h3>
            <p className="text-sm text-gray-600">
              Plan your study schedule, set realistic goals, and avoid distractions to stay productive.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningTips;