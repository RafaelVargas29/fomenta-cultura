/* eslint-disable @typescript-eslint/no-non-null-assertion */

interface AvatarProps {
  alt: string;
  url: string;
  width: number;
  height: number;
  hasBorder?: boolean;
}
export function Avatar({ hasBorder, url, alt, height, width }: AvatarProps) {
  const name = "Fomenta Cultura";

  return (
    <div
      title="profile"
      className={`rounded-full flex-shrink-0 overflow-hidden     
      ${hasBorder && `border-2 border-primary`}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <a href={"/profile"}>
        {url ? (
          <img src={url} alt={alt} className="object-cover" />
        ) : (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className={`font-bold flex-center bg-primary text-white border-2 border-primary`}
          >
            {name
              .split("")[0]
              .concat(name.split("")[name.split("").length - 7])
              .toLocaleUpperCase()}
          </div>
        )}
      </a>
    </div>
  );
}
