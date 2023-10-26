import img from "../../assets/luke.png";

export const CharacterAsset = () => {
  return (
    <div
      style={{
        flex: "2",
        height: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
