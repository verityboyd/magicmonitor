import { SparklesText } from "../components/ui/sparkles-text";
import PhotoCreditCard from "../components/features/PhotoCreditCard";

export default function Page() {
  return (
    <main>
      <SparklesText className="text-5xl text-center pb-5 pt-10">
        Image Credits
      </SparklesText>
      <div className="text-center py-10">
        Thank you to these photographers for their images of the Disney Parks.
      </div>
      <div className="grid grid-cols-4 gap-8 mx-auto p-8">
        <PhotoCreditCard
          unsplashLink={"#"}
          imgUrl={"/assets/wdw.jpg"}
          altText={"Magic Kingdom"}
          author={"Unknown"}
        />
        <PhotoCreditCard
          unsplashLink={"#"}
          imgUrl={"/assets/dak.jpg"}
          altText={"Animal Kingdom"}
          author={"Unknown"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/round-silver-building-A9RK7aRF_GQ"
          }
          imgUrl={"/assets/epcot.jpg"}
          altText={"Epcot"}
          author={"Nathan Langer"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/white-and-black-robot-on-brown-rock-formation-during-daytime-gVeFgjUE_r4"
          }
          imgUrl={"/assets/hollywoodstudios.jpg"}
          altText={"Hollywood Studios"}
          author={"Vinesh Hardeo"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/tokyo-disneyland-signage-JXfHZYoEIM0"
          }
          imgUrl={"/assets/tokyodl.jpg"}
          altText={"Tokyo Disneyland"}
          author={"Roméo A."}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/a-wooden-house-with-a-clock-on-the-side-of-it-damC_m92lO0"
          }
          imgUrl={"/assets/tokyods.jpg"}
          altText={"Tokyo DisneySea"}
          author={"Bubba"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/brown-and-blue-concrete-castle-under-blue-sky-during-daytime-BLYq8Qk8Q98"
          }
          imgUrl={"/assets/shanghai.jpg"}
          altText={"Shanghai Disney Resort"}
          author={"Capricorn Song"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/a-large-castle-with-a-sky-background-GJJPNMiToMw"
          }
          imgUrl={"/assets/hongkongdl.jpg"}
          altText={"Hong Kong Disneyland"}
          author={"Niana"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/white-and-brown-concrete-building-near-body-of-water-during-daytime-tTjspeLiy1M"
          }
          imgUrl={"/assets/dl.jpg"}
          altText={"Disneyland"}
          author={"Avel Chuklanov"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/blue-ferris-wheel-Mvav3d0Ki2k"
          }
          imgUrl={"/assets/dca.jpg"}
          altText={"Disney California Adventure"}
          author={"Brandi Alexandra"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/people-walking-on-sidewalk-near-brown-concrete-building-during-daytime-g3CR0UJ1CyM"
          }
          imgUrl={"/assets/dlp.jpg"}
          altText={"Disneyland Paris"}
          author={"Bastien Nvs"}
        />
        <PhotoCreditCard
          unsplashLink={
            "https://unsplash.com/photos/walt-disney-studios-tower-JPzj2piT4-w"
          }
          imgUrl={"/assets/daw.jpg"}
          altText={"Disney Adventure World"}
          author={"Seif Abukhalaf"}
        />
      </div>
    </main>
  );
}
