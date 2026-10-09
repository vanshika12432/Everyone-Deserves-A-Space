export const S3 = "https://therapist-prod-public.s3.ap-south-1.amazonaws.com";

export const therapist = {
  name: "Vanshika Aggarwal",
  tagline: "Everyone Deserves A Space",
  intro:
    "I am a therapist and I believe that everyone deserves a space where they feel loved, cared for, and feel enough.",
  photo: `${S3}/therapist/profile/682836e065de01f7466ee91a/1782929520920-IMG-20260623-WA0058.jpg`,
  cover: `${S3}/therapist/profileCover/682836e065de01f7466ee91a/1749211403482-ChatGPT%20Image%20Jun%206,%202025,%2005_32_00%20PM.png`,
  footerImg: `${S3}/therapist/profileFooter/682836e065de01f7466ee91a/1749213705870-Untitled%20design.png`,
  email: "vanshika@everyonedeservesaspace.com",
  location: "New Delhi, Delhi, India",
  languages: ["Hindi", "English"],
  expertise: ["Individual Therapy"],
  stats: { rating: "4.8/5", clients: "32+", years: "1+" },
  education: [
    { degree: "Masters in Applied Psychology", school: "Netaji Subhash University of Technology" },
    { degree: "Bachelor's (Hons.) Psychology", school: "Lady Shri Ram College for Women" },
  ],
  philosophy:
    "Therapy, to me, is not just about “fixing” what feels broken. It’s about exploring who you are, what matters to you, and how you want to grow. Together we focus on your strengths, values and hopes, making room for insight, healing and change. It isn’t only about survival, it is about thriving.",
  booking: "https://pages.pracflow.ai/VanshikaAggarwal",
  instagram: "https://www.instagram.com/everyonedeservesaspace",
  linkedin: "https://www.linkedin.com/in/vanshika-aggarwal-edas/",
};

export const events = [
  {
    slug: "what-even-is-love",
    title: "What Even Is Love?",
    type: "Reflective Circle",
    mode: "Online · Small group",
    image: `${S3}/appointment/services/682836e065de01f7466ee91a/1788632701234-1000125018.png`,
    summary: "Love can feel like a million things. Reflect on what it means to you and how you express it.",
    body: [
      "Love can sometimes feel like the most complicated thing in the world, and on other days as simple as a warm hug, a familiar voice, or feeling at home with someone.",
      "This session is an invitation to reflect on what love means for you, how you experience it, and how you choose to express it.",
    ],
    bookingUrl: "https://pages.pracflow.ai/events/6a9c5cce7f243fbd324e4333",
  },
  {
    slug: "my-relationship-with-my-body",
    title: "My Relationship With My Body",
    type: "Reflective Circle",
    mode: "Online · Small group",
    image: `${S3}/appointment/services/682836e065de01f7466ee91a/1791089331083-1000147625.png`,
    summary: "Gently reflect on the relationship you have with your body, and connect with others doing the same.",
    body: [
      "Our body is the home of our soul, yet it is often compared and judged by external beauty standards. Our relationship with our body is one of the most important relationships we will ever have.",
      "This session is an invitation to gently reflect on that relationship, reconnect with yourself, and connect with others.",
    ],
    bookingUrl: "https://pages.pracflow.ai/events/6ac1d412e29921f6013174bc",
  },
];

export const circleExplainer =
  "A reflective circle is a small group space where people pause, reflect and share what’s on their mind in a safe, supportive environment. You can talk about your thoughts, feelings or experiences, or simply listen. Sharing is always optional.";

// PLACEHOLDER testimonials. Replace with real, consented client quotes.
export const testimonials = [
  { name: "Aanya S.", text: "I walked in expecting to be analysed and walked out feeling heard. Sessions feel unhurried and kind." },
  { name: "Rohan M.", text: "The reflective circle was the first time I said something out loud and didn’t feel judged for it." },
  { name: "Meera K.", text: "Vanshika has a way of making you feel like you’re already enough. I look forward to our sessions." },
  { name: "Ishita P.", text: "Booking was easy and the space felt safe from the very first minute." },
  { name: "Kabir D.", text: "I came for one thing and discovered I wanted to understand myself much better. Grateful for that." },
  { name: "Tanvi R.", text: "Warm, grounded and genuinely present. The group circle reminded me I’m not alone." },
];
