import { useState, useEffect, FC, HTMLAttributes } from "react";

interface JourneyButtonProps extends HTMLAttributes<HTMLDivElement> {
  hovered: boolean;
}

export const JourneyButton: FC<JourneyButtonProps> = ({
  hovered,
  className,
  ...props
}) => {
  const [color, setColor] = useState<"black" | "white">("white");
  const [textColor, setTextColor] = useState<"text-black" | "text-white">(
    "text-white"
  );
  const [containerStyles, setContainerStyles] = useState<string>("");

  useEffect(() => {
    if (hovered) {
      setColor("white");
      setTextColor("text-white");
      setContainerStyles("");
    } else {
      setColor("white");
      setTextColor("text-white");
      setContainerStyles("");
    }
  }, [hovered]);

  return (
    <div
      className={`group w-max px-6 py-4 flex items-center gap-4 ${containerStyles}`}
    >
      <div className="w-max flex gap-4 items-center">
        <span
          className={`normal-case text-p font-semibold ${textColor} transition-left duration-300 ease-linear`}
          style={{
            textTransform: "uppercase",
          }}
        >
          więcej
        </span>
        <img
          src={`/icons/arrow-right-${color}.svg`}
          className="transition-right duration-300"
          alt="button icon"
        />
      </div>
    </div>
  );
};
