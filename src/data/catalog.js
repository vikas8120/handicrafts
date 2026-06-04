import warliVillageTalesImg from '../assets/images/exclusivelane/warli-village-tales.webp';
import wheatSerenityImg from '../assets/images/exclusivelane/wheat-serenity.webp';
import springGardenImg from '../assets/images/exclusivelane/spring-garden.webp';
import tealForestImg from '../assets/images/exclusivelane/teal-forest.webp';
import zenGardenImg from '../assets/images/exclusivelane/zen-garden.webp';
import spiceTroveImg from '../assets/images/exclusivelane/spice-trove.jpg';
import gayatriMantraImg from '../assets/images/exclusivelane/more/gayatri-mantra-wall-hanging.jpg';
import terracottaWarliFrameImg from '../assets/images/exclusivelane/more/terracotta-warli-frame-wall-hanging.jpg';
import birdCollectionImg from '../assets/images/exclusivelane/more/bird-collection-napkin-holder.png';
import tribalRusticImg from '../assets/images/exclusivelane/more/tribal-rustic-pot-faces.jpg';
import brassPeopleKeyHolderImg from '../assets/images/exclusivelane/more/brass-people-key-holder.jpg';
import handPaintedFishesImg from '../assets/images/exclusivelane/more/hand-painted-fishes-napkin-holder.png';
import pyramidLampImg from '../assets/images/exclusivelane/more/pyramid-table-lamp.jpg';
import morrocanFlameLampImg from '../assets/images/exclusivelane/more/morrocan-flame-pendant-lamp.jpg';
import frostedGlassLampImg from '../assets/images/exclusivelane/more/modern-frosted-glass-lamp.jpg';
import shankhTealightImg from '../assets/images/exclusivelane/more/terracotta-shankh-tealight-holder.jpg';
import shimmeringMughalsImg from '../assets/images/exclusivelane/more/shimmering-mughals-tealights.jpg';
import inayaatDhoopDaniImg from '../assets/images/exclusivelane/more/inayaat-dhoop-dani.jpg';
import babyCuckoosImg from '../assets/images/exclusivelane/more/baby-cuckoos.jpg';
import frogMaidenImg from '../assets/images/exclusivelane/more/frog-maiden.jpg';
import rhombusRumblesImg from '../assets/images/exclusivelane/arjun/rhombus-rumbles.jpg';
import brassPeopleOnTeakWoodImg from '../assets/images/exclusivelane/arjun/brass-people-on-teak-wood.jpg';
import birdsOnPlanksImg from '../assets/images/exclusivelane/arjun/birds-on-planks.jpg';
import tribalBordersImg from '../assets/images/exclusivelane/arjun/tribal-borders.jpg';
import calmFaceImg from '../assets/images/exclusivelane/meera/calm-face.jpg';
import meditatingFaceImg from '../assets/images/exclusivelane/meera/meditating-face.jpg';
import sapphireSwirlImg from '../assets/images/exclusivelane/meera/sapphire-swirl-vase.jpg';
import whispersOfWarliImg from '../assets/images/exclusivelane/meera/whispers-of-warli-vase.jpg';
import kalpavrikshaAImg from '../assets/images/exclusivelane/ishaan/kalpavriksha-a.webp';
import kalpavrikshaBImg from '../assets/images/exclusivelane/ishaan/kalpavriksha-b.webp';
import laxmiGaneshAImg from '../assets/images/exclusivelane/ishaan/laxmi-ganesh-a.webp';
import laxmiGaneshBImg from '../assets/images/exclusivelane/ishaan/laxmi-ganesh-b.webp';
import juteFlaresImg from '../assets/images/exclusivelane/nadia/jute-flares-1.jpg';
import juteMarvelsImg from '../assets/images/exclusivelane/nadia/jute-marvels-a.jpg';
import juteShimmersImg from '../assets/images/exclusivelane/nadia/jute-shimmers-1.jpg';
import cottonSparklesImg from '../assets/images/exclusivelane/nadia/cotton-sparkles-1.jpg';

const svgArt = (a, b, c, label) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${a}" />
        <stop offset="55%" stop-color="${b}" />
        <stop offset="100%" stop-color="${c}" />
      </linearGradient>
      <radialGradient id="r" cx="30%" cy="20%" r="75%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.7" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="1200" height="1400" fill="url(#g)" />
    <ellipse cx="280" cy="260" rx="360" ry="320" fill="url(#r)" />
    <path d="M180 1020c140-260 230-390 340-390 130 0 190 160 290 160 102 0 190-100 270-260 0 0 48 360-94 520-142 160-356 238-524 238-188 0-312-98-282-268z" fill="#ffffff" fill-opacity="0.12" />
    <circle cx="900" cy="340" r="140" fill="#ffffff" fill-opacity="0.09" />
    <text x="80" y="1300" font-family="Georgia, serif" font-size="64" fill="#fff" fill-opacity="0.88">${label}</text>
  </svg>
  `)}`;

export const collections = [
  {
    id: 'warli-village-tales',
    category: 'Warli Village Tales',
    title: "ExclusiveLane 'Warli Village Tales' Ceramic Tea Cups & Kettle Set",
    note: '6 tea cups and 1 kettle, microwave safe, handcrafted in ceramic.',
    image: warliVillageTalesImg,
  },
  {
    id: 'wheat-serenity',
    category: 'Wheat Serenity',
    title: "ExclusiveLane 'Wheat Serenity' Porcelain Serving Platter",
    note: 'Set of 1, 320 ml, microwave safe, hand glazed.',
    image: wheatSerenityImg,
  },
  {
    id: 'spring-garden',
    category: 'Spring Garden',
    title: "ExclusiveLane 'Spring Garden' Ceramic Dinner Set",
    note: '8 pieces, serving for 4, handcrafted and microwave safe.',
    image: springGardenImg,
  },
  {
    id: 'teal-forest',
    category: 'Teal Forest',
    title: "'Teal Forest' Hand Glazed Ceramic Serving Bowls",
    note: 'Set of 2, 600 ml, hand-etched, microwave safe.',
    image: tealForestImg,
  },
  {
    id: 'zen-garden',
    category: 'Zen Garden',
    title: "'Zen Garden' Hand Glazed Ceramic Tea & Coffee Mugs",
    note: 'Set of 2, 330 ml, microwave safe.',
    image: zenGardenImg,
  },
  {
    id: 'spice-trove',
    category: 'The Spice Trove',
    title: "'Peacock Hand-Etched' Handpainted Spice Box With Spoon In Brass",
    note: '7 containers, 110 ml, ornate brass detailing.',
    image: spiceTroveImg,
  },
  {
    id: 'gayatri-mantra',
    category: 'Wall Decor',
    title: 'Gayatri Mantra Terracotta Wall Hanging',
    note: 'A devotional wall piece with terracotta warmth and handcrafted lettering.',
    image: gayatriMantraImg,
  },
  {
    id: 'terracotta-warli-frame',
    category: 'Wall Decor',
    title: '8 Terracotta Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging',
    note: 'A framed folk-art installation with terracotta vessels and wood structure.',
    image: terracottaWarliFrameImg,
  },
  {
    id: 'bird-collection',
    category: 'Napkin Holders',
    title: 'Bird Collection Brown Elegant Napkin Holder In Sheesham Wood',
    note: 'Sculpted everyday utility with an artisanal wood finish.',
    image: birdCollectionImg,
  },
  {
    id: 'tribal-rustic-pot-faces',
    category: 'Showpieces',
    title: "'Tribal Rustic Pot-Faces' In Terracotta With Jute Detailing Pots Showpieces",
    note: 'Set of 2 decorative objects with rustic character and tactile detailing.',
    image: tribalRusticImg,
  },
  {
    id: 'brass-people-key-holder',
    category: 'Key Holders',
    title: "'Brass People On Teak Wood' Warli Hand-Painted Key Holder With Dhokra Art",
    note: 'A functional wall piece with Warli art and Dhokra brass accents.',
    image: brassPeopleKeyHolderImg,
  },
  {
    id: 'hand-painted-fishes',
    category: 'Napkin Holders',
    title: 'Hand-Painted Fishes Napkin Holder In Sheesham Wood',
    note: 'A playful, handmade tabletop accent with folk-inspired detail.',
    image: handPaintedFishesImg,
  },
  {
    id: 'pyramid-lamp',
    category: 'Lighting',
    title: '35.6 cm Pyramid Table Lamp In Sheesham Wood',
    note: 'A warm ambient lamp with crisp geometry and wood texture.',
    image: pyramidLampImg,
  },
  {
    id: 'morrocan-flame',
    category: 'Lighting',
    title: "'Morrocan Flame' Hand-etched Pendant Lamp In Iron",
    note: 'Matte iron pendant lighting with a sculptural flame-like silhouette.',
    image: morrocanFlameLampImg,
  },
  {
    id: 'modern-frosted-glass',
    category: 'Lighting',
    title: '25.4 cm Modern Frosted Glass Table Lamp In Sheesham Wood',
    note: 'A modern lamp pairing frosted glass with a grounded wood base.',
    image: frostedGlassLampImg,
  },
  {
    id: 'shankh-tealight',
    category: 'Lighting',
    title: 'Terracotta Handpainted Shankh Shaped Table Tea Light Holder',
    note: 'Terracotta tea light form with a soft glow-friendly silhouette.',
    image: shankhTealightImg,
  },
  {
    id: 'shimmering-mughals',
    category: 'Lighting',
    title: "'Shimmering Mughals' Floral Hand-painted Tea-Light Holders In Ceramic",
    note: 'Set of 6 handcrafted ceramic tea-light holders with floral motifs.',
    image: shimmeringMughalsImg,
  },
  {
    id: 'inayaat-dhoop-dani',
    category: 'Lighting',
    title: "'Inayaat' Dhoop Dani Handcarved Brass Incense Burner",
    note: 'A brass incense burner with hand-etched detail and ceremonial presence.',
    image: inayaatDhoopDaniImg,
  },
  {
    id: 'baby-cuckoos',
    category: 'Garden',
    title: "'Baby Cuckoos' Handmade Decorative Garden Table Cum Wall Showpiece In Terracotta",
    note: 'A charming terracotta garden showpiece with a whimsical silhouette.',
    image: babyCuckoosImg,
  },
  {
    id: 'frog-maiden',
    category: 'Garden',
    title: "'Frog Maiden' Handpainted Garden Decorative Showpiece In Metal",
    note: 'A small decorative garden accent with handpainted character.',
    image: frogMaidenImg,
  },
];

export const artisans = [
  {
    id: '1',
    name: 'Meera Banerji',
    specialty: 'Ceramic Alchemy',
    award: 'Gold Medal, Kyoto Craft Biennale',
    story: 'Shapes vessels in quiet kiln light using ancient coil methods and mineral ash glazing.',
    portrait: calmFaceImg,
    portfolio: [calmFaceImg, meditatingFaceImg, sapphireSwirlImg, whispersOfWarliImg],
  },
  {
    id: '2',
    name: 'Arjun Sethi',
    specialty: 'Wood Relief Mastery',
    award: 'Featured, Milan Design Week',
    story: 'Transforms reclaimed walnut into sculptural panels with a deep satin finish.',
    portrait: rhombusRumblesImg,
    portfolio: [rhombusRumblesImg, brassPeopleOnTeakWoodImg, birdsOnPlanksImg, tribalBordersImg],
  },
  {
    id: '3',
    name: 'Nadia Farooqi',
    specialty: 'Textile Narratives',
    award: 'Heritage Fellowship, New Delhi',
    story: 'Weaves layered narratives into hand-spun fabrics and ceremonial wall pieces.',
    portrait: juteFlaresImg,
    portfolio: [juteFlaresImg, juteMarvelsImg, juteShimmersImg, cottonSparklesImg],
  },
  {
    id: '4',
    name: 'Ishaan Verma',
    specialty: 'Metal and Stone Forms',
    award: 'Awwwards Honorable Mention',
    story: 'Balances bronze, stone, and negative space into highly tactile contemporary relics.',
    portrait: kalpavrikshaAImg,
    portfolio: [kalpavrikshaAImg, kalpavrikshaBImg, laxmiGaneshAImg, laxmiGaneshBImg],
  },
];

export const gallery = [
  { id: 'g1', title: 'Warli Village Tales', caption: 'Ceramic tea cups and kettle set presented like a collector’s collection piece.', image: warliVillageTalesImg },
  { id: 'g2', title: 'Wheat Serenity', caption: 'A porcelain serving platter with a calm, minimal palette.', image: wheatSerenityImg },
  { id: 'g3', title: 'Spring Garden', caption: 'A floral dinner set that brightens the tabletop with handcrafted pattern.', image: springGardenImg },
  { id: 'g4', title: 'Teal Forest', caption: 'Hand-glazed bowls with a cool tonal mood and refined surface pattern.', image: tealForestImg },
  { id: 'g5', title: 'Zen Garden', caption: 'Tea and coffee mugs with a quiet, balanced silhouette.', image: zenGardenImg },
  { id: 'g6', title: 'Gayatri Mantra Terracotta Wall Hanging', caption: 'A sculptural wall piece with devotional typography.', image: gayatriMantraImg },
  { id: 'g7', title: 'Bird Collection Brown Elegant Napkin Holder', caption: 'A wood-crafted tabletop utility object with soft curves.', image: birdCollectionImg },
  { id: 'g8', title: 'Morrocan Flame Pendant Lamp', caption: 'A dramatic lighting object with a warm ambient glow.', image: morrocanFlameLampImg },
  { id: 'g9', title: 'Shimmering Mughals Tea-Light Holders', caption: 'A set of floral tea-light holders with luminous detail.', image: shimmeringMughalsImg },
  { id: 'g10', title: 'Baby Cuckoos Terracotta Showpiece', caption: 'A whimsical garden accent with handcrafted charm.', image: babyCuckoosImg },
];

export const showcasePanels = [
  { title: 'Wall Hanging', image: gayatriMantraImg, note: 'Terracotta, inscription, and wall presence.' },
  { title: 'Ceramic Dinner Set', image: springGardenImg, note: 'Pattern, scale, and tabletop abundance.' },
  { title: 'Table Lamp', image: pyramidLampImg, note: 'Light, wood, and a sculpted silhouette.' },
  { title: 'Key Holder', image: brassPeopleKeyHolderImg, note: 'Functional wall art with brass detail.' },
  { title: 'Tea-Light Holders', image: shimmeringMughalsImg, note: 'A radiant set with floral surfaces.' },
  { title: 'Garden Showpiece', image: frogMaidenImg, note: 'A small accent with character and color.' },
];

export const materials = [
  { name: 'Wood', color: '#A5723D', description: 'Warm grain, sculpted edges, and a satin depth that reads like heirloom furniture.' },
  { name: 'Clay', color: '#C7855C', description: 'Hand-thrown, kiln-fired, and finished with mineral glazes that feel alive.' },
  { name: 'Stone', color: '#A8B59C', description: 'Quiet mass and cool tactility, framed like a contemporary artifact.' },
  { name: 'Metal', color: '#B67A45', description: 'Brushed bronze and copper tones that glow under directional light.' },
  { name: 'Textile', color: '#4B3425', description: 'Layered fibers and ceremonial weave structures with soft shadow play.' },
];

export const processStages = [
  { step: 'Design', title: 'Concept sketches become the object’s silhouette.' },
  { step: 'Material Selection', title: 'We choose grain, clay body, stone cut, or weave density.' },
  { step: 'Handcrafting', title: 'The object is built slowly, with visible human intervention.' },
  { step: 'Finishing', title: 'Surface polishing, glazing, sanding, and tonal balancing.' },
  { step: 'Quality Check', title: 'Light, touch, and balance are examined from every angle.' },
  { step: 'Packaging', title: 'Each piece is wrapped as if it were entering a private archive.' },
];

export const recognition = [
  { label: 'Years of Craft', value: '26+' },
  { label: 'International Exhibitions', value: '48' },
  { label: 'Master Artisans', value: '18' },
  { label: 'Collector Editions', value: '120+' },
];
