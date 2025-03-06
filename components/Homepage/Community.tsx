import Form from "../Contact/Form";

export const Community = () => {
  return (
    <div className="relative bg-black" id="kontakt">
      <div className="flex items-center justify-center py-20 bg-purple-radial-gradient">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-6">
            <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-3 text-center">
              Napisz do nas!
            </div>
            <div className="text-p-emphasis-mobile md:text-p-emphasis text-center">
              Opowiedz nam o swojej wizji – wspólnie stworzymy coś wyjątkowego!
            </div>
            <div className="myFlex">
              <div
                className="pr-4 pl-4"
                style={{
                  flex: 3,
                }}
              >
                <Form />
              </div>
              <div
                className="p-5"
                style={{
                  flex: 1,
                }}
              >
                mgr inż. arch. Katarzyna Tokarz
                <br />
                mgr inż. arch. Janusz Puszyński
                <br />
                <br />
                ul. Listopadowa 56
                <br />
                43-300 Bielsko-Biała
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
        </div>
      </div>
    </div>
  );
};
