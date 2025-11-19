import axios from "axios";
import { getLocation } from "./getDataService";
import { LOCATION_API } from "../constants";

jest.mock("axios");

describe("getCoordinates", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch coordinates successfully", async () => {
    const mockResponse = {
      data: {
        lon: 24.9427473,
        lat: 60.1674881,
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    const coordinates = await getLocation("helsinki");

    expect(axios.get).toHaveBeenCalledWith( `${LOCATION_API}helsinki&key=${import.meta.env.VITE_API_KEY}`);
    expect(coordinates).toEqual(mockResponse.data);
  });
});
