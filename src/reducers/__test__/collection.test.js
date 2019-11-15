import collectionReducer from "../collection";
import * as actionTypes from "../../actions/actionTypes";

describe("collection REDUCER", () => {
  it("handle actions of type default", () => {
    const exptectedState = {
      collections: [],
      loading: true,
      error: {}
    };
    const newState = collectionReducer(undefined, {});
    expect(newState).toEqual(exptectedState);
  });

  it("handle actions of type ADD_IMAGE_TO_COLLECTION", () => {
    const action = {
      type: actionTypes.ADD_IMAGE_TO_COLLECTION,
      payload: {
        dateCreated: "2014-08-07T19:51:51Z",
        title: "A Moon over Pluto Animation",
        description: "A Moon over Pluto Animation description",
        nasaId: "PIA11217",
        mediaType: "image",
        linkPreview:
          "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
        linkFile:
          "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
      }
    };

    const currentState = {
      collections: [
        {
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const exptectedState = {
      collections: [
        {
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        },
        {
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const newState = collectionReducer(currentState, action);
    expect(newState).toEqual(exptectedState);
  });

  it("handle actions of type GET_COLLECTION", () => {
    const action = {
      type: actionTypes.GET_COLLECTION,
      payload: [
        {
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        },
        {
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        }
      ]
    };

    const currentState = {
      collections: [
        {
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const exptectedState = {
      collections: [
        {
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        },
        {
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const newState = collectionReducer(currentState, action);
    expect(newState).toEqual(exptectedState);
  });

  it("handle actions of type REMOVE_IMAGE_ON_COLLECTION", () => {
    const action = {
      type: actionTypes.REMOVE_IMAGE_ON_COLLECTION,
      payload: 1
    };

    const currentState = {
      collections: [
        {
          id: 1,
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        },
        {
          id: 2,
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const exptectedState = {
      collections: [
        {
          id: 2,
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const newState = collectionReducer(currentState, action);
    expect(newState).toEqual(exptectedState);
  });

  it("handle actions of type UPDATE_IMAGE_ON_COLLECTION", () => {
    const action = {
      type: actionTypes.UPDATE_IMAGE_ON_COLLECTION,
      payload: {
        id: 1,
        dateCreated: "2015-08-07T19:51:51Z",
        title: "Moon1 edit",
        like: true,
        description: "Moon1 description edit",
        nasaId: "PIA11211",
        mediaType: "image",
        linkPreview:
          "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
        linkFile:
          "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
      }
    };

    const currentState = {
      collections: [
        {
          id: 1,
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1",
          description: "Moon1 description",
          nasaId: "PIA11211",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        },
        {
          id: 2,
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const exptectedState = {
      collections: [
        {
          id: 1,
          dateCreated: "2015-08-07T19:51:51Z",
          title: "Moon1 edit",
          description: "Moon1 description edit",
          nasaId: "PIA11211",
          mediaType: "image",
          like: true,
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11211~thumb.jpg"
        },
        {
          id: 2,
          dateCreated: "2014-08-07T19:51:51Z",
          title: "A Moon over Pluto Animation",
          description: "A Moon over Pluto Animation description",
          nasaId: "PIA11217",
          mediaType: "image",
          linkPreview:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
          linkFile:
            "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
        }
      ],

      error: {},
      loading: false
    };

    const newState = collectionReducer(currentState, action);
    expect(newState).toEqual(exptectedState);
  });
});
