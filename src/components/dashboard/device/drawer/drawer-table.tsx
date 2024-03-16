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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Description</TableHead>
          <TableHead className={"pl-60"}></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {description.map((property: any) => (
          <TableRow key={property.id}>
            <TableCell className="font-medium">{property.title}</TableCell>
            <TableCell className={"pl-60"}>{property.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DrawerTable;
