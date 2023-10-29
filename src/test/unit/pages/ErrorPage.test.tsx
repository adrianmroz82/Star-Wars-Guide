import { render } from "@testing-library/react";
import { ErrorPage } from "../../../pages/ErrorPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("ErrorPage Component", () => {
  it("should render the Error Page content", () => {
    // given
    // when
    const { getByText } = render(<ErrorPage />);

    // then
    expect(getByText("Page not found")).toBeInTheDocument();
    expect(getByText("Sorry, the page you are looking for does not exist.")).toBeInTheDocument();
  });

  it("should render the Error Page for a non-existing URL", () => {
    // given
    // when
    const { getByText } = render(
      <MemoryRouter initialEntries={["/not-existing-url"]}>
        <Routes>
          <Route path="/not-existing-url" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    // then
    expect(getByText("Page not found")).toBeInTheDocument();
    expect(getByText("Sorry, the page you are looking for does not exist.")).toBeInTheDocument();
  });
});
