import React from "react";
import { shallow } from "enzyme";
import { Collections } from "../Collections/Collections";

describe("Collections Component", () => {
  test("displays a gallery", () => {
    const propsMock = {
      getCollection: jest.fn(),
      deleteImageOnCollection: jest.fn(),
      updateImageOnCollection: jest.fn(),
      collection: {
        collections: [
          {
            data: [{ title: "Title 1", nasaId: "id1" }],
            links: [{ href: "URL1" }],
            mediaType: "image"
          },
          {
            data: [{ title: "Title 2", nasaId: "id2" }],
            links: [{ href: "URL2" }],
            mediaType: "image"
          }
        ],
        loading: false
      }
    };

    const wrapper = shallow(<Collections {...propsMock} />);
    expect(wrapper.find("img")).toHaveLength(2);
  });

  test("have valid child", () => {
    const propsMock = {
      getCollection: jest.fn(),
      deleteImageOnCollection: jest.fn(),
      updateImageOnCollection: jest.fn(),
      collection: {
        collections: [
          {
            data: [{ title: "Title 1", nasaId: "id1" }],
            links: [{ href: "URL1" }],
            mediaType: "image"
          },
          {
            data: [{ title: "Title 2", nasaId: "id2" }],
            links: [{ href: "URL2" }],
            mediaType: "image"
          }
        ],
        loading: false
      }
    };

    const wrapper = shallow(<Collections {...propsMock} />);
    expect(wrapper.find("img")).toHaveLength(2);
    expect(wrapper.find('div[className="image-grid"]')).toHaveLength(1);
    expect(wrapper.find('div[className="image-item tooltip"]')).toHaveLength(2);
  });
});
