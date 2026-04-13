import ParkImageCard from "../components/features/ParkImageCard";

//TODO fix sizes to be uniform
export default function Page() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 gap-8 mx-auto p-8">
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/wdw.jpg"}
          altText={"Magic Kingdom"}
          parkName={"Magic Kingdom"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/dak.jpg"}
          altText={"Animal Kingdom"}
          parkName={"Animal Kingdom"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/epcot.jpg"}
          altText={"Epcot"}
          parkName={"Epcot"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/hollywoodstudios.jpg"}
          altText={"Hollywood Studios"}
          parkName={"Hollywood Studios"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/tokyodl.jpg"}
          altText={"Tokyo Disneyland"}
          parkName={"Tokyo Disneyland"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/tokyods.jpg"}
          altText={"Tokyo DisneySea"}
          parkName={"Tokyo DisneySea"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/shanghai.jpg"}
          altText={"Shanghai Disney Resort"}
          parkName={"Shanghai Disney Resort"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/hongkongdl.jpg"}
          altText={"Hong Kong Disneyland"}
          parkName={"Hong Kong Disneyland"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/dl.jpg"}
          altText={"Disneyland"}
          parkName={"Disneyland"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/dca.jpg"}
          altText={"Disney California Adventure"}
          parkName={"Disney California Adventure"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/dlp.jpg"}
          altText={"Disneyland Paris"}
          parkName={"Disneyland Paris"}
        />
        <ParkImageCard
          parkUrl={"#"}
          imgUrl={"/assets/daw.jpg"}
          altText={"Disney Adventure World"}
          parkName={"Disney Adventure World"}
        />
      </div>
    </div>
  );
}
