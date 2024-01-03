import { fetchCharacter, fetchCharactersByPage, fetchConnectedCharacters } from "../../../api/character.api";
import { Character } from "../../../models/character.model";
import { httpService } from "../../../api/utils";
import { characterMock, paginatedCharactersMock } from "./sharedMocks";

jest.mock("../../../api/utils", () => ({
  httpService: {
    get: jest.fn(),
  },
}));

describe("fetchCharacter", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch a single character by ID", async () => {
    // given
    const characterId = "1";

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: characterMock });
    const result = await fetchCharacter(characterId);

    // then
    expect(httpService.get).toHaveBeenCalledWith(`/people/${parseInt(characterId)}`);
    expect(result).toEqual(characterMock);
  });

  it("should fetch an array of characters by their URLs", async () => {
    // given
    const characterUrls = ["https://swapi.dev/api/people/11/"];
    const characterDataArray: Character[] = [characterMock];

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: characterDataArray[0] });
    const result = await fetchConnectedCharacters(characterUrls);

    // then
    expect(result).toEqual(characterDataArray);
  });

  it("should fetch characters based on page number", async () => {
    // given
    const page = 2;

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: paginatedCharactersMock });
    const result = await fetchCharactersByPage(page);

    // then
    expect(httpService.get).toHaveBeenCalledWith(`/people/?page=${page}`);
    expect(result).toEqual(paginatedCharactersMock);
  });
});
