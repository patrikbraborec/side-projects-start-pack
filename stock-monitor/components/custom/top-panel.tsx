import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

export const TopPanel = () => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <form
          //   onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-2"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  );
};
