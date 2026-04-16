import Ride from "./Ride";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Park({ lands }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <Accordion type="multiple" className="w-full">
        {lands.map((land) => (
          <AccordionItem key={land.id} value={String(land.id)}>
            <AccordionTrigger className="text-xl">{land.name}</AccordionTrigger>

            <AccordionContent className="pb-4">
              <div className="space-y-1 pb-6 md:pb-10">
                {land.rides.map((ride) => (
                  <div key={ride.id} className="border rounded p-2 w-full">
                    <Ride ride={ride} />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
