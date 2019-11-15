import nasaImageReducer from "../nasaImage";
import * as actionTypes from "../../actions/actionTypes";

describe("nasaImage REDUCER", () => {
  it("handle actions of type default", () => {
    const exptectedState = {
      images: [],
      loading: true,
      error: {}
    };

    const newState = nasaImageReducer(undefined, {});
    expect(newState).toEqual(exptectedState);
  });

  it("handle actions of type SEARCH_NASA_IMAGES", () => {
    const action = {
      type: actionTypes.SEARCH_NASA_IMAGES,
      payload: [
        {
          data: [
            {
              date_created: "2014-08-07T19:51:51Z",
              keywords: ["Pluto", "New Horizons"],
              center: "JPL",
              title: "A Moon over Pluto Animation",
              media_type: "image",
              description: "A Moon over Pluto Animation description",
              nasa_id: "PIA11217",
              description_508: "A Moon over Pluto Animation description",
              secondary_creator:
                "NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute"
            }
          ],
          href: "https://images-assets.nasa.gov/image/PIA11217/collection.json",
          links: [
            {
              rel: "preview",
              href:
                "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
              render: "image"
            }
          ]
        },
        {
          data: [
            {
              date_created: "1998-03-28T14:44:27Z",
              keywords: ["Pluto", "Hubble Space Telescope"],
              center: "JPL",
              title: "Map of Pluto Surface",
              media_type: "video",
              description: "Map of Pluto Surface description",
              nasa_id: "PIA00826",
              description_508: "Map of Pluto Surface description",
              secondary_creator:
                "Alan Stern Southwest Research Institute, Marc Buie Lowell Observatory, NASA and ESA"
            }
          ],
          href: "https://images-assets.nasa.gov/image/PIA00826/collection.json",
          links: [
            {
              rel: "preview",
              href:
                "https://images-assets.nasa.gov/image/PIA00826/PIA00826~thumb.jpg",
              render: "image"
            }
          ]
        }
      ]
    };

    const exptectedState = {
      images: [
        {
          data: [
            {
              date_created: "2014-08-07T19:51:51Z",
              keywords: ["Pluto", "New Horizons"],
              center: "JPL",
              title: "A Moon over Pluto Animation",
              media_type: "image",
              description: "A Moon over Pluto Animation description",
              nasa_id: "PIA11217",
              description_508: "A Moon over Pluto Animation description",
              secondary_creator:
                "NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute"
            }
          ],
          href: "https://images-assets.nasa.gov/image/PIA11217/collection.json",
          links: [
            {
              rel: "preview",
              href:
                "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
              render: "image"
            }
          ]
        },
        {
          data: [
            {
              date_created: "1998-03-28T14:44:27Z",
              keywords: ["Pluto", "Hubble Space Telescope"],
              center: "JPL",
              title: "Map of Pluto Surface",
              media_type: "video",
              description: "Map of Pluto Surface description",
              nasa_id: "PIA00826",
              description_508: "Map of Pluto Surface description",
              secondary_creator:
                "Alan Stern Southwest Research Institute, Marc Buie Lowell Observatory, NASA and ESA"
            }
          ],
          href: "https://images-assets.nasa.gov/image/PIA00826/collection.json",
          links: [
            {
              rel: "preview",
              href:
                "https://images-assets.nasa.gov/image/PIA00826/PIA00826~thumb.jpg",
              render: "image"
            }
          ]
        }
      ],

      error: {},
      loading: false
    };

    const newState = nasaImageReducer(undefined, action);
    expect(newState).toEqual(exptectedState);
  });

  it("handle actions of type GET_IMAGE_ERROR", () => {
    const action = {
      type: actionTypes.GET_IMAGE_ERROR,
      payload: { err: "error" }
    };

    const exptectedState = {
      images: [],
      error: { err: "error" },
      loading: false
    };

    const newState = nasaImageReducer(undefined, action);
    expect(newState).toEqual(exptectedState);
  });
});
