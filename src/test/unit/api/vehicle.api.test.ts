import { httpService } from "../../../api/utils";
import { fetchConnectedVehicles, fetchVehicle, fetchVehiclesByPage } from "../../../api/vehicle.api";
import { paginatedVehiclesMock, vehicleMock } from "./sharedMocks";

jest.mock("../../../api/utils", () => ({
  httpService: {
    get: jest.fn(),
  },
}));

describe("fetchVehicle", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch a single vehicle by ID", async () => {
    // given
    const vehicleId = "1";

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: vehicleMock });
    const result = await fetchVehicle(vehicleId);

    // then
    expect(httpService.get).toHaveBeenCalledWith(`/vehicles/${parseInt(vehicleId)}`);
    expect(result).toEqual(vehicleMock);
  });

  it("should fetch a connected vehicle by its URL", async () => {
    // given
    const vehicleUrls = ["https://swapi.dev/api/vehicles/4/"];

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: vehicleMock });
    const result = await fetchConnectedVehicles(vehicleUrls);

    // then
    expect(result).toEqual([vehicleMock]);
  });

  it("should fetch vehicles based on page number", async () => {
    // given
    const page = 2;

    // when
    (httpService.get as jest.Mock).mockResolvedValueOnce({ data: paginatedVehiclesMock });
    const result = await fetchVehiclesByPage(page);

    // then
    expect(httpService.get).toHaveBeenCalledWith(`/vehicles/?page=${page}`);
    expect(result).toEqual(paginatedVehiclesMock);
  });
});
