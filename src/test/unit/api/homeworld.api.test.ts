import { fetchConnectedHomeworld, fetchHomeworld, fetchHomeworldsByPage } from "../../../api/homeworld.api";
import { httpService } from "../../../api/utils";
import { homeworldMock, paginatedHomeworldsMock } from "./sharedMocks";

jest.mock("../../../api/utils", () => ({
  httpService: {
    get: jest.fn(),
  },
}));

describe("fetchCharacter", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch a single planet by ID", async () => {
    // given
    const homeworldId = "1";

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: homeworldMock });
    const result = await fetchHomeworld(homeworldId);

    // then
    expect(httpService.get).toHaveBeenCalledWith(`/planets/${parseInt(homeworldId)}`);
    expect(result).toEqual(homeworldMock);
  });

  it("should fetch a connected planet by its URL", async () => {
    // given
    const homeworldUrl = "https://swapi.dev/api/planets/1/";
    // const characterDataArray: Homeworld = homeworldMock

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: homeworldMock });
    const result = await fetchConnectedHomeworld(homeworldUrl);

    // then
    expect(result).toEqual(homeworldMock);
  });

  it("should fetch planets based on page number", async () => {
    // given
    const page = 2;

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: paginatedHomeworldsMock });
    const result = await fetchHomeworldsByPage(page);

    // then
    expect(httpService.get).toHaveBeenCalledWith(`/planets/?page=${page}`);
    expect(result).toEqual(paginatedHomeworldsMock);
  });
});
