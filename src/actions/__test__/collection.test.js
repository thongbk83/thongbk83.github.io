import React from "react";
import thunk from "redux-thunk";

import configureMockStore from "redux-mock-store";
import mockAxios from "axios";
import {
  addToCollection,
  getCollection,
  deleteImageOnCollection,
  updateImageOnCollection
} from "../collection";

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test collection actions", () => {
  beforeEach(() => {
    store = mockStore();
  });

  it("addToCollection", async done => {
    const mockData = {
      dateCreated: "2014-08-07T19:51:51Z",
      title: "A Moon over Pluto Animation",
      description: "A Moon over Pluto Animation description",
      nasaId: "PIA11217",
      mediaType: "image",
      linkPreview:
        "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
      linkFile:
        "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
    };

    const expectedAction = {
      type: "ADD_IMAGE_TO_COLLECTION",
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

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    await store.dispatch(addToCollection(mockData));

    // assertions / expects
    expect(store.getActions()[0]).toEqual(expectedAction);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    done();
  });

  it("getCollection", async done => {
    const mockData = {
      id1: {
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

    const expectedAction = {
      type: "GET_COLLECTION",
      payload: [
        {
          id: "id1",
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
      ]
    };

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    await store.dispatch(getCollection());

    // assertions / expects
    expect(store.getActions()[0]).toEqual(expectedAction);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    done();
  });

  it("deleteImageOnCollection", async done => {
    const mockData = {
      id: 1
    };

    const expectedAction = {
      type: "REMOVE_IMAGE",
      payload: 1
    };

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    await store.dispatch(deleteImageOnCollection(1));

    // assertions / expects
    expect(store.getActions()[0]).toEqual(expectedAction);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    done();
  });

  it("updateImageOnCollection", async done => {
    const mockData = {
      id: "id1",
      dateCreated: "2014-08-07T19:51:51Z",
      title: "A Moon over Pluto Animation",
      description: "A Moon over Pluto Animation description",
      nasaId: "PIA11217",
      mediaType: "image",
      linkPreview:
        "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg",
      linkFile:
        "https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg"
    };

    const expectedAction = {
      type: "EDIT_IMAGE",
      payload: {
        id: "id1",
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

    mockAxios.patch.mockImplementationOnce(() =>
      Promise.resolve({ data: mockData })
    );

    await store.dispatch(updateImageOnCollection("id1", mockData));

    // assertions / expects
    expect(store.getActions()[0]).toEqual(expectedAction);
    expect(mockAxios.patch).toHaveBeenCalledTimes(1);
    done();
  });
});
