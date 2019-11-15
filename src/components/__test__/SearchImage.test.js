import React from "react";
import { shallow } from "enzyme";
import { SearchImage } from "../SearchImage/SearchImage";

describe("Search Component", () => {
  test("displays a gallery", () => {
    const propsMock = {
      searchImage: jest.fn(),
      addToCollection: jest.fn(),
      images: {
        images: [
          {
            data: [{ title: "Title 1", nasaId: "id1" }],
            links: [{ href: "URL1" }]
          },
          {
            data: [{ title: "Title 2", nasaId: "id2" }],
            links: [{ href: "URL2" }]
          }
        ]
      }
    };

    const wrapper = shallow(<SearchImage {...propsMock} />);
    expect(wrapper.find("img")).toHaveLength(2);
  });

  test("show message if there are no assets", () => {
    const propsMock = {
      searchImage: jest.fn(),
      addToCollection: jest.fn(),
      images: {
        images: []
      }
    };

    const wrapper = shallow(<SearchImage {...propsMock} />);

    expect(wrapper.find("img")).toHaveLength(0);
  });

  test("have valid child", () => {
    const propsMock = {
      searchImage: jest.fn(),
      addToCollection: jest.fn(),
      images: {
        images: [
          {
            data: [{ title: "Title 1", nasaId: "id1" }],
            links: [{ href: "URL1" }]
          },
          {
            data: [{ title: "Title 2", nasaId: "id2" }],
            links: [{ href: "URL2" }]
          }
        ]
      }
    };

    const wrapper = shallow(<SearchImage {...propsMock} />);
    expect(wrapper.find("img")).toHaveLength(2);
    expect(wrapper.find('div[className="image-grid"]')).toHaveLength(1);
    expect(wrapper.find('div[className="image-item tooltip"]')).toHaveLength(2);
    expect(wrapper.find('input[className="SearchBox-input"]')).toHaveLength(1);
  });
});
