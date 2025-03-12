import { FC, HTMLAttributes } from "react";
import { combination } from "../../lib/utils";
import { useRouter } from "next/navigation";

interface ExampleCardProps extends HTMLAttributes<HTMLButtonElement> {
  icon: "coinbase" | "cosmos" | "lido" | "moonpay-purple" | "objkt" | "solana";
  title: string;
  subtitle: string;
  description: string;
  type: "device" | "interaction" | "blockchain" | "live-app";
}

export const ExampleCard: FC<ExampleCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  type,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    switch (type) {
      case "device":
        router.push("/docs/device-app/getting-started");
        break;
      case "interaction":
        router.push("/docs/device-interaction/getting-started");
        break;
      case "blockchain":
        router.push("/docs/ledger-live/accounts/getting-started");
        break;
      case "live-app":
        router.push("/docs/ledger-live/discover/getting-started");
        break;
      default:
        break;
    }
  };

  return (
    <button
      style={{
        cursor: "auto",
      }}
      className={combination(
        "group flex flex-col w-[384px] px-6 py-8 rounded border-[0.5px] border-grey-700 hover:border-white bg-grey-900 text-left ease-linear duration-300",
        className
      )}
      {...props}
    >
      <div className="flex gap-4 items-center">
        <div className="text-heading-6 font-semibold tracking-tight-1">
          {title}
        </div>
      </div>
      ⭐⭐⭐⭐⭐
      <br />
      <br />
      <div className="text-p text-grey-300 !leading-[28px] mb-6">
        {description}
      </div>
    </button>
  );
};
