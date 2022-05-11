import { SubmitFeedbackService } from "./SubmitFeedbackService";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackService = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackService.execute({
        type: "BUG",
        comment: "Example comment",
        screenshot: "data:image/png;base64;5dasfsaasfd",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedbackService.execute({
        type: "",
        comment: "Example comment",
        screenshot: "data:image/png;base64;5dasfsaasfd",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedbackService.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64;5dasfsaasfd",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without an invalid screeenshot", async () => {
    await expect(
      submitFeedbackService.execute({
        type: "BUG",
        comment: "Example comment",
        screenshot: "image.png",
      })
    ).rejects.toThrow();
  });
});
