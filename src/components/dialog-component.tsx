import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

type ImageProp = {
  image: string;
};

export function DialogComponent({ image }: ImageProp) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          fill
          alt="bigImg"
          className="object-cover cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="relative h-[25rem] w-full py-4">
          <Image
            src={image}
            fill
            alt="bigImg"
            className="object-cover cursor-pointer"
          />
        </div>
        <DialogFooter>
          <Link href="https://www.facebook.com/Arthancel?mibextid=ZbWKwL">
            <Button type="submit">Message me</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
