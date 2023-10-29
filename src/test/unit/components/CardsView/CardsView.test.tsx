import { render } from "@testing-library/react";
import { CardsView } from "../../../../components/CardsView/CardsView";
import { Card } from "../../../../components/Card/Card";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>,
}));

describe("CardsView", () => {
  it("should render a single CardsView component", () => {
    //given
    const entity = [
      { name: "Luke Skywalker", url: "luke-url" },
      { name: "Darth Vader", url: "vader-url" },
    ];

    // when
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getAllByTestId } = render(<CardsView data={entity as any} path="people" />);    
    const cards = getAllByTestId("cardsView");

    // then
    expect(cards).toHaveLength(1);
  });

  it("should render a Card component for each entity", () => {
    //given
    const entity = [
      { name: "Luke Skywalker", url: "luke-url" },
      { name: "Darth Vader", url: "vader-url" },
    ];

    
    // when
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getAllByTestId } = render(<Card data={entity as any} index={1} path="people" />);
    const cards = getAllByTestId("cardEntityName");

    // then
    expect(cards).toHaveLength(entity.length);

    entity.forEach((entity, index) => {
      const card = cards[index];
      expect(card).toHaveTextContent(entity.name);
    });
  });
});
