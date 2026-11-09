import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqList({ items }: { items: Array<[string, string]> }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-0">
      {items.map(([question, answer], index) => (
        <AccordionItem value={`item-${index}`} key={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
