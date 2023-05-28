import { ChangeEvent, useState } from "react";

export default function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (!files) {
      return;
    }
    const previewURL = URL.createObjectURL(files[0]);
    setPreview(previewURL);
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="media"
        name="coverUrl"
        accept="image/*"
        className={`h-0 w-0 invisible`}
      />
      {preview && (
        <img
          src={preview}
          alt=""
          className={`w-24 h-28 overflow-hidden object-cover`}
        />
      )}
    </>
  );
}