'use client'
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent } from "react";
import { useState } from "react";


export default function UploadPhoto() {
  const [imagedata, setImageData] = useState([])
  async function handleImage(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const image = files[0];
      const formData = new FormData();
      formData.append('image', image);
      await getImages(formData);
    }
  }

  async function getImages(formData: FormData) {
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    const response = await fetch('https://anemo.productsearch.app/search?platform=web&searchInStores=&model=general&offset=0&limit=50&ekey=U2FsdGVkX1%2BXgJs9r3S8qfX%2B1jpaaA%2B922EuaYH2W1bYQooM4xoa7IvYrnWq0lHhw9GTAnzqHmMI1K0lcw7TfImf2UCZhiYJDaIN9Oee56c%3D', requestOptions);
    const data = await response.json();
    console.log(data);
    //send the data to the imagedat but how?
    await setImageData(data.products);
    
    
    
    return data;
  }
  
  console.log(imagedata.pr);
  async function handleSubmit() {
    const inputElement = document.getElementById('image') as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const formData = new FormData();
      formData.append('image', inputElement.files[0]);
      await getImages(formData);
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div>Upload Image</div>
        <div>Submit an image file.</div>
      </CardHeader>
      <CardContent className="flex items-start gap-4 pt-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" onChange={handleImage} />
        </div>
        <Button type="button" onClick={handleSubmit}>Submit</Button>
      </CardContent>
    </Card>
  )
}
