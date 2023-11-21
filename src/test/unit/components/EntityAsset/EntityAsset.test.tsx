import { render } from "@testing-library/react";
import { EntityAsset } from "../../../../components/EntityAsset/EntityAsset";
import { Path } from "../../../../models/shared.model";

describe("EntityAsset", () => {
  it("should render with index and path", () => {
    // given
    const index = 1;
    const path = "homeworld";

    // when
    const { getByTestId } = render(<EntityAsset index={index} path={path as Path} />);
    const entityAsset = getByTestId("entity-asset");

    // then
    expect(entityAsset).toBeInTheDocument();
    expect(entityAsset).toHaveStyle({
      backgroundImage: `url(../../../${path}/${index}.jpg)`,
    });
  });
});
