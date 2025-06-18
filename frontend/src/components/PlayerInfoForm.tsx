import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Swords } from "lucide-react";

const PlayerInfoForm = () => {
  return (
    <Card className="w-full max-w-md bg-stone-900 text-white shadow-2xl rounded-2xl border-0">
      <CardHeader>
        <CardTitle className="text-3xl bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
          Begin Your Adventure
        </CardTitle>
        <CardDescription className="text-lg">
          Enter your details to start your journey.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className="border-none"
                id="name"
                type="text"
                placeholder="Aria"
                required
              />
            </div>

            <div className="grid gap-2 ">
              <Label htmlFor="class">Class</Label>
              <Select>
                <SelectTrigger id="class" className="border-none text-white/40">
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent className="bg-stone-800 text-white border-none rounded-md">
                  <SelectItem value="warrior">Warrior</SelectItem>
                  <SelectItem value="mage">Mage</SelectItem>
                  <SelectItem value="rogue">Rogue</SelectItem>
                  <SelectItem value="healer">Healer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="motivation">Motivation</Label>
              <Input
                id="motivation"
                type="text"
                placeholder="To avenge my village..."
                className="border-none"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="tone">Tone</Label>
              <Select>
                <SelectTrigger id="tone" className="border-none text-white/40">
                  <SelectValue placeholder="Choose a tone" />
                </SelectTrigger>
                <SelectContent className="bg-stone-800 text-white border-none rounded-md">
                  <SelectItem value="serious">Serious</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="light">Light-hearted</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="world">World</Label>
              <Select>
                <SelectTrigger id="world" className="border-none text-white/40">
                  <SelectValue placeholder="Choose a world" />
                </SelectTrigger>
                <SelectContent className="bg-stone-800 text-white border-none rounded-md">
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="post-apocalyptic">
                    Post-Apocalyptic
                  </SelectItem>
                  <SelectItem value="steampunk">Steampunk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full bg-red-400 hover:bg-gradient-to-r from-red-400 to-pink-600 "
        >
          <Swords />
          Start Journey
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlayerInfoForm;
