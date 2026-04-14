import { SparklesText } from "../ui/sparkles-text";

export default function Welcome() {
  return (
    <section className="lg:w-200 sm:w-full p-5">
      <SparklesText className="text-5xl text-center pb-5 pt-10">
        Welcome
      </SparklesText>
      <h3 className="text-center italic pb-5">
        To all who come to this wait time tracker.... welcome!
      </h3>
      <div className="flex flex-col justify-center items-center">
        <p>
          Magic Monitor has been designed for you to track your favourite ride
          wait times across your favourite Disney parks, whether you&apos;re
          there right now or just wishing you were.
        </p>
        <p className="py-5">
          To get started, find your favourite Park on the Parks page. Then,
          click the star icon next to your favourite rides to track their wait
          time and be notified if it drops below your ideal wait time!
        </p>
      </div>
    </section>
  );
}
