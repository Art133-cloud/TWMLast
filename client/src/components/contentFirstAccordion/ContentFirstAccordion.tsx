"use client"
import styles from "./ContentFirstAccordion.module.scss";
import { useState } from "react";
export default function ContentFirstAccordion({ onPhotoChange }: { onPhotoChange: (url: string) => void }) {
    const [fileName, setFileName] = useState<string>("");
    const [tempImage, setTempImage] = useState<string | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.type.startsWith("image/")) {
          const imageUrl = URL.createObjectURL(file);
          setTempImage(imageUrl);
          setFileName(file.name);
        } else {
          alert("Please select an image file.");
        }
      }
    };
  
    const handleSavePhoto = () => {
      if (tempImage) {
        onPhotoChange(tempImage);
        setTempImage(null);
        setFileName("");
      }
    };
  
    return (
      <div className={styles.contentFirstAccordion}>
        <label htmlFor="photo">Change Profile Photo</label>
        <input id="photo" type="file" onChange={handleFileChange} accept="image/*" />
        {tempImage && (
          <div>
            <img src={tempImage} alt="Selected Profile" width={100} height={100} />
            <button onClick={handleSavePhoto}>Готово</button>
          </div>
        )}
      </div>
    );
  }
  