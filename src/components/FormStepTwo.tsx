import { ChangeEvent, MouseEvent } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import styles from "../styles/Form.module.scss";
import Button from "./Button";

interface FormStepTwoProps {
  handleStepTwo: () => void;
  handleStepTwoBack: () => void;
  stepOneComplete: boolean;
  stepTwoComplete: boolean;
  tags: { tag1: string; tag2: string; tag3: string };
  jobDescription: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTagChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMarkdownChange: (text: string) => void;
  applyLink: string;
}

export default function FormStepTwo({
  handleStepTwo,
  handleStepTwoBack,
  stepOneComplete,
  stepTwoComplete,
  tags,
  jobDescription,
  handleChange,
  handleTagChange,
  handleMarkdownChange,
  applyLink
}: FormStepTwoProps) {
  const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Assuming you have a method to check if the job description is blank
    const isJobDescBlank = () => {
      // Implement your logic to determine if the job description is blank
      return false; // Placeholder return
    };

    const applyLinkInput = document.querySelector(
      "#apply-link"
    ) as HTMLInputElement;
    const linkErrorMessage = document.querySelector(
      "#apply-link-error"
    ) as HTMLElement;

    let isValid = true;

    if (isJobDescBlank()) {
      // You should replace this with the actual logic to check if the job description is blank
      isValid = false;
    }

    if (!applyLinkInput.value) {
      applyLinkInput.style.borderColor = "red";
      isValid = false;
    }

    if (!validateApplyLink(applyLinkInput.value)) {
      applyLinkInput.style.borderColor = "red";
      linkErrorMessage.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Reset styles if valid
      if (applyLinkInput) {
        applyLinkInput.style.borderColor = "";
      }
      if (linkErrorMessage) {
        linkErrorMessage.style.display = "none";
      }
      handleStepTwo();
    }
  };

  const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleStepTwoBack();
  };

  function isValidURL(url: string): boolean {
    const urlRegex =
      /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    return urlRegex.test(url);
  }

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  function validateApplyLink(value: string): boolean {
    return isValidURL(value) || isValidEmail(value);
  }

  return (
    <section
      className={
        !stepOneComplete
          ? styles.hidden
          : stepOneComplete && !stepTwoComplete
          ? styles.stepTwoSection
          : styles.hidden
      }
    >
      <div className={styles.stepTwoContainer}>
        <p className={styles.label}>Enter up to three tags (optional):</p>
        <div className={styles.tagContainer}>
          {Object.entries(tags).map(([key, value], index) => (
            <div key={key} className={styles.tagWrap}>
              <label className={styles.label} htmlFor={`tag${index + 1}`}>
                #
              </label>
              <input
                className={styles.input}
                placeholder="Tag"
                type="text"
                id={`tag${index + 1}`}
                name={`tag${index + 1}`}
                value={value}
                onChange={handleTagChange}
              />
            </div>
          ))}
        </div>
        <label className={styles.label} htmlFor="job-desc">
          Job description *
        </label>
        <MdEditor
          value={jobDescription}
          style={{ height: "500px" }}
          onChange={(e: { text: string }) => handleMarkdownChange(e.text)}
          renderHTML={(text: any) => text}
        />
        <div className={styles.applyLinkCont}>
          <label className={styles.label} htmlFor="apply-link">
            Application link or email address *
          </label>
          <input
            className={styles.input}
            placeholder="ex. https://www.google.com/"
            type="text"
            id="apply-link"
            name="apply-link"
            aria-required="true"
            value={applyLink}
            onChange={handleChange}
            required
          />
          <span className={styles.applyLinkError} id="apply-link-error">
            Please enter a valid URL or email address.
          </span>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          className={styles.prevStepBtn}
          onClick={handleBack}
          text="Back"
        />
        <Button
          className={styles.nextStepBtn}
          onClick={handleNext}
          text="Preview"
        />
      </div>
    </section>
  );
}
