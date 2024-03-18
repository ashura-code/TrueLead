import React from 'react';
import {uploadPhoto} from "../components/component/upload-photo";


export default function UploadImage() {
    return (<>
        <h1>hello</h1>
    </>)
}






function Component() {
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
  