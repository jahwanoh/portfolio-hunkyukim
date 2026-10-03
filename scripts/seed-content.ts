// One-time seed data used by scripts/migrate-to-sanity.ts.
// The live site reads from Sanity; edit content at /studio instead.

export type ImageMedia = {
  url: string;
  width: number;
  height: number;
  alt: string;
  // Artwork metadata (omitted for non-artwork images like the profile photo)
  title?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
};

export type Link = {
  _title: string;
  link: string;
};

export type Project = {
  _title: string;
  _slug: string;
  description: string[];
  year: string;
  venue: string;
  category: string[];
  // Title of the work used as the thumbnail on the home page (defaults to the first work)
  cover?: string;
  media: ImageMedia[];
};

export type AboutSection = {
  title: string;
  items: { text: string; href?: string }[];
};

export type Info = {
  title: string;
  subtitle: string;
  heading: string;
  links: Link[];
  email?: string;
  phone?: string;
  address?: string;
};

export const info: Info = {
  title: "Hun Kyu Kim",
  subtitle: "Painter",
  heading:
    "Hun Kyu Kim builds intricate, fantastical worlds on silk, layering history, social issues and pop culture into allegories laced with humor and satire.",
  links: [
    { _title: "Instagram", link: "https://www.instagram.com/hunkyu.kim/" },
    { _title: "Perrotin", link: "https://www.perrotin.com/artists/Hun_Kyu_Kim/1551#news" },
    { _title: "Artist Talk", link: "https://youtu.be/hqoNpk7Qb10?si=6_gsS-ddv-t2EH11" },
  ],
  email: "hunkyukim1986@gmail.com",
  phone: undefined,
  address: undefined,
};

const artwork = (
  folder: string,
  file: string,
  width: number,
  height: number,
  title: string,
  // "Medium, Dimensions, Year", e.g. "Pigment on silk, 85 × 115 cm, 2023"
  details?: string
): ImageMedia => {
  const [medium, dimensions, year] = details?.split(", ") ?? [];
  return {
    url: `/images/${folder}/${file}`,
    width,
    height,
    alt: title,
    title,
    year,
    medium,
    dimensions,
  };
};

const enemy = "enemy-of-my-enemy-is-my-enemy";
const basel = "art-basel-hong-kong-2021";
const pureWar = "pure-war";

export const projects: Project[] = [
  {
    _title: "Enemy of My Enemy Is My Enemy",
    _slug: enemy,
    year: "2023",
    venue: "High Art, Paris, France",
    category: ["Solo Exhibition"],
    cover: "Etomological RER Map",
    description: [
      "High Art is pleased to present Enemy of My Enemy Is My Enemy, an exhibition of new paintings by Hun Kyu Kim, on view in Paris at 1 rue Fromentin from December 14, 2023 through February 24, 2024.",
      "History is not a monolithic entity; it is at the very least a tapestry woven from the threads of myriad perspectives. Each event, each era, is subject to interpretation based on a current observer's vantage point. Much like viewing an object from different angles, historical narratives can vary depending on the cultural, geographical, and personal lenses through which one examines them. This multiplicity of viewpoints transforms historical narratives from static narratives into dynamic, living entities, a collective breathing tapestry woven from the interplay of countless individual stories.",
      "Historically, those in positions of authority or privilege have often been the primary authors of the narratives that endure. The individuals or groups with social, political, or economic power have typically held the means to document, shape, and preserve narratives. Authors, historians, and chroniclers from privileged backgrounds have traditionally had the resources and platforms to record their version of events, which then become the dominant or mainstream narratives. These narratives, influenced by the values and perspectives of the authors, may reflect a particular worldview that aligns with the interests of the ruling class. As a result, the stories that endure in historical discourse often favor the perspectives of those in power.",
      "In the shadowy corridors of time, the concept of endless war casts a haunting specter over all narratives. Endless war, an unsettling reality that stretches across epochs and continents, transcends the boundaries of individual conflicts. It embodies a ceaseless struggle, a perpetual state of conflict that seems woven into the fabric of history. The roots of endless war delve into the complexities of geopolitical landscapes, ideological clashes, and the relentless pursuit of power. In this unending saga, conflicts emerge, evolve, and sometimes fade into temporary truces, only to be reignited by new sparks of discord. It is a narrative marked by the persistence of strife, where the embers of one conflict smolder even as new fires erupt elsewhere. Endless war is often fueled by a web of complex motives, be they geopolitical ambitions, ideological fervor, or the pursuit of resources. As nations and factions become entangled in this perpetual struggle, the lines between friend and foe blur, alliances shift, and the original catalysts for conflict become obscured by the fog of hostility.",
      "Enemy of my enemy is my enemy.",
    ],
    media: [
      artwork(enemy, "01.jpg", 1600, 2000, "Enemy of My Enemy Is My Enemy (Middle panel)", "Pigment on silk, 175 × 160 cm, 2023"),
      artwork(enemy, "02.jpg", 1428, 2000, "Labyrinth of Glass (Left panel)", "Pigment on silk, 175 × 115 cm, 2023"),
      artwork(enemy, "03.jpg", 1428, 2000, "Deus Ex Machina (Right panel)", "Pigment on silk, 175 × 115 cm, 2023"),
      artwork(enemy, "04.jpg", 1428, 2000, "Backlash of the Blue", "Pigment on silk, 175 × 115 cm, 2023"),
      artwork(enemy, "05.jpg", 1321, 2000, "Yoga under the Blue Whale", "Pigment on silk, 175 × 115 cm, 2023"),
      artwork(enemy, "06.jpg", 2000, 1428, "Butterfly Interference", "Pigment on silk, 115 × 175 cm, 2023"),
      artwork(enemy, "07.jpg", 1428, 2000, "Whitenoise, Leading the Birds", "Pigment on silk, 115 × 85 cm, 2023"),
      artwork(enemy, "08.jpg", 2000, 1428, "Etomological RER Map", "Pigment on silk, 85 × 115 cm, 2023"),
      artwork(enemy, "09.jpg", 2000, 1428, "Coronation at Paludarium", "Pigment on silk, 85 × 115 cm, 2023"),
      artwork(enemy, "10.jpg", 1599, 2000, "House for Rent", "Pigment on silk, 45 × 50 cm, 2023"),
      artwork(enemy, "11.jpg", 1599, 2000, "Magic Goes Wrong", "Pigment on silk, 45 × 50 cm, 2023"),
      artwork(enemy, "12.jpg", 1599, 2000, "Employee of the Year", "Pigment on silk, 45 × 50 cm, 2023"),
      artwork(enemy, "13.jpg", 1599, 2000, "How to Fillet Fish Cheeks in Safe", "Pigment on silk, 45 × 50 cm, 2023"),
      artwork(enemy, "14.jpg", 1599, 2000, "Right People, Right Place, Right Time", "Pigment on silk, 45 × 50 cm, 2023"),
    ],
  },
  {
    _title: "Art Basel Hong Kong 2021",
    _slug: basel,
    year: "2021",
    venue: "Art Basel Hong Kong",
    category: ["Art Fair"],
    cover: "Bubble Wrap Room",
    description: [
      "Works on silk presented at Art Basel Hong Kong 2021.",
    ],
    media: [
      artwork(basel, "01.jpg", 1482, 2000, "Restrospective Lake", "Pigment on silk, 135 × 100 cm, 2021"),
      artwork(basel, "02.jpg", 1445, 2000, "Shotgun Marriage and a Mouse King", "Pigment on silk, 140 × 100 cm, 2020"),
      artwork(basel, "03.jpg", 1532, 2000, "Fake Dragon", "Pigment on silk, 135 × 100 cm, 2020"),
      artwork(basel, "04.jpg", 2000, 1518, "Gallery of Chimps", "Pigment on silk, 135 × 100 cm, 2020"),
      artwork(basel, "05.jpg", 2000, 1477, "Funeral on the Beach", "Pigment on silk, 130 × 95 cm, 2020"),
      artwork(basel, "06.jpg", 2000, 1543, "Herding Flood", "Pigment on silk, 130 × 100 cm, 2020"),
      artwork(basel, "07.jpg", 1734, 2000, "Monk Business", "Pigment on silk, 39 × 45 cm, 2021"),
      artwork(basel, "08.jpg", 1747, 2000, "Origami Circus", "Pigment on silk, 39 × 45 cm, 2021"),
      artwork(basel, "09.jpg", 1743, 2000, "Love Goes On", "Pigment on silk, 39 × 45 cm, 2021"),
      artwork(basel, "10.jpg", 1805, 2000, "Bubble Wrap Room", "Pigment on silk, 38 × 42 cm, 2020"),
      artwork(basel, "11.jpg", 1759, 2000, "Happy Hour", "Pigment on silk, 38 × 45 cm, 2020"),
      artwork(basel, "12.jpg", 1481, 2000, "Signals from the Satellite", "Pigment on silk, 35 × 48 cm, 2020"),
    ],
  },
  {
    _title: "Pure War",
    _slug: pureWar,
    year: "2019",
    venue: "High Art, Paris, France",
    category: ["Solo Exhibition"],
    cover: "Medieval Dog Market",
    description: [
      "Pure War, a solo exhibition of paintings on silk at High Art, Paris, 2019.",
    ],
    media: [
      artwork(pureWar, "01.jpg", 1317, 2000, "Metamorephosis", "Pigment on silk, 120 × 70 cm, 2019"),
      artwork(pureWar, "02.jpg", 2000, 1518, "Bison Hunt", "Pigment on silk, 90 × 120 cm, 2019"),
      artwork(pureWar, "03.jpg", 1404, 2000, "The Tiger King", "Pigment on silk, 110 × 70 cm, 2019"),
      artwork(pureWar, "04.jpg", 2000, 1502, "Run Rabbit Run", "Pigment on silk, 120 × 140 cm, 2019"),
      artwork(pureWar, "05.jpg", 2000, 1624, "Metalic Square", "Pigment on silk, 70 × 90 cm, 2019"),
      artwork(pureWar, "06.jpg", 2000, 1543, "Symbiotic Wind", "Pigment on silk, 100 × 130 cm, 2019"),
      artwork(pureWar, "07.jpg", 2000, 1536, "Dragon Painting"),
      artwork(pureWar, "08.jpg", 1520, 2000, "Sky Horses and a Secret Barn", "Pigment on silk, 140 × 120 cm, 2019"),
      artwork(pureWar, "09.jpg", 2000, 1692, "The Silence of the Lambs", "Pigment on silk, 100 × 120 cm, 2019"),
      artwork(pureWar, "10.jpg", 1551, 2000, "Unpredicted Predictions", "Pigment on silk, 120 × 100 cm, 2019"),
      artwork(pureWar, "11.jpg", 1228, 2000, "Multiple Moon Lights", "Pigment on silk, 120 × 70 cm, 2019"),
      artwork(pureWar, "12.jpg", 1726, 2000, "Medieval Dog Market", "Pigment on silk, 115 × 100 cm, 2019"),
      artwork(pureWar, "13.jpg", 2000, 1674, "Pigotato Virus", "Pigment on silk, 100 × 130 cm, 2019"),
    ],
  },
];

// Featured work shown at the top of the home page
const featuredProject = projects[0];
export const featuredWork: { media: ImageMedia; project: Project } = {
  media: featuredProject.media.find((m) => m.alt === "Etomological RER Map")!,
  project: featuredProject,
};

export const about: { photo: ImageMedia; sections: AboutSection[] } = {
  photo: {
    url: "/images/profile.jpg",
    width: 2000,
    height: 1806,
    alt: "Hun Kyu Kim",
  },
  sections: [
    {
      title: "Education",
      items: [
        { text: "MA Painting, Royal College of Art, London, UK, 2015–2017" },
        { text: "BA Oriental Painting, Seoul National University, Seoul, South Korea, 2005–2013" },
        { text: "BA Aesthetics, Seoul National University, Seoul, South Korea" },
      ],
    },
    {
      title: "Residencies",
      items: [
        { text: "Unit1 Gallery Radical Residency, 03.2019 – 04.2019" },
        { text: "Chadwell Award Residency, 10.2017 – 09.2018" },
      ],
    },
    {
      title: "Prizes",
      items: [
        { text: "2019 RBA Rising Star (Shortlisted)" },
        { text: "2017 Chadwell Award (Winner)" },
        { text: "2017 Griffin Art Prize (Shortlisted)" },
        { text: "2017 Art Gemini Prize (Shortlisted)" },
        { text: "2017 Solo Award (Shortlisted)" },
        { text: "2016 HIX Award, CNB Gallery (Runner-up)" },
        { text: "2016 Contemporary British Artist (Shortlisted)" },
      ],
    },
  ],
};

export const exhibitions: AboutSection[] = [
  {
    title: "Solo Exhibitions",
    items: [
      { text: "2025 The Prayers, Perrotin, Seoul" },
      { text: "2023 Enemy of My Enemy Is My Enemy, High Art, Paris, France", href: "/projects/enemy-of-my-enemy-is-my-enemy" },
      { text: "2019 Pure War, High Art, Paris, France", href: "/projects/pure-war" },
      { text: "2019 Big Picture: Another Universes from the Past, E-Werk, Freiburg, Germany" },
      { text: "2018 Eight Universes and The Machine, The Approach Gallery, London, UK" },
    ],
  },
  {
    title: "Group Exhibitions",
    items: [
      { text: "2023 쉿! Keep Calm and Give a Shit, Buk Seoul Museum of Art, Seoul, South Korea" },
      { text: "2021 환상속의그대, Various Small Fires, Seoul, South Korea" },
      { text: "2021 Korean Eye 2020, Lotte Tower Gallery, Seoul, South Korea" },
      { text: "2020 EGRESS, High Art, Arles, France" },
      { text: "2019 Adieu To Old England, The Kids Are Alright, Cologne, Germany" },
      { text: "2019 Korean Eye 2020, Saatchi Gallery, London, UK" },
      { text: "2019 Bow Open Show, Nunnery Gallery, London, UK" },
      { text: "2019 Raw Garden, Fitzrovia Gallery, London, UK" },
      { text: "2019 RBA Rising Star, Royal Over-Seas House, London, UK" },
      { text: "2019 RBA Annual Exhibition, Mall Galleries, London, UK" },
    ],
  },
];

export const press: AboutSection = {
  title: "Press",
  items: [
    {
      text: "New York Times — “A Rising Art Star Who Draws From His Korean Past”",
      href: "https://www.nytimes.com/2021/05/21/arts/hun-kyu-kim-korea-london.html",
    },
    {
      text: "Financial Times — “Hun Kyu Kim: ‘I hope my work tangles people’s brain’”",
      href: "https://www.ft.com/content/b7b0fa0a-7c77-4b2d-a1d8-1f0ddd20db62",
    },
    {
      text: "CNN — “Ancient Korean silk paintings get a mind-bending contemporary spin”",
      href: "https://www.cnn.com/style/article/hun-kyu-kim-korean-art/index.html",
    },
    {
      text: "중앙일보 — “고려불화 기법과 애니메이션 그림체의 결합, 김훈규 작가 누구?”",
      href: "https://www.joongang.co.kr/article/25102456#home",
    },
    {
      text: "Korea Herald — “Korean artist Kim Hun-kyu wins Chadwell Award”",
      href: "http://www.koreaherald.com/view.php?ud=20171114000862",
    },
  ],
};
