import { SparklesText } from "../ui/sparkles-text";

export default function Welcome() {
  return (
    <section>
      <SparklesText className="text-5xl text-center pb-5">Welcome</SparklesText>
      <h3 className="text-center italic pb-5">
        To all who come to this wait time tracker.... welcome!
      </h3>
      <div>
        Magic Monitor has been designed for you to track your favourite ride
        wait times across your favourite Disney parks, whether you&apos;re there
        right now or just wishing you were.
      </div>
    </section>
  );
}
