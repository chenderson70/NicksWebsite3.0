import { PrismaClient, ProductType, Role, LeadType } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...\n");

  // ── Users ─────────────────────────────────────────────
  const adminHash = await bcrypt.hash("ChangeMe123!", 12);
  const demoHash = await bcrypt.hash("DemoUser123!", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@nickparks.com" },
    update: {},
    create: {
      email: "admin@nickparks.com",
      passwordHash: adminHash,
      name: "Nick Parks",
      role: Role.ADMIN,
    },
  });

  const demo = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      passwordHash: demoHash,
      name: "Demo User",
      role: Role.CUSTOMER,
    },
  });

  console.log("✅ Users created");

  // ── Products ──────────────────────────────────────────
  const products = await Promise.all([
    prisma.product.create({
      data: {
        type: ProductType.PHYSICAL,
        title: 'The Lone Wolf T-Shirt',
        slug: "lone-wolf-tshirt",
        description: 'Premium cotton tee featuring the iconic Lone Wolf logo. Represent the pack everywhere you go. Bold design on a soft, comfortable fit that moves with you.',
        priceCents: 3499,
        images: ["/images/products/NickShirt2.jpg"],
        category: "Merch",
        featured: true,
        variants: {
          create: [
            { sku: "LW-TEE-M", options: '{"size":"M"}', stockQty: 50, priceCents: 3499 },
            { sku: "LW-TEE-L", options: '{"size":"L"}', stockQty: 50, priceCents: 3499 },
            { sku: "LW-TEE-XL", options: '{"size":"XL"}', stockQty: 50, priceCents: 3499 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.DIGITAL,
        title: "Mindset Playbook eBook",
        slug: "mindset-playbook",
        description: "A comprehensive guide to developing an unshakeable mindset. Packed with exercises, frameworks, and real-world strategies Nick uses with top executives and athletes.",
        priceCents: 1499,
        images: ["/images/products/NickBook.jpg"],
        category: "Books",
        featured: true,
        variants: {
          create: [
            { sku: "MP-EBOOK-PDF", options: '{"format":"PDF"}', stockQty: -1, priceCents: 1499 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.PHYSICAL,
        title: "Pack Mentality Hoodie",
        slug: "pack-mentality-hoodie",
        description: 'Heavyweight fleece hoodie with embroidered "Pack Mentality" design. Built for those cold mornings when the grind doesn\'t stop.',
        priceCents: 6499,
        images: ["/images/products/NickHoodie2.jpg"],
        category: "Merch",
        featured: true,
        variants: {
          create: [
            { sku: "PM-HOOD-M", options: '{"size":"M"}', stockQty: 30, priceCents: 6499 },
            { sku: "PM-HOOD-L", options: '{"size":"L"}', stockQty: 30, priceCents: 6499 },
            { sku: "PM-HOOD-XL", options: '{"size":"XL"}', stockQty: 30, priceCents: 6499 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.PHYSICAL,
        title: "The Grind Wristband Set",
        slug: "grind-wristband-set",
        description: "Set of 3 motivational silicone wristbands. Daily reminders to embrace the grind, stay focused, and lead with purpose.",
        priceCents: 1299,
        images: ["/images/products/NickWristBand.jpg"],
        category: "Merch",
        variants: {
          create: [
            { sku: "GRD-WB-SET", options: '{"type":"set-of-3"}', stockQty: 100, priceCents: 1299 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.SERVICE,
        title: "1-on-1 Coaching Session",
        slug: "1on1-coaching-session",
        description: "A focused 60-minute coaching session with Nick. Whether you're navigating a career transition, building a team, or breaking through a personal plateau — this session is for you.",
        priceCents: 29900,
        images: ["/images/Nick3.JPG"],
        category: "Services",
        featured: true,
        variants: {
          create: [
            { sku: "COACH-1ON1", options: '{"sessions":1}', stockQty: -1, priceCents: 29900 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.SERVICE,
        title: "3-Session Coaching Pack",
        slug: "3-session-coaching-pack",
        description: "Three 60-minute coaching sessions at a discounted rate. Build momentum with consistent accountability and Nick's direct guidance over multiple sessions.",
        priceCents: 74900,
        compareAtPrice: 89700,
        images: ["/images/Nick3.JPG"],
        category: "Services",
        variants: {
          create: [
            { sku: "COACH-3PK", options: '{"sessions":3}', stockQty: -1, priceCents: 74900 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.SERVICE,
        title: "Speaking Engagement Deposit",
        slug: "speaking-engagement-deposit",
        description: "Secure Nick for your next event. This deposit locks in your date. Our team will follow up within 24 hours to finalize details, logistics, and remaining balance.",
        priceCents: 150000,
        images: ["/images/Nick1.JPG"],
        category: "Services",
        variants: {
          create: [
            { sku: "SPEAK-DEP", options: '{"type":"deposit"}', stockQty: -1, priceCents: 150000 },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        type: ProductType.SUBSCRIPTION,
        title: "Premium Membership",
        slug: "premium-membership",
        description: "Unlock the full Nick Parks experience. Members get exclusive access to the content library, courses, community, personalized plans, and member-only events.",
        priceCents: 1999,
        images: ["/images/LoneWolf.JPG"],
        category: "Membership",
        variants: {
          create: [
            { sku: "MEM-MONTHLY", options: '{"plan":"monthly"}', stockQty: -1, priceCents: 1999 },
            { sku: "MEM-ANNUAL", options: '{"plan":"annual"}', stockQty: -1, priceCents: 19999 },
          ],
        },
      },
    }),
  ]);

  console.log(`✅ ${products.length} products created`);

  // ── Speaking Topics ───────────────────────────────────
  await prisma.speakingTopic.createMany({
    data: [
      {
        title: "The Mindset of a Champion",
        slug: "mindset-of-a-champion",
        description: "A high-energy keynote exploring the mental frameworks that separate champions from the rest. Nick draws from his own journey and work with elite athletes and executives to deliver actionable insights on leadership, perseverance, and mental toughness.",
        outcomes: "Audience walks away with 3 mental frameworks for peak performance, a personal action plan, and renewed commitment to excellence.",
        audienceFit: "Corporate teams, leadership conferences, athletic programs, universities",
      },
      {
        title: "Embrace the Grind",
        slug: "embrace-the-grind",
        description: "Nick's signature talk about overcoming adversity and finding purpose in the struggle. Raw, authentic, and deeply personal — this keynote connects with audiences on a human level and challenges them to redefine their relationship with hard work.",
        outcomes: "Attendees gain practical strategies for resilience, a new perspective on setbacks, and tools for building a relentless work ethic.",
        audienceFit: "Motivational events, corporate retreats, schools, faith-based organizations",
      },
      {
        title: "Pack Mentality",
        slug: "pack-mentality",
        description: "A powerful session on teamwork, culture-building, and collective excellence. Nick breaks down what makes winning teams different and gives leaders the blueprint for building a culture of accountability, trust, and shared purpose.",
        outcomes: "Teams learn the 5 pillars of pack culture, how to hold each other accountable, and how to turn individual talent into collective dominance.",
        audienceFit: "Sports teams, corporate departments, startups, military organizations",
      },
    ],
  });

  console.log("✅ Speaking topics created");

  // ── Coaching Packages ─────────────────────────────────
  await prisma.coachingPackage.createMany({
    data: [
      {
        title: "Mindset Mastery",
        description: "A 6-week 1-on-1 program designed to rewire your thinking patterns and build an unshakeable mental foundation. Weekly sessions, daily exercises, and direct access to Nick.",
        priceCents: 249900,
        sessionsCount: 6,
      },
      {
        title: "Leadership Intensive",
        description: "A 12-week deep-dive program for executives and emerging leaders. Covers decision-making under pressure, team dynamics, communication, and executive presence.",
        priceCents: 499900,
        sessionsCount: 12,
      },
      {
        title: "Athlete's Edge",
        description: "Performance coaching for competitive athletes. Combines mental conditioning, visualization techniques, and strategic goal-setting to unlock your next level.",
        priceCents: 349900,
        sessionsCount: 8,
      },
    ],
  });

  console.log("✅ Coaching packages created");

  // ── Testimonials ──────────────────────────────────────
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Jack Jennings",
        title: "President",
        organization: "Smithereen Pest Management",
        quote: "The messages of dealing with adversity, building character and having faith could not have been more timely. Throughout 2024 I was always able to refer back to the message that Nick conveyed as the people of Smithereen navigated an uncertain and challenging time. I truly believe that Nick played a key role in my company's continued success.",
        approved: true,
        featured: true,
        category: "Corporate",
      },
      {
        name: "Dr. Sarah Mitchell",
        title: "VP of Student Affairs",
        organization: "University of Georgia",
        quote: "Nick's presentation to our student-athletes was transformative. The room was completely silent — you could feel the impact of every word. Months later, our coaches are still referencing his message in practice.",
        approved: true,
        featured: false,
        category: "University",
      },
      {
        name: "Marcus Williams",
        title: "Head Coach",
        organization: "Atlanta Falcons — Youth Academy",
        quote: "I've had dozens of speakers come through our program. Nick is different. He doesn't just talk — he connects. Our young athletes were quoting him for weeks. That's the mark of a real impact.",
        approved: true,
        featured: false,
        category: "Athletics",
      },
      {
        name: "Jennifer Brooks",
        title: "Chief People Officer",
        organization: "Delta Air Lines",
        quote: "Nick brought exactly the energy we needed at our annual leadership summit. His message on resilience and adaptability resonated deeply with our team, especially given the challenges our industry has faced.",
        approved: true,
        featured: false,
        category: "Corporate",
      },
      {
        name: "David Chen",
        title: "CEO",
        organization: "Apex Ventures",
        quote: "After Nick's keynote at our company retreat, I saw a measurable shift in how my leadership team approached challenges. His frameworks are practical, not theoretical. Worth every penny.",
        approved: true,
        featured: false,
        category: "Corporate",
      },
      {
        name: "Coach Tanya Richardson",
        title: "Athletic Director",
        organization: "Clemson University",
        quote: "Nick understands athletes because he's lived it. His ability to bridge the gap between sports mentality and life skills is unmatched. Our entire athletic department benefited from his visit.",
        approved: true,
        featured: false,
        category: "University",
      },
      {
        name: "Robert Hayes",
        title: "Regional Manager",
        organization: "Chick-fil-A",
        quote: "We brought Nick in for our operator conference and the feedback was overwhelmingly positive. His talk on servant leadership aligned perfectly with our values. Multiple operators requested him for their local events.",
        approved: true,
        featured: false,
        category: "Corporate",
      },
      {
        name: "Lisa Thompson",
        title: "Executive Coach",
        organization: "Thrive Leadership Group",
        quote: "As a fellow coach, I'm always skeptical of speakers. Nick earned my respect in the first five minutes. His authenticity is refreshing, and his message has depth that most motivational speakers lack.",
        approved: true,
        featured: false,
        category: "Coaching",
      },
    ],
  });

  console.log("✅ Testimonials created");

  // ── Blog Posts ─────────────────────────────────────────
  await prisma.blogPost.createMany({
    data: [
      {
        title: "5 Habits That Separate Champions from the Pack",
        slug: "5-habits-champions",
        content: "Champions aren't born — they're built through daily discipline. After working with hundreds of athletes, executives, and entrepreneurs, I've identified five habits that consistently show up in people who operate at the highest level.\n\n## 1. They Start Before They're Ready\n\nChampions don't wait for perfect conditions. They take imperfect action and adjust along the way. The gap between where you are and where you want to be is closed by movement, not planning.\n\n## 2. They Protect Their Morning\n\nEvery high performer I've coached has a non-negotiable morning routine. It's not about waking up at 4 AM — it's about intentionally starting your day before the world starts demanding things from you.\n\n## 3. They Embrace Discomfort\n\nGrowth lives on the other side of comfort. Champions actively seek out situations that challenge them because they know that's where the real development happens.\n\n## 4. They Study Failure\n\nInstead of running from failure, champions dissect it. They ask: What can I learn? What would I do differently? How does this make me stronger?\n\n## 5. They Invest in Community\n\nNo champion succeeds alone. The strongest performers surround themselves with people who challenge them, support them, and hold them accountable.\n\nWhich of these habits are you already practicing? Which one needs work? That's where your growth edge is.",
        excerpt: "After working with hundreds of athletes and executives, I've identified five habits that consistently show up in people who operate at the highest level.",
        featuredImage: "/images/Nick1.JPG",
        category: "Mindset",
        tags: ["habits", "mindset", "performance", "discipline"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-12-01"),
        seoTitle: "5 Habits That Separate Champions from the Pack | Nick Parks",
        seoDescription: "Discover the five daily habits that consistently show up in top performers, athletes, and executives.",
      },
      {
        title: "Why Adversity Is Your Greatest Teacher",
        slug: "adversity-greatest-teacher",
        content: "Nobody signs up for adversity. But everyone who achieves something meaningful has been shaped by it.\n\nI know this firsthand. The moments that felt like they would break me became the foundation for everything I've built since. Not because the pain was good — but because of what I chose to do with it.\n\n## The Reframe\n\nAdversity doesn't build character. It reveals it. When everything is stripped away — the titles, the comfort, the safety net — what's left is who you really are.\n\n## The Three Responses\n\nWhen adversity hits, you have three options:\n1. **Retreat** — Let it define you and shrink your world\n2. **Survive** — Push through and get back to baseline\n3. **Transform** — Use it as fuel to become something greater\n\nMost people choose option 2. Champions choose option 3.\n\n## The Practice\n\nNext time you face a setback, ask yourself: What is this teaching me that I couldn't learn any other way?\n\nThat question changes everything.",
        excerpt: "Nobody signs up for adversity. But everyone who achieves something meaningful has been shaped by it.",
        featuredImage: "/images/Nick3.JPG",
        category: "Personal Growth",
        tags: ["adversity", "resilience", "growth", "mindset"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-11-15"),
      },
      {
        title: "The Leadership Lesson I Learned on the Field",
        slug: "leadership-lesson-field",
        content: "Some of the most important leadership lessons I've learned didn't come from a boardroom or a business book. They came from the field.\n\nThere's a moment in every game where the plan falls apart. The play breaks down, the defense adjusts, and you're left with nothing but your instincts and your teammates.\n\nThat's where real leadership shows up.\n\n## Leading Without the Playbook\n\nIn business, we love our playbooks — our processes, our frameworks, our strategic plans. And they matter. But the leaders who stand out are the ones who can lead when the playbook is useless.\n\n## Trust Is the Foundation\n\nOn the field, there's no time to micromanage. You have to trust that your teammates have done the work, know their assignments, and will execute. That trust is built in practice, not in the game.\n\nThe same is true in business. If you haven't invested in your team's development during the 'practice' — the day-to-day work — you can't expect them to perform when it matters most.\n\n## The Takeaway\n\nGreat leaders prepare their teams so well that when the unexpected happens, the team doesn't need to be told what to do. They already know.",
        excerpt: "Some of the most important leadership lessons didn't come from a boardroom. They came from the field.",
        category: "Leadership",
        tags: ["leadership", "sports", "teamwork", "trust"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-11-01"),
      },
      {
        title: "Building a Culture of Accountability",
        slug: "culture-of-accountability",
        content: "Accountability gets a bad reputation. People hear the word and think of punishment, blame, and finger-pointing.\n\nBut real accountability — the kind that builds championship teams and world-class organizations — is an act of love.\n\n## What Accountability Really Means\n\nAccountability means I care enough about you and our shared mission to tell you the truth, even when it's uncomfortable. It means holding you to the standard we both agreed to — not because I want to catch you failing, but because I believe in your potential.\n\n## The Three Pillars\n\n1. **Clear Expectations** — You can't hold people accountable to standards they don't know exist\n2. **Consistent Follow-Through** — Accountability that only shows up sometimes isn't accountability\n3. **Grace in the Process** — People will fall short. The question is: do you help them get back up?\n\nWhen these three elements are in place, accountability stops feeling like a burden and starts feeling like support.",
        excerpt: "Real accountability — the kind that builds championship teams — is an act of love.",
        category: "Leadership",
        tags: ["accountability", "culture", "leadership", "teamwork"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-10-15"),
      },
      {
        title: "Mental Toughness Is a Skill, Not a Trait",
        slug: "mental-toughness-skill",
        content: "One of the biggest myths in performance is that mental toughness is something you either have or you don't.\n\nThat's not true. Mental toughness is a skill — and like any skill, it can be developed, practiced, and strengthened over time.\n\n## The Training Framework\n\n### 1. Stress Inoculation\nDeliberately expose yourself to manageable levels of stress. Cold showers, hard workouts, difficult conversations — these are all reps for your mental muscle.\n\n### 2. Self-Talk Management\nThe way you talk to yourself in pressure moments determines your performance. Practice replacing 'I can't' with 'I haven't yet.'\n\n### 3. Visualization\nBefore every high-stakes situation, mentally rehearse success. See yourself performing well. Feel the confidence. This isn't woo-woo — it's neuroscience.\n\n### 4. Recovery Protocol\nMental toughness isn't about never breaking down. It's about how quickly you recover. Build a recovery routine: breathwork, journaling, movement, connection.\n\nStart with one of these practices today. In 30 days, you'll be mentally stronger than you are right now. Guaranteed.",
        excerpt: "Mental toughness is a skill — and like any skill, it can be developed and strengthened over time.",
        category: "Mindset",
        tags: ["mental-toughness", "performance", "training", "mindset"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-10-01"),
      },
      {
        title: "The Entrepreneur's Playbook: Lessons from Sports",
        slug: "entrepreneur-playbook-sports",
        content: "Every successful entrepreneur I know thinks like an athlete. Here are the parallels that have shaped my approach to business.\n\n## Practice > Game Day\nIn sports, you practice 10x more than you play. In business, the equivalent is preparation — research, skill-building, relationship development.\n\n## Film Study\nAthletes watch game film to improve. Entrepreneurs should review their 'film' — analyzing deals, pitches, and decisions to identify patterns.\n\n## The Value of a Coach\nEvery elite athlete has a coach. Yet many entrepreneurs try to figure everything out alone. Get a mentor, hire a coach, join a mastermind.\n\n## Recovery Is Part of the Game\nOvertraining leads to injury. Overworking leads to burnout. Schedule recovery like you schedule meetings.",
        excerpt: "Every successful entrepreneur I know thinks like an athlete. Here are the parallels.",
        category: "Business",
        tags: ["entrepreneurship", "sports", "business", "strategy"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-09-15"),
      },
      {
        title: "How to Show Up When You Don't Feel Like It",
        slug: "show-up-when-you-dont-feel-like-it",
        content: "Motivation is unreliable. Discipline is everything.\n\nThere will be mornings when you don't want to get up. Workouts you want to skip. Calls you want to avoid. That's normal — it's human.\n\nBut the gap between average and exceptional is what you do on those days.\n\n## The 5-Minute Rule\nCommit to just 5 minutes of the thing you're avoiding. Most of the time, momentum takes over and you end up doing the whole thing.\n\n## Identity-Based Commitment\nInstead of asking 'Do I feel like it?' ask 'Is this who I am?' Champions show up because it's part of their identity, not because they feel inspired.\n\n## Stack the Environment\nMake it easier to do the right thing. Lay out your gym clothes. Block distracting apps. Surround yourself with people who hold you to a higher standard.\n\nYour future self will thank you for the days you showed up anyway.",
        excerpt: "Motivation is unreliable. Discipline is everything. The gap between average and exceptional is what you do on the hard days.",
        category: "Personal Growth",
        tags: ["discipline", "motivation", "habits", "consistency"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-09-01"),
      },
      {
        title: "What College Athletes Need to Hear",
        slug: "what-college-athletes-need-to-hear",
        content: "I speak at universities across the country, and there's one message I always make sure to deliver to college athletes: Your sport will end. Your character won't.\n\n## The Identity Trap\nSo many athletes define themselves entirely by their sport. When it ends — through graduation, injury, or circumstance — they face an identity crisis.\n\n## Build the Whole Person\nUse your time as an athlete to develop the skills that transfer: leadership, discipline, time management, teamwork, resilience. These are your real competitive advantages in life.\n\n## The Network Effect\nYour teammates, coaches, and fellow athletes are a network that will serve you for decades. Invest in those relationships now.\n\n## Start Building Early\nDon't wait until your eligibility runs out to think about what's next. Start exploring interests, building skills, and creating connections outside of your sport while you're still in it.",
        excerpt: "Your sport will end. Your character won't. A message every college athlete needs to hear.",
        category: "Athletics",
        tags: ["college", "athletes", "identity", "career"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-08-15"),
      },
      {
        title: "The Power of Your Inner Circle",
        slug: "power-of-inner-circle",
        content: "You are the average of the five people you spend the most time with. I didn't just read that quote — I've lived it.\n\n## Audit Your Circle\nLook at the five people closest to you. Are they pushing you forward or holding you back? Are they growing or stagnant?\n\n## Quality Over Quantity\nYou don't need a huge network. You need a tight circle of people who challenge you, support you, and tell you the truth.\n\n## The Lone Wolf Paradox\nI call my brand 'The Lone Wolf' — but wolves are pack animals. The lone wolf is strongest not because it's alone, but because it chose its pack carefully.\n\nChoose your pack wisely.",
        excerpt: "You are the average of the five people you spend the most time with. Choose your pack wisely.",
        category: "Personal Growth",
        tags: ["community", "relationships", "growth", "networking"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-08-01"),
      },
      {
        title: "From Setback to Setup: A Framework for Comeback",
        slug: "setback-to-setup-framework",
        content: "Every setback is a setup for a comeback. But only if you have a framework for turning pain into progress.\n\n## The RISE Framework\n\n### R — Recognize\nAcknowledge the setback fully. Don't minimize it, don't dramatize it. See it clearly for what it is.\n\n### I — Investigate\nWhat caused it? What was in your control? What wasn't? What can you learn from it?\n\n### S — Strategize\nBased on what you've learned, what's your plan moving forward? What will you do differently? What support do you need?\n\n### E — Execute\nTake action. Imperfect action beats perfect planning every time. Start moving forward, even if the steps are small.\n\nI've used this framework through every major setback in my life. It works because it gives you agency in moments when you feel powerless.\n\nYour comeback starts the moment you decide the setback doesn't define you.",
        excerpt: "Every setback is a setup for a comeback. The RISE framework turns pain into progress.",
        category: "Mindset",
        tags: ["comeback", "resilience", "framework", "adversity"],
        authorId: admin.id,
        published: true,
        publishedAt: new Date("2025-07-15"),
      },
    ],
  });

  console.log("✅ Blog posts created");

  // ── Events ────────────────────────────────────────────
  await prisma.event.createMany({
    data: [
      {
        title: "Annual Leadership Summit Keynote",
        startTime: new Date("2026-04-15T09:00:00"),
        endTime: new Date("2026-04-15T10:30:00"),
        location: "Atlanta, GA — Marriott Marquis",
        description: "Nick delivers the opening keynote at the Southeast Leadership Summit, speaking to 2,000+ executives on 'The Mindset of a Champion.'",
        status: "upcoming",
      },
      {
        title: "University of Michigan Commencement Address",
        startTime: new Date("2026-05-10T14:00:00"),
        endTime: new Date("2026-05-10T16:00:00"),
        location: "Ann Arbor, MI — Michigan Stadium",
        description: "Nick addresses the Class of 2026 with a message of perseverance, purpose, and the power of embracing the grind.",
        status: "upcoming",
      },
      {
        title: "Corporate Coaching Workshop — Delta Air Lines",
        startTime: new Date("2025-11-08T08:00:00"),
        endTime: new Date("2025-11-08T17:00:00"),
        location: "Atlanta, GA — Delta HQ",
        description: "A full-day interactive workshop for Delta's leadership team focused on team culture, accountability, and resilient leadership.",
        status: "past",
      },
      {
        title: "Virtual Summit: The Entrepreneur's Playbook",
        startTime: new Date("2025-09-20T10:00:00"),
        endTime: new Date("2025-09-20T15:00:00"),
        location: "Virtual (Zoom)",
        description: "A half-day virtual summit for entrepreneurs featuring keynote, breakout sessions, and live Q&A with Nick.",
        status: "past",
      },
    ],
  });

  console.log("✅ Events created");

  // ── Coupons ───────────────────────────────────────────
  await prisma.coupon.createMany({
    data: [
      { code: "PACK10", type: "percent", value: 10, active: true },
      { code: "WELCOME20", type: "percent", value: 20, maxUses: 100, active: true },
      { code: "GRIND5", type: "fixed", value: 500, minPurchase: 2500, active: true },
    ],
  });

  console.log("✅ Coupons created");

  console.log("\n🎉 Seed complete!");
  console.log("   Admin login: admin@nickparks.com / ChangeMe123!");
  console.log("   Demo login:  demo@example.com / DemoUser123!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
