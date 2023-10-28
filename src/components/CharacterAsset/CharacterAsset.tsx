import { Path } from "../../models/path.model";

interface Props {
  index?: number;
  path?: Path;
}

export const EntityAsset = ({ index, path }: Props) => {
  return (
    <div
      style={{
        flex: "2",
        height: "100%",
        backgroundImage: `url(${`../../../${path}/${index}.jpg`})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
