"use client";

import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Form: React.FC = () => {
  useEffect(() => {
    $(".input").on("focus blur", function (this: HTMLInputElement) {
      const $this = $(this),
        hasValue = $this.val().length > 0,
        isFocused = $(".input").is(":focus");

      $this
        .siblings()
        .toggleClass("active", hasValue || isFocused)
        .toggleClass("not", !hasValue && !isFocused);
      $this
        .parent()
        .toggleClass("active", hasValue || isFocused)
        .toggleClass("not", !hasValue && !isFocused);

      const isInvalid =
        ($this.val().length < 2 || $this.is(":invalid")) && !isFocused;
      $this
        .siblings()
        .add($this.parent())
        .toggleClass("invalid", isInvalid)
        .toggleClass("valid", !isInvalid && hasValue && $this.is(":valid"));
    });

    const enableBtn = () => {
      $("#confirm").prop(
        "disabled",
        !$("#d").is(":checked") ||
          $(".input-wrap.invalid").length > 0 ||
          $(".input").val().length < 2
      );
    };

    $("#d, .input").on("change blur", enableBtn);
    $("#confirm").click(() => {
      $("form").submit((e) => {
        $(".card").addClass("end");
        $(".ending").addClass("showed");
        e.preventDefault();
      });
    });

    enableBtn();
  }, []);

  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Potwierdź, że nie jesteś robotem!");
      return;
    }

    emailjs
      .sendForm(
        "service_o8geb3j",
        "template_zoixkcf",
        // @ts-ignore
        form.current,
        "eSz_GZMKvVtJvnGWk"
      )
      .then(
        () => {
          console.log("OK");
          // @ts-ignore
          form.current.reset();
        },
        (e: any) => {
          console.error(e);
        }
      );
  };

  return (
    <div className="formbody">
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
          <div
            className="input-wrap"
            style={{
              marginBottom: 20,
            }}
          >
            <input required type="checkbox" id="d" />
            <label htmlFor="d" style={{ paddingLeft: 10, paddingTop: 2 }}>
              Akceptuje{" "}
              <a
                href="/policy"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#9ae721" }}
              >
                politykę prywatności
              </a>
            </label>
          </div>

          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={(value) => setCaptchaValue(value)}
          />

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
              type="primary"
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
