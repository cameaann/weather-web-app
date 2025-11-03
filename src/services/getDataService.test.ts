import axios from "axios";
import { getCoordinates } from "./getDataService";
import { locationUrl } from "../constants";

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

    const coordinates = await getCoordinates("helsinki");

    expect(axios.get).toHaveBeenCalledWith( `${locationUrl}helsinki&key=${import.meta.env.VITE_API_KEY}`);
    expect(coordinates).toEqual(mockResponse.data);
  });
});
