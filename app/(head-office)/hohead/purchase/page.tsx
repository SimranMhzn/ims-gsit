'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formData } from '@/lib/form.data';
import { Check, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Page() {
  const [data, setFormData] = useState(formData);

  const handleDelete = (id: string) => {
    setFormData((prev) => prev.filter((d) => d['form-id'] !== id));

    toast.success('Deleted successfully!');
  };

  const handleAccept = (id: string) => {
    setFormData((prev) => prev.filter((d) => d['form-id'] !== id));
    toast.success('Accepted successfully!');
  };
  const filteredData = data.filter((data) => data.status === 'Pending');
  return (
    <div className="p-6 flex flex-col gap-5 w-full">
      <h1 className="text-3xl font-bold">View Purchase Form </h1>
      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <Table className="w-full">
          <TableHeader className="bg-black/40">
            <TableRow>
              <TableHead className="text-md text-white">PRODUCT NAME</TableHead>
              <TableHead className="text-md text-white">AMOUNT</TableHead>
              <TableHead className="text-md text-white">QUANTITY</TableHead>
              <TableHead className="text-md text-white">CATEGORY</TableHead>
              <TableHead className="text-md text-white">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((data) => (
              <TableRow key={data['form-id']}>
                <TableCell>{data.productName}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>{data.category}</TableCell>
                <TableCell className="flex gap-5 mt-2">
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <div
                            className="p-2 bg-gray-200 rounded-lg hover:bg-gray-100"
                            onClick={() => handleDelete(data['form-id'])}
                          >
                            <Trash color="red" />
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input
                              id="name-1"
                              name="name"
                              defaultValue="Pedro Duarte"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input
                              id="username-1"
                              name="username"
                              defaultValue="@peduarte"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Post</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>

                  <div
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-100"
                    onClick={() => handleAccept(data['form-id'])}
                  >
                    <Check color="green" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
