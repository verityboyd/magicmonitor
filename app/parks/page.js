import ParkImageCard from "../components/features/ParkImageCard";

//TODO fix sizes to be uniform
export default function Page() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 gap-8 mx-auto p-8">
        <ParkImageCard
          parkId={6}
          imgUrl={"/assets/wdw.jpg"}
          altText={"Magic Kingdom"}
          parkName={"Magic Kingdom"}
        />
        <ParkImageCard
          parkId={8}
          imgUrl={"/assets/dak.jpg"}
          altText={"Animal Kingdom"}
          parkName={"Animal Kingdom"}
        />
        <ParkImageCard
          parkId={5}
          imgUrl={"/assets/epcot.jpg"}
          altText={"Epcot"}
          parkName={"Epcot"}
        />
        <ParkImageCard
          parkId={7}
          imgUrl={"/assets/hollywoodstudios.jpg"}
          altText={"Hollywood Studios"}
          parkName={"Hollywood Studios"}
        />
        <ParkImageCard
          parkId={274}
          imgUrl={"/assets/tokyodl.jpg"}
          altText={"Tokyo Disneyland"}
          parkName={"Tokyo Disneyland"}
        />
        <ParkImageCard
          parkId={275}
          imgUrl={"/assets/tokyods.jpg"}
          altText={"Tokyo DisneySea"}
          parkName={"Tokyo DisneySea"}
        />
        <ParkImageCard
          parkId={30}
          imgUrl={"/assets/shanghai.jpg"}
          altText={"Shanghai Disney Resort"}
          parkName={"Shanghai Disney Resort"}
        />
        <ParkImageCard
          parkId={31}
          imgUrl={"/assets/hongkongdl.jpg"}
          altText={"Hong Kong Disneyland"}
          parkName={"Hong Kong Disneyland"}
        />
        <ParkImageCard
          parkId={16}
          imgUrl={"/assets/dl.jpg"}
          altText={"Disneyland"}
          parkName={"Disneyland"}
        />
        <ParkImageCard
          parkId={17}
          imgUrl={"/assets/dca.jpg"}
          altText={"Disney California Adventure"}
          parkName={"Disney California Adventure"}
        />
        <ParkImageCard
          parkId={4}
          imgUrl={"/assets/dlp.jpg"}
          altText={"Disneyland Paris"}
          parkName={"Disneyland Paris"}
        />
        <ParkImageCard
          parkId={28}
          imgUrl={"/assets/daw.jpg"}
          altText={"Disney Adventure World"}
          parkName={"Disney Adventure World"}
        />
      </div>
    </div>
  );
}
