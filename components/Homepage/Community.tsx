import Form from "../Contact/Form";
// import Button from "../ui/Button";

export const Community = () => {
  return (
    <div className="relative bg-black" id="kontakt">
      {/* px-28 */}
      <div className="flex items-center justify-center py-20 bg-purple-radial-gradient">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-6">
            {/* <span className="tagText text-purple">Community driven</span> */}
            <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-3 text-center">
              {/* Join the Ledger Developer Community */}
              Napisz do nas!
            </div>
            <div className="text-p-emphasis-mobile md:text-p-emphasis text-center">
              {/* The top Web3 developers and security experts are here to help,
              debate, share and build with you what shapes the future of
              blockchain. */}
              Opowiedz nam o swojej wizji – wspólnie stworzymy coś wyjątkowego!
            </div>
            <div className="myFlex">
              <div
                style={{
                  flex: 3,
                }}
              >
                <Form />
              </div>
              <div
                style={{
                  flex: 1,
                  padding: 20,
                }}
              >
                🧑‍🎨 mgr inż. arch. Katarzyna Tokarz
                <br />
                🧑‍🎨 mgr inż. arch. Janusz Puszyński
                <br />
                <br />
                🏙️ ul. Listopadowa 56, 43-300 Bielsko-Biała
                <br />
                <br />
                <a href="tel:+48338115820" target="_blank">
                  📞 +48 33 811 58 20
                </a>
                <br />
                <a href="mailto:projekt@duffla.pl" target="_blank">
                  📧 projekt@duffla.pl
                </a>
              </div>
            </div>
          </div>
          {/* <Button
            label="Join us on Discord"
            type="white"
            svgIcon="arrow-external"
          /> */}
        </div>
      </div>
    </div>
  );
};
