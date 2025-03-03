import { NumberItem_1 } from "./NumberItem"
import { NumberItem_2 } from "./NumberItem"
import { NumberItem_3 } from "./NumberItem"

const VerticalSeparator = () => (
  <div className="w-[1px] bg-grey-400 hidden md:block" />
)

const HorizontalSeparator = () => (
  <div className="h-[1px] w-full bg-grey-400 block md:hidden" />
)

export const Numbers = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-[1216px] mx-auto flex items-center justify-center px-4 py-16 md:px-28 md:py-20 bg-purple-radial-gradient-smaller-mobile md:bg-purple-radial-gradient-smaller">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 w-full items-center md:items-stretch place-content-between" id="overview">
          <NumberItem_1 number="200+" text="wykonane projekty" />
          <VerticalSeparator />
          <HorizontalSeparator />
          <NumberItem_2 number="200+" text="zadowoleni klienci" />
          <VerticalSeparator />
          <HorizontalSeparator />
          <NumberItem_3 number="7000000+" text="wypite filiżanki kawy" />
        </div>
      </div>
    </div>
  )
}
