import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { UploadCloud } from "lucide-react";

const CustomOrder: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#faf5f2] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          {/* <p className="text-sm uppercase tracking-[0.5em] text-[#b37c68] mb-2">Bespoke Service</p> */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#4b1f17]" style={{ fontFamily: "'Oswald', 'Inter', sans-serif" }}>
            Create a Custom Order
          </h1>
        </div>

        <div className="rounded-[32px] bg-white shadow-[0_25px_80px_rgba(75,31,23,0.08)] border border-[#f4dfd8] p-8 md:p-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-[#5c2a21]" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="h-12 rounded-2xl border-[#f0d9d1] bg-[#fff9f6] text-[#4b1f17] placeholder:text-[#c7a6a0] focus-visible:ring-[#a01212]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-[#5c2a21]" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-2xl border-[#f0d9d1] bg-[#fff9f6] text-[#4b1f17] placeholder:text-[#c7a6a0] focus-visible:ring-[#a01212]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-[#5c2a21]" htmlFor="item-type">
                Item Type
              </Label>
              <Select>
                <SelectTrigger
                  id="item-type"
                  className="h-12 rounded-2xl border-[#f0d9d1] bg-[#fff9f6] text-[#4b1f17] focus:ring-offset-0 focus:ring-[#a01212]"
                >
                  <SelectValue placeholder="Select an item type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#f0d9d1]">
                  <SelectItem value="saree">Saree</SelectItem>
                  <SelectItem value="dress">Dress</SelectItem>
                  <SelectItem value="kimono">Kimono</SelectItem>
                  <SelectItem value="shirt">Shirt</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-[#5c2a21]" htmlFor="description">
                Describe Your Vision
              </Label>
              <Textarea
                id="description"
                placeholder="Tell us about the design, colors, and fit you have in mind."
                rows={5}
                className="rounded-3xl border-[#f0d9d1] bg-[#fff9f6] text-[#4b1f17] placeholder:text-[#c7a6a0] focus-visible:ring-[#a01212]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-[#5c2a21]" htmlFor="design-file">
                Upload Reference Image (Optional)
              </Label>
              <label
                htmlFor="design-file"
                className="border border-dashed border-[#e2c7c0] rounded-3xl bg-[#fffdfb] px-6 py-10 flex flex-col items-center text-center cursor-pointer hover:border-[#c88d81] transition"
              >
                <UploadCloud className="h-8 w-8 text-[#c88d81] mb-3" />
                <span className="text-base font-semibold text-[#4b1f17]">Click to upload or drag and drop</span>
                <span className="text-sm text-[#ad8982]">PNG, JPG or GIF (MAX. 800x400px)</span>
              </label>
              <Input id="design-file" type="file" className="hidden" />
            </div>

            <div className="pt-2">
              <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#8b0808] to-[#b51919] text-white text-base font-semibold shadow-[0_12px_30px_rgba(181,25,25,0.35)] hover:opacity-90">
                Submit Custom Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
