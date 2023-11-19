import { render } from "@testing-library/react";
import { EntityInfo } from "../../../../components/EntityInfo/EntityInfo";

describe("EntityInfo", () => {
  it("should render a character entity information", () => {
    // given
    const character = {
      name: "Luke Skywalker",
      birth_year: "19 BBY",
      eye_color: "Blue",
      gender: "Male",
      skin_color: "Caucasian",
    };

    // when
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getByText } = render(<EntityInfo entity={character as any} path="people" />);

    // then
    expect(getByText("Luke Skywalker")).toBeInTheDocument();
    expect(getByText("Birth Year: 19 BBY")).toBeInTheDocument();
    expect(getByText("Eye color: Blue")).toBeInTheDocument();
    expect(getByText("Gender: Male")).toBeInTheDocument();
    expect(getByText("Skin color: Caucasian")).toBeInTheDocument();
  });

  it("should render a vehicle entity information", () => {
    // given
    const vehicle = {
      name: "X-wing",
      model: "T-65 X-wing starfighter",
    };

    // when
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getByText } = render(<EntityInfo entity={vehicle as any} path="vehicles" />);

    // then
    expect(getByText("X-wing")).toBeInTheDocument();
    expect(getByText("Name: X-wing")).toBeInTheDocument();
    expect(getByText("Model: T-65 X-wing starfighter")).toBeInTheDocument();
  });

  it("should render a planet entity information", () => {
    // given
    const planet = {
      name: "Tatooine",
      population: "200000",
      terrain: "Desert",
      climate: "Arid",
    };

    // when
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getByText } = render(<EntityInfo entity={planet as any} path="planets" />);

    // then
    expect(getByText("Tatooine")).toBeInTheDocument();
    expect(getByText("Name: Tatooine")).toBeInTheDocument();
    expect(getByText("Population: 200000")).toBeInTheDocument();
    expect(getByText("Terrain: Desert")).toBeInTheDocument();
    expect(getByText("Climate: Arid")).toBeInTheDocument();
  });
});
