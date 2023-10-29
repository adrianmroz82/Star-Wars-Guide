import { render } from "@testing-library/react";
import { ConnectedEntityView } from "../../../../components/ConnectedEntity/ConnectedEntityView";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>,
}));

describe("ConnectedEntityView", () => {
  it("should render a loading state correctly", () => {
    // given
    // when
    const { getByTestId } = render(
      <ConnectedEntityView data={[]} isLoading={true} path="people" entityName="Characters" />
    );

    // then
    expect(getByTestId("loadingSpinner")).toBeInTheDocument();
  });

  it("should render a homeworld data correctly", () => {
    // given
    const homeworldData = {
      name: "Tatooine",
      url: "https://swapi.dev/api/planets/1/",
    };

    // when
    const { getByText } = render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <ConnectedEntityView data={homeworldData as any} isLoading={false} path="planets" entityName="Planets" />
    );

    // then
    expect(getByText("Connected Planets")).toBeInTheDocument();
    expect(getByText("Tatooine")).toBeInTheDocument();
  });

  it("should render a vehicle data correctly", () => {
    // given
    const vehicleData = [
      { name: "X-wing", url: "https://swapi.dev/api/vehicles/12/" },
      { name: "TIE Fighter", url: "https://swapi.dev/api/vehicles/13/" },
    ];

    // when
    const { getByText } = render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <ConnectedEntityView data={vehicleData as any} isLoading={false} path="vehicles" entityName="Vehicles" />
    );

    // then
    expect(getByText("Connected Vehicles")).toBeInTheDocument();
    expect(getByText("X-wing")).toBeInTheDocument();
    expect(getByText("TIE Fighter")).toBeInTheDocument();
  });

  it("should render a character data correctly", () => {
    // given
    const characterData = [
      { name: "Luke Skywalker", url: "https://swapi.dev/api/people/1/" },
      { name: "Darth Vader", url: "https://swapi.dev/api/people/4/" },
    ];

    // when
    const { getByText } = render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <ConnectedEntityView data={characterData as any} isLoading={false} path="people" entityName="Characters" />
    );

    // then
    expect(getByText("Luke Skywalker")).toBeInTheDocument();
    expect(getByText("Darth Vader")).toBeInTheDocument();
  });
});
