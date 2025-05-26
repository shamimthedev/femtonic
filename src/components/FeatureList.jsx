const features = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers"
];

export default function FeatureList() {
  return (
    <ul className="mb-6 space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center text-white text-base font-medium md:font-semibold">
          <span className="text-yellow-400 mr-2 mt-1">✨</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
