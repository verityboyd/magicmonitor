import Ride from "./Ride";

//maybe need to add conditionals here for if it's an asian park = no lands, only rides

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import StarIcon from "./StarIcon";

export default function Park({ lands }) {
  return (
    <div className="w-200 p-10 mt-5">
      <Accordion type="multiple" className="w-full">
        {lands.map((land) => (
          <AccordionItem key={land.id} value={String(land.id)}>
            <AccordionTrigger className="text-xl">{land.name}</AccordionTrigger>

            <AccordionContent>
              <div className="space-y-1">
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
