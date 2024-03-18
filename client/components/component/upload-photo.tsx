/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ihjqVZQdpZZ
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function uploadPhoto() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div>Upload Image</div>
        <div>Submit an image file.</div>
      </CardHeader>
      <CardContent className="flex items-start gap-4 pt-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" />
        </div>
        <Button type="submit">Submit</Button>
      </CardContent>
    </Card>
  )
}
