"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ClientLogoGrid from "@/components/site/ClientLogoGrid";
import ClientLogoMarquee from "@/components/site/ClientLogoMarquee";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import { CLIENTS } from "@/lib/constants";
import { publicAsset } from "@/lib/utils";

const testimonials = [
  {
    short:
      "Nick understood how to make every student feel included. He worked with students from various socioeconomic, racial, and other demographic backgrounds to create a sense of identity and belonging...",
    full:
      "To Whom It May Concern,\n\nIt brings me great pleasure to write this letter of recommendation for Nicholas Parks. I have known Nick for nearly two years as a subordinate at Montverde Academy (MVA), an independent day and boarding school with almost 1,300 students in grades PreK3 through post-graduate levels representing 99 countries. Nick worked as a House Parent in residential life and has proven himself to be a capable leader, committed to diversity and inclusion, and dedicated to seeing his students grow within the school and community.\n\nAs a houseparent, Nick accommodated the boarding students in the dormitories. He always found it easy to connect and counsel students through several situations, including homesickness, relationship issues, and other stressors that teens face. His background as an athlete was integral as it helped him relate to several boarding students. He also worked to make those who were outcasts feel included and connected. Nick made the environment exciting, and the students immensely enjoyed his presence. Students commented that he made each person feel at home, even though their families were far away.\n\nNick understood how to make every student feel included. He worked with students from various socioeconomic, racial, and other demographic backgrounds to create a sense of identity and belonging in his wing of the dorm and throughout the campus. As a servant leader, Nick was never too busy to help anyone who needed his assistance. His sense of humor \"really helps lighten the mood,\" as one of his students wrote in the twice-yearly surveys. Nick's performance ratings were far above average compared to other House Parents. His ratings were a direct product of him working hard to build relationships with his students.\n\nNick managed care and quarantine for students who tested positive for COVID-19 while family members were several thousand miles away. He made sure each of the young men on his floor was treated with dignity, although there were several uncertainties about the COVID virus. Nick delivered meals, provided medications throughout the night, and ensured students had the necessities to heal. He did this because of his commitment to empathizing and connecting with others.\n\nNick brings a calm and refreshing attitude to the work environment. He is a people person, works hard to make sure everyone feels included and serves as an authentic leader. Without hesitation, I write this letter of recommendation on his behalf.",
    name: "Mr. John Weaver",
    title: "Montverde Academy | Dean of Students",
  },
  {
    short:
      "Having you as a dorm parent was a blessing. You were a role model that everyone could relate to and learn from. You always treated everyone like we were your brother...",
    full:
      "Having you as a dorm parent was a blessing. You were a role model that everyone could relate to and learn from. You always treated everyone like we were your brother and I know everyone felt your love. I know that everyone felt comfortable speaking to you about anything they needed and your advice was always honest and positive. I have to say thank you for everything because you brought joy to the dorm we could feel the difference when you were on duty. Big thanks Mr. Parks",
    name: "Harrison Hew",
    title: "Cayman Islands Semi Pro Player & Fairleigh Dickinson University",
  },
  {
    short:
      "Nick does a tremendous job of speaking and relating to kids through his stories and different topics. They respond to him well, and that reflects how naturally he connects with them...",
    full:
      "Nick does a tremendous job of speaking and relating to the kids with his stories in various topics. The kids respond and listen to him well and I believe that is a testament to how he connects with them. Great leader.",
    name: "Coach Holley",
    title: "Head Football Coach at Cherokee High School",
  },
  {
    short:
      "Nick spoke life into the team before Regionals and pulled from real experience competing at the highest level. Athletes stayed after to ask questions because the message carried weight...",
    full:
      "Nick spoke life into the team as we prepared to compete in Regionals for Track later in the week. His speech came from personal experiences of competing at the highest level that served as inspiration ahead of an important track meet. Some athletes were eager to ask questions for his insight afterwards.",
    name: "Coach Q",
    title: "Track Coach at Chapel Hill High School",
  },
  {
    short:
      "It was really great having him as a dorm parent. He taught me things what I didn't know about being a professional athlete in America and he always taught me life lessons...",
    full:
      "It was really great having him as a dorm parent. He taught me things what I didn't know about being a professional athlete in America and he always taught me life lessons. He is one of the best role models ever. Glad I got to know him going to miss him.",
    name: "Kierro Stubbs",
    title: "MVA Swimmer & Champion | Rollins College Commit",
  },
  {
    short:
      "Mr Parks having you as a dorm parent was different in such a good way. Most of us went to boarding school and it was hard being away from parents who guide you...",
    full:
      "Mr Parks having you as a dorm parent was different in such a good way, most of us went to boarding school and it was hard being away from parents who guide you and tell what you to do and help you. But I think boarding school is not a place where we needed to be bossed around or controlled but instead we needed a friend, a mentor and someone to talk to when times got rough. And you were that guy, you motivated all of us to keep going and you were such a positive energy around the dorm. But most importantly you supported each and every one of us and I appreciate that greatly. It was fun having you as a dorm parent and we have some memories I'll never forget like beating Harrison and Hunter At basketball (best duo out there) and running warzone all the time.\n\nThank you Mr Parks for being that dorm parent we all needed you are appreciated greatly.",
    name: "Victor",
    title: "Cayman Islands Semi Pro Player & Soccer Player at Tulsa University",
  },
  {
    short:
      "To me, he started off by being a regular dorm parent doing his job like any other. However, as the year flew by, I started to understand his vital role in my development...",
    full:
      "Where should I start? I came to the prestigious Montverde Academy in Florida in 2021 to pursue my dream of playing soccer professionally. I've been in boarding schools since 2019 and each of my experiences was different. One thing I always believed in is that a successful person requires the support of his loved ones unconditionally. I didn't have my family with me through high school and that's where Nicholas Parks comes in. To me, he started off by being a regular dorm parent doing his job like any other. However, as the year flew by, I started to understand his vital role in my development as an athlete and more importantly, as a person. Mr. Parks left the school in May 2021 and it was a heartbreaking and proud moment at the same time. I was sad because I wasn't able to see a friend and a brother anymore but I was also proud to see him going and chasing his ambitions. Even today, whenever I feel stuck in the process, I think about giving him a call because I know that his positivity shines a light on the darkness I am in, giving me hope and a way out. Thank you for everything and above all, you will never beat me in a game of ping-pong.",
    name: "Kaushik",
    title: "Soccer Player for Holy Names College",
  },
  {
    short:
      "As a dorm parent I would definitely say you used your dream and determination to inspire the rest of the boys in the dorm to be the best version of themselves...",
    full:
      "Dear Mr Parks,\n\nTo start off congrats one more time with your opportunity to go and grab your dream! Now as a dorm parent I would definitely say you used your dream and determination to inspire the rest of the boys in the dorm to be the best version of themselves. You were a super chill guy which was great since we were always tired as many of us were athletes, however when something needed to be done we all had respect for you to and get it done.\n\nYou knew how to balance everything out perfectly and always put others first even if they got super annoying, I remember coming back from school one day and seeing a boy on your office just talking and laughing with you, then walking by your office again two hours later and that smile never left his face.\n\nYou were a great dorm parent and an even better man who inspires many to go and be great and having you as my dorm parent was one of the best times of my life.\n\nThank you",
    name: "Jarred Frankle",
    title: "Basketball Player for Converse University",
  },
  {
    short:
      "Having Mr. Parks as a dorm parent was one of the best things that happened to me at Montverde Academy. He was not only my favorite dorm parent but more like a big brother...",
    full:
      "Having Mr. Parks as a dorm parents was one of the best thing that had happened to me at Montverde Academy. He was not only my favorite dorm parent out of the 4 years I have been here, but he was more like a big brother. If I was having trouble with sports and school, I could go to him and ask for advice because he has been in my shoes before. Mr. Parks taught me, don't ever doubt yourself before even trying to do something (20 pushups). Even if you needed to talk to someone, you could always rely on Mr. Parks to be there for you. Even coming to the dorm after failing a math test, his energy would make me smile and forget about everything. He was always willing to do activities with the dorm to make us feel more like a family. To this day I will always have a big brother in ATL.\n\nKind Regards,",
    name: "Hunter Outerbridge",
    title: "Soccer Player for Jacksonville University",
  },
  {
    short:
      "Mr. Nick was my dorm parent during my senior year. He was always respectful and attentive to me whenever I needed his help, and he helped our dorm keep a low rate of contamination...",
    full:
      "Hey Mr. Nick,\n\nI am Gustavo, an international student from Brazil and athlete for UAB Men's soccer, and Mr. Nick was my dorm parent during my senior year. He was always respectful and attentive to me whenever I needed his help, and specially through all the adversities of a international program like Montverde Academy and the risks of COVID contamination back in 2020-2021, he helped our dorm keep a low rate of contaminated people. He was always available to help us even if he couldn't, and even after he moved away from Montverde he still visited us and attended our graduation, which meant a lot to me. Mr. Nick was really impactful for my senior year to be a success, and I thank him a lot for being there for our dorm when we needed him.",
    name: "Gustavo",
    title: "International Student from Brazil | UAB Men's Soccer",
  },
] as const;

const trustedPhotos = [
  {
    src: publicAsset("/images/NickET.jpg"),
    alt: "Nick Parks with Eric Thomas",
    title: "Eric Thomas",
    description: "Leader and the #1 motivational speaker in the world. Eric Thomas Associates.",
  },
  {
    src: publicAsset("/images/NickBishop.jpg"),
    alt: "Nick Parks with Bishop Bronner",
    title: "Bishop Bronner",
    description: "Pastor and founder of Word of Faith Family Cathedral.",
  },
  {
    src: publicAsset("/images/NickServe.jpg"),
    alt: "Nick Parks at Serve",
    title: "Serve",
    description: "A service-centered moment that reflects the mission in action through leadership, presence, and community impact.",
  },
  {
    src: publicAsset("/images/NickWarrick.JPG"),
    alt: "Nick Parks with Warrick Dunn",
    title: "Warrick Dunn",
    description: "Minority owner of the Atlanta Falcons and owner of Warrick Dunn Charities.",
  },
  {
    src: publicAsset("/images/nicroland.jpg"),
    alt: "Nick Parks with Nic Roland",
    title: "Roland Parrish",
    description: "Owner of Parrish Charitable Foundation and 21 McDonald's restaurants.",
  },
  {
    src: publicAsset("/images/NickKarl.JPEG"),
    alt: "Nick Parks with Karl Phillips",
    title: "Karl Phillips",
    description: "Owner of Moving Past Potential and lead digital administrator for APOC Ministries.",
  },
  {
    src: publicAsset("/images/NickDe'Oni.jpeg"),
    alt: "Nick Parks with De'Oni Dew",
    title: "De'Oni Dew",
    description: "Lead production and event administrator for Next Level Living and Next Level Speakers Academy.",
  },
  {
    src: publicAsset("/images/NickHouseofHighlight.jpg"),
    alt: "Nick Parks refereeing a House of Highlights event",
    title: "House of Highlights",
    description: "Refereeing a House of Highlights event streamed to 594k subscribers.",
  },
] as const;

export default function TestimonialsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);

  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Trusted By"
            title={<>Leadership is measured by the trust you build when people are counting on you. Leaving people stronger, seen, and ready for what’s next.</>}
            description="These testimonials reflect the way Nick leads with service, clarity, and conviction across teams, schools, athletics and communities."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="site-container">
          <div className="ink-panel overflow-hidden rounded-[38px] border border-white/10 px-6 py-8 md:px-8">
            <ClientLogoMarquee
              clients={CLIENTS}
              title="Collaborations connected to the Loneless Wolf brand"
              theme="dark"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {trustedPhotos.map((photo, index) => (
            <ScrollReveal
              key={photo.src}
              delayMs={index * 70}
              className="h-full"
              contentClassName="h-full"
            >
              <button
                type="button"
                onClick={() => setExpandedPhoto(index)}
                className="surface-card relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-black/8 p-2 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black/6">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 23vw, 44vw"
                  />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>What people remember is how they felt in the room.</>}
            description="These reflections come from students and athletes who experienced Nick's leadership and presence up close."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={`${item.name}-${index}`}
                delayMs={index * 60}
                className="h-full"
                contentClassName="h-full"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="surface-card card-hover h-full w-full px-6 py-7 text-left"
                >
                  <p className="text-base leading-8 text-foreground/78">"{item.short}"</p>
                  <p className="mt-6 font-heading text-xs uppercase tracking-[0.24em] text-primary">
                    {item.name}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                    {item.title}
                  </p>
                  <span className="btn-ghost mt-6">Read full testimonial</span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container surface-card px-6 py-8 md:px-10">
          <SectionHeading
            eyebrow="Trusted Relationships"
            title={<>Recognizable brands. Real trust. Lasting credibility.</>}
            description="The work travels because the trust behind it is real."
          />
          <ClientLogoGrid
            clients={CLIENTS}
            className="mt-8 sm:grid-cols-2 lg:grid-cols-4"
            showNames
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf name carries because the trust is real.</>}
            description="If your audience needs resilient leadership, practical conviction, and a message that carries after the event, start the conversation here."
            href="/contact"
            ctaLabel="Book Nick"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Schools and teams.",
              "Leadership rooms.",
              "Community impact work.",
            ]}
            tone="dark"
          />
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="surface-card relative max-h-[82vh] w-full max-w-3xl overflow-y-auto px-6 py-8 md:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-foreground"
              aria-label="Close testimonial"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="pr-14 text-lg leading-8 text-foreground/78 whitespace-pre-line">
              "{testimonials[selectedIndex].full}"
            </p>
            <p className="mt-6 font-heading text-xs uppercase tracking-[0.24em] text-primary">
              {testimonials[selectedIndex].name}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
              {testimonials[selectedIndex].title}
            </p>
          </div>
        </div>
      )}

      {expandedPhoto !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setExpandedPhoto(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white p-3 shadow-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setExpandedPhoto(null)}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-foreground"
              aria-label="Close photo"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex max-h-[86vh] flex-col overflow-y-auto rounded-[22px] bg-black/6">
              <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-4 py-4">
                <Image
                  src={trustedPhotos[expandedPhoto].src}
                  alt={trustedPhotos[expandedPhoto].alt}
                  fill
                  className="object-contain object-center"
                  sizes="92vw"
                />
              </div>
              <div className="border-t border-black/8 bg-white px-6 py-5 md:px-8">
                <p className="font-heading text-sm uppercase tracking-[0.22em] text-primary">
                  {trustedPhotos[expandedPhoto].title}
                </p>
                <p className="mt-3 text-base leading-8 text-foreground/78">
                  {trustedPhotos[expandedPhoto].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
