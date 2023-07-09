import { FormEvent, useEffect, useState } from "react";

interface MediaPickerProps {
  imageURL?: string | undefined;
  action: (title: boolean) => void;
}

export default function MediaPicker({ imageURL, action }: MediaPickerProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const types = ["image/jpeg", "image/svg+xml", "image/jpg", "image/png"];

  function onFileSelected(event: FormEvent<HTMLInputElement>) {
    const files = event.currentTarget.files?.[0];

    if (files && types.includes(files.type)) {
      const previewURL = URL.createObjectURL(files);
      action(true);
      setPreview(previewURL);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (imageURL) {
      setPreview(imageURL);
    }
  }, [imageURL]);

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        name="flyer"
        accept="image/*"
        className={`h-0 w-0 invisible`}
      />
      {preview ? (
        <img
          src={preview}
          alt=""
          className={`w-32 h-28 overflow-hidden object-cover rounded`}
        />
      ) : (
        <div className="w-32 h-28 border-2 border-primary flex items-center justify-center rounded">
          preview
        </div>
      )}
    </>
  );
}
