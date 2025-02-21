"use client";

import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Button from "../ui/Button";
// import { AccountCircle, Email, Message } from "@material-ui/icons";
// import emailjs from "@emailjs/browser";

const Form: React.FC = () => {
  useEffect(() => {
    $(".input").on("focus blur", function (this: HTMLInputElement) {
      const $this = $(this);

      // @ts-ignore
      if ($this.val().length > 0 || $(".input").is(":focus")) {
        $this.siblings().addClass("active");
        $this.parent().addClass("active");
      } else {
        $this.siblings().removeClass("active").addClass("not");
        $this.parent().removeClass("active").addClass("not");
      }

      if (
        // @ts-ignore
        ($this.val().length < 2 &&
          $(".input").is(":focus") != true &&
          $this.is(":invalid")) ||
        ($this.is(":invalid") && $(".input").is(":focus") != true)
      ) {
        $this.parent().addClass("invalid");
        $this.siblings().addClass("invalid");
      } else {
        $this.parent().removeClass("invalid");
        $this.siblings().removeClass("invalid");
      }

      if (
        // @ts-ignore
        $this.val().length > 0 &&
        $this.is(":valid") &&
        $(".input").is(":focus") != true
      ) {
        $this.parent().addClass("valid");
        $this.siblings().addClass("valid");
      } else {
        $this.parent().removeClass("valid");
        $this.siblings().removeClass("valid");
      }
    });

    $("#d").change(enableBtn);
    $(".input").blur(enableBtn);

    function enableBtn() {
      if (
        $("#d").is(":checked") == false ||
        $(".input").parent(".input-wrap").hasClass("invalid") == true ||
        // @ts-ignore
        $(".input").val().length < 2
      ) {
        // $("#confirm").prop("disabled", true);
      } else {
        $("#confirm").prop("disabled", false);
      }
    }
    enableBtn();

    $("#confirm").click(function () {
      $("form").submit(function (event) {
        $(".card").addClass("end");
        $(".ending").addClass("showed");
        event.preventDefault();
      });
    });
  }, []);

  const backgroundStyle = {
    // backgroundImage: `url(https://images.pexels.com/photos/6805149/pexels-photo-6805149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_o8geb3j",
    //     "template_zoixkcf",
    //     // @ts-ignore
    //     form.current,
    //     "eSz_GZMKvVtJvnGWk"
    //   )
    //   .then(
    //     () => {
    //       console.log("OK");
    //       // @ts-ignore
    //       form.current.reset();
    //     },
    //     (e: any) => {
    //       console.error(e);
    //     }
    //   );
  };

  return (
    <div className="formbody" style={backgroundStyle}>
      <div className="card">
        <form
          // @ts-ignore
          ref={form}
          onSubmit={sendEmail}
          className="form-wrap"
          id="md-form"
          autoComplete="off"
          method="get"
        >
          <div className={`input-wrap`}>
            <label
              htmlFor="a"
              style={{ marginTop: "-25px", minWidth: 62, whiteSpace: "none" }}
            >
              {/* <AccountCircle
                className={"svgIcon myIcon material-icons"}
                style={{ marginRight: 10, maxWidth: 18 }}
              /> */}
              Tytuł
            </label>
            <input
              name="title"
              className={`input`}
              type="text"
              id="a"
              placeholder=""
              required
            />
          </div>
          <div className={`input-wrap`}>
            <label
              htmlFor="b"
              style={{ marginTop: "-25px", minWidth: 74, whiteSpace: "none" }}
            >
              {/* <Email
                className={"svgIcon myIcon material-icons"}
                style={{ marginRight: 10, maxWidth: 18 }}
              /> */}
              E-mail
            </label>
            <input
              name="from_name"
              className="input"
              type="email"
              id="b"
              placeholder=""
              required
            />
          </div>
          <div className={`input-wrap`}>
            <label
              htmlFor="c"
              style={{ marginTop: "-25px", minWidth: 112, whiteSpace: "none" }}
            >
              {/* <Message
                className={"svgIcon myIcon material-icons"}
                style={{ marginRight: 10, maxWidth: 18 }}
              /> */}
              Wiadomość
            </label>
            <textarea
              name="message"
              style={{ resize: "none" }}
              className="input"
              id="c"
              placeholder=""
              required
            ></textarea>
          </div>
          <div className="input-wrap">
            <input required type="checkbox" id="d" style={{ marginTop: 3 }} />
            <label htmlFor="d" style={{ paddingLeft: 10, paddingTop: 2 }}>
              Akceptuje{" "}
              <a
                href="https://docs.google.com/document/d/1O61mDrXCrHihsXu6SbYX0iL_ofZzOibFagUPYxojjO4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue" }}
              >
                politykę prywatności
              </a>
            </label>
          </div>
          <div
            className="input-wrap"
            style={{
              textAlign: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* <button id="confirm" type="submit">
              Wyślij
            </button> */}
            <Button
              id="confirm"
              label="Wyślij"
              type="secondary"
              svgIcon="arrow-external"
              style={{
                marginLeft: "auto",
                float: "right",
              }}
            />
          </div>
        </form>
        <div className="ending">
          <div></div>
          <div>
            <h2>Twoja wiadomość została wysłana poprawnie</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
