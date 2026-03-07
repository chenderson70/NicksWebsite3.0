export const BLOG_POSTS = [
  {
    slug: "why-adversity-is-your-greatest-teacher",
    title: "Why Adversity Is Your Greatest Teacher",
    excerpt:
      "Every setback carries instruction if you stay present long enough to learn from it.",
    category: "Mindset",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "/images/NickTalking.jpg",
    body: [
      "Every great comeback story starts with a setback. Most people want the confidence of the comeback without the cost of the valley, but the valley is where perspective gets refined.",
      "Adversity reveals where our identity is too fragile, where our habits are too shallow, and where our preparation still depends on ideal conditions. That is uncomfortable, but it is useful.",
      "If you stay honest through the pressure, adversity stops being a random interruption and starts becoming instruction. It teaches endurance, response, and what it really means to keep moving when the room gets quiet.",
      "The lesson is not that pain is good. The lesson is that pain can clarify what comfort was hiding. That is where growth begins.",
    ],
  },
  {
    slug: "the-pack-mentality-building-teams-that-win",
    title: "The Pack Mentality: Building Teams That Win",
    excerpt:
      "Strong teams are built on standards, trust, and shared responsibility, not just talent.",
    category: "Leadership",
    date: "2025-01-08",
    readTime: "6 min read",
    image: "/images/NickServe.jpg",
    body: [
      "Talent can create highlights, but standards create consistency. Teams do not stay strong because everyone feels inspired at the same time. They stay strong because the expectations are clear and the trust is earned.",
      "The healthiest teams do not confuse chemistry with avoidance. They can tell the truth, challenge each other directly, and keep the mission larger than ego.",
      "A winning team learns how to carry pressure together. That means accountability is normal, communication is clean, and effort does not need to be negotiated every day.",
      "If you want better team results, raise the standard for what everyone owes the group. That is where momentum gets durable.",
    ],
  },
  {
    slug: "5-morning-habits-that-changed-my-life",
    title: "5 Morning Habits That Changed My Life",
    excerpt:
      "A stronger day usually starts with a more intentional first hour.",
    category: "Athletics",
    date: "2025-01-01",
    readTime: "4 min read",
    image: "/images/NickHomepage.JPG",
    body: [
      "Morning habits matter because they shape attention before the day starts making demands. The first hour creates the tone for how you handle pressure later.",
      "Simple habits outperform dramatic systems. Wake up with intention, move your body, get quiet long enough to think, and define the non-negotiable work before the noise starts.",
      "When your mornings are disciplined, your emotions stop deciding the quality of your output. That creates steadiness even when the schedule gets crowded.",
      "The goal is not perfection. The goal is rhythm. Small habits repeated long enough start to shape identity.",
    ],
  },
  {
    slug: "what-the-nfl-taught-me-about-leadership",
    title: "What the NFL Taught Me About Leadership",
    excerpt:
      "Leadership gets clearer when the environment is competitive, fast, and unforgiving.",
    category: "Leadership",
    date: "2024-12-18",
    readTime: "6 min read",
    image: "/images/NickWarrick.JPG",
    body: [
      "Competitive environments expose whether leadership is performative or real. Under pressure, leaders either reduce confusion or add to it.",
      "The best leaders communicate early, stay emotionally stable, and keep everyone connected to the mission when tension rises. They do not waste energy trying to appear strong. They make the room more usable.",
      "Leadership is also service. The leader carries standards, but the leader also creates clarity so other people can execute their role with confidence.",
      "In high-performance spaces, credibility is built through consistency. People follow what they can trust, not what merely sounds good.",
    ],
  },
  {
    slug: "the-power-of-showing-up",
    title: "The Power of Showing Up",
    excerpt:
      "Consistency keeps compounding even when the results have not caught up yet.",
    category: "Mindset",
    date: "2024-12-11",
    readTime: "5 min read",
    image: "/images/NickHouseofHighlight.jpg",
    body: [
      "People often underestimate the power of repeated presence. Showing up does not feel dramatic, which is exactly why many people abandon it too early.",
      "Momentum is usually built through ordinary repetitions: another workout, another rep, another difficult conversation, another day of staying aligned to the work.",
      "Showing up is not glamorous, but it is revealing. It shows what you are willing to do when the reward is delayed.",
      "If the outcome matters, the repetitions matter. Stay long enough for consistency to become a force.",
    ],
  },
  {
    slug: "how-to-turn-pain-into-purpose",
    title: "How to Turn Pain Into Purpose",
    excerpt:
      "Pain does not automatically create purpose, but honest reflection can.",
    category: "Faith",
    date: "2024-12-04",
    readTime: "7 min read",
    image: "/images/NickET.jpg",
    body: [
      "Pain can easily become identity if it is left unexamined. Purpose usually begins when you decide the wound will not have the final word on who you are.",
      "Reflection matters. Ask what the pain exposed, what it refined, and what responsibility it gave you toward other people walking through something similar.",
      "Purpose is rarely instant. It grows as you respond well over time, keep your heart open, and allow your story to become useful beyond yourself.",
      "The goal is not to romanticize pain. The goal is to refuse to waste it.",
    ],
  },
] as const;

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

