import Hero from "/src/Component/Hero.jsx";

const imageUrls = [
  "https://kibonavigator.vercel.app/assets/kibogh.JPG",
  "src/assets/images/kibo-nigeria.jpg",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

const kiboCountries = ["Ghana", "Nigeria", "Kenya"];

export default function Carousel() {
  return (
    <div>
      <Hero images={imageUrls} countries={kiboCountries} />
    </div>
  );
}
