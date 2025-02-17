import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SavedQuestionHeaderButton from "./SavedQuestionHeaderButton";

describe("SavedQuestionHeaderButton", () => {
  let onSave;
  let question;
  let componentContainer;

  beforeEach(() => {
    onSave = jest.fn();
    question = {
      displayName: () => "foo",
      getModerationReviews: () => [],
    };

    const { container } = render(
      <SavedQuestionHeaderButton question={question} onSave={onSave} />,
    );

    componentContainer = container;
  });

  it("renders the name of the question", () => {
    expect(screen.getByText("foo")).toBeInTheDocument();
  });

  it("is updateable", () => {
    const title = screen.getByTestId("saved-question-header-title");
    userEvent.type(title, "1");
    title.blur();

    expect(onSave).toHaveBeenCalled();
  });

  describe("when the question does not have a latest moderation review", () => {
    it("should contain no additional icons", () => {
      expect(componentContainer.querySelector(".Icon")).toEqual(null);
    });
  });

  describe("when the question has a latest moderation review", () => {
    beforeEach(() => {
      question = {
        displayName: () => "foo",
        getModerationReviews: () => [
          { status: null },
          { most_recent: true, status: "verified" },
        ],
      };

      const { container } = render(
        <SavedQuestionHeaderButton question={question} onSave={onSave} />,
      );

      componentContainer = container;
    });

    it("should have an additional icon to signify the question's moderation status", () => {
      expect(componentContainer.querySelector(".Icon")).toBeDefined();
    });
  });
});
