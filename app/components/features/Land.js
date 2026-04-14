/*import Ride from "./Ride";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Land({ land }) {
  return (
    <Card size="default" className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{land.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" collapsible className="border">
          {lands.map((land) => (
            <AccordionItem
              key={land.name}
              value={land.name}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger>{land.name}</AccordionTrigger>

              <AccordionContent>
                <div>
                  {land.rides.map((ride) => (
                    <Ride key={ride.id} ride={ride} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
 <h2 className="text-2xl font-semibold"></h2>

      {land.rides.map((ride) => (
        <Ride key={ride.id} ride={ride} />
      ))}
        */
