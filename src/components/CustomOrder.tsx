// src/components/CustomOrder.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const CustomOrder: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Create Your Custom Order</CardTitle>
          <CardDescription>Fill out the form below to get a quote for your custom design.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="item-type">Item Type</Label>
              <Select>
                <SelectTrigger id="item-type">
                  <SelectValue placeholder="Select an item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Shirt">Shirt</SelectItem>
                  <SelectItem value="Top">Top</SelectItem>
                  <SelectItem value="Sarong">Sarong</SelectItem>
                  <SelectItem value="Saree">Saree</SelectItem>
                  <SelectItem value="Dress">Dress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Design Description</Label>
              <Textarea id="description" placeholder="Describe your custom design in detail" rows={5} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="design-file">Upload Design (Optional)</Label>
              <Input id="design-file" type="file" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Submit Request</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomOrder;
