import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

const DrawerTable = ({ description }: any) => {
  return (
    <Table className={"mt-3"}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10vw] md:w-[100px]">Description</TableHead>
          <TableHead className={"pl-32 md:pl-60"}></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {description.map((property: any) => (
          <TableRow key={property.id}>
            <TableCell className="font-medium">{property.title}</TableCell>
            <TableCell className={"sm:pl-0 md:pl-60 italic text-gray-300"}>
              {property.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DrawerTable;
